// Scroll motion.
//
// v-reveal[:variant]="i" — plays once when the element enters the viewport.
//   variants: up (default) · blur (headings) · mask (photo wipes up, image
//   settles from zoom) · left · right · scale · fade
//   i: optional sibling index for a stagger (capped).
// v-count — counts the first number in the element's text up from 0 once
//   visible, keeping its formatting ("600,000", "AQL 1.0", "12 yrs").
//
// The hidden state only applies under html.reveal-on, which an inline head
// script sets before first paint (see nuxt.config.ts). If this plugin never
// runs, that script drops the class again, so content can't stay hidden.
const MAX_STAGGER = 6
const VARIANTS = new Set(['up', 'blur', 'mask', 'left', 'right', 'scale', 'fade'])

function staggerOf(value: unknown) {
  const n = Number(value)
  return Number.isFinite(n) ? Math.min(Math.max(n, 0), MAX_STAGGER) : 0
}

function variantOf(arg?: string) {
  return arg && VARIANTS.has(arg) ? arg : 'up'
}

const NUMBER = /\d[\d,]*(?:\.\d+)?/

function countUp(el: HTMLElement) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  let node: Text | null = null
  while (walker.nextNode()) {
    const t = walker.currentNode as Text
    if (NUMBER.test(t.data)) { node = t; break }
  }
  if (!node) return

  const original = node.data
  const match = original.match(NUMBER)!
  const raw = match[0]
  const target = parseFloat(raw.replace(/,/g, ''))
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
  const grouped = raw.includes(',')
  const before = original.slice(0, match.index)
  const after = original.slice(match.index! + raw.length)
  const format = (v: number) =>
    grouped
      ? v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : v.toFixed(decimals)

  const duration = 1600
  const start = performance.now()
  const target$ = node
  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 4)
    target$.data = before + format(target * eased) + after
    if (p < 1) requestAnimationFrame(tick)
    else target$.data = original
  }
  requestAnimationFrame(tick)
}

export default defineNuxtPlugin((nuxtApp) => {
  let revealer: IntersectionObserver | null = null
  let counter: IntersectionObserver | null = null

  if (import.meta.client) {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const enabled = !reduced && 'IntersectionObserver' in window

    if (enabled) {
      root.classList.add('reveal-on', 'reveal-ready')

      revealer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-in')
            revealer!.unobserve(entry.target)
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
      )

      counter = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            countUp(entry.target as HTMLElement)
            counter!.unobserve(entry.target)
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
      )
    } else {
      root.classList.remove('reveal-on')
    }
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.setAttribute('data-reveal', variantOf(binding.arg))
      el.style.setProperty('--reveal-i', String(staggerOf(binding.value)))
      revealer?.observe(el)
    },
    unmounted(el: HTMLElement) {
      revealer?.unobserve(el)
    },
    getSSRProps(binding) {
      return {
        'data-reveal': variantOf(binding.arg),
        style: { '--reveal-i': staggerOf(binding.value) },
      }
    },
  })

  nuxtApp.vueApp.directive('count', {
    mounted(el: HTMLElement) {
      el.setAttribute('data-count', '')
      counter?.observe(el)
    },
    unmounted(el: HTMLElement) {
      counter?.unobserve(el)
    },
    getSSRProps() {
      return { 'data-count': '' }
    },
  })
})
