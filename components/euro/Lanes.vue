<template>
  <section id="lanes" class="lanes" aria-labelledby="lanes-title">
    <div class="wrap">
      <div class="head">
        <div>
          <p class="kicker">FOB Hai Phong · shipping lanes</p>
          <h2 id="lanes-title" v-reveal:blur>An apparel factory in Vietnam, <em>one sailing</em> from your warehouse.</h2>
        </div>
        <div class="tabs" role="group" aria-label="Destination">
          <button
            v-for="(l, i) in lanes"
            :key="l.id"
            type="button"
            :aria-pressed="i === current"
            @click="current = i"
          >
            {{ l.label }}
          </button>
        </div>
      </div>

      <!-- A route chart, not a map: stops along one line, drawn on reveal and
           redrawn when the destination changes. -->
      <div v-reveal:fade class="chart">
        <div :key="lane.id" class="route">
          <svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
            <line class="sea" x1="0" y1="20" x2="1000" y2="20" />
            <line class="path" :x1="lane.stops[0].x * 10" y1="20" :x2="lane.stops.at(-1).x * 10" y2="20" pathLength="1" />
          </svg>
          <span class="ship" aria-hidden="true" :style="{ '--from': `${lane.stops[0].x}%`, '--to': `${lane.stops.at(-1).x}%` }" />

          <ol class="stops">
            <li
              v-for="(s, i) in lane.stops"
              :key="s.code"
              :class="{ origin: s.origin, end: s.end }"
              :style="{ left: `${s.x}%`, '--d': `${i * 0.28}s` }"
            >
              <b>{{ s.code }}</b>
              <span>{{ s.name }}</span>
            </li>
          </ol>
        </div>

        <div class="facts">
          <div>
            <p class="k">Lane</p>
            <p class="v">{{ lane.title }}</p>
          </div>
          <div>
            <p class="k">Transit</p>
            <p class="v">{{ lane.transit }}</p>
          </div>
          <div>
            <p class="k">Discharge ports</p>
            <p class="v">{{ lane.ports.join(' · ') }}</p>
          </div>
          <p class="note">{{ lane.note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import lanes from '@/data/lanes.json'

const current = ref(0)
const lane = computed(() => lanes[current.value])
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(.16, 1, .3, 1);

.lanes {
  padding: clamp(80px, 10vw, 144px) 0;
  border-top: 1px solid var(--rule);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 32px;
  flex-wrap: wrap;

  h2 { margin-top: 16px; max-width: 13em; }
}

.tabs {
  display: inline-flex;
  padding: 4px;
  border: 1px solid var(--rule);
  border-radius: 999px;

  button {
    font: 500 14px/1 var(--f);
    padding: 12px 20px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--thread);
    cursor: pointer;
    transition: background .25s, color .25s;

    &[aria-pressed="true"] { background: var(--ink); color: var(--paper); }
    &:not([aria-pressed="true"]):hover { color: var(--ink); }
  }
}

.chart {
  margin-top: clamp(48px, 6vw, 88px);
  padding: clamp(28px, 4vw, 56px);
  background: #EFE9DD;
  border-radius: 6px;
  /* Faint chart grid, like a nautical plotting sheet. */
  background-image:
    linear-gradient(rgba(23, 21, 18, .05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(23, 21, 18, .05) 1px, transparent 1px);
  background-size: 48px 48px;
}

.route {
  position: relative;
  height: 140px;

  svg {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    width: 100%;
    height: 40px;
    overflow: visible;
  }
}

.sea {
  stroke: rgba(23, 21, 18, .25);
  stroke-width: 1;
  stroke-dasharray: 2 6;
  vector-effect: non-scaling-stroke;
}

.path {
  stroke: var(--selvedge);
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw 2.2s $ease .2s forwards;
}

@keyframes draw { to { stroke-dashoffset: 0; } }

.ship {
  position: absolute;
  top: 64px;
  left: var(--from);
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: var(--selvedge);
  box-shadow: 0 0 0 6px rgba(126, 63, 32, .18);
  animation: sail 6s ease-in-out 2.4s infinite;
}

@keyframes sail {
  0% { left: var(--from); opacity: 0; }
  8% { opacity: 1; }
  85% { opacity: 1; }
  100% { left: var(--to); opacity: 0; }
}

.stops {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    text-align: center;
    opacity: 0;
    animation: stop .6s ease forwards;
    animation-delay: var(--d);

    &::before {
      content: "";
      position: absolute;
      top: 64px;
      width: 9px;
      height: 9px;
      margin-top: -4.5px;
      border-radius: 50%;
      background: var(--paper);
      border: 1.5px solid var(--ink);
    }

    &.origin::before,
    &.end::before { background: var(--ink); }
  }

  b {
    font-family: var(--serif);
    font-weight: 400;
    font-size: clamp(18px, 2vw, 28px);
    line-height: 1;
  }

  span {
    margin-top: 14px;
    font-size: 12px;
    color: var(--thread);
    white-space: nowrap;
  }
}

@keyframes stop {
  from { opacity: 0; transform: translate(-50%, 8px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid rgba(23, 21, 18, .15);

  p { margin: 0; }

  .k {
    font-size: 11px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--thread);
  }

  .v {
    margin-top: 8px;
    font-family: var(--serif);
    font-size: clamp(20px, 1.8vw, 26px);
    line-height: 1.2;
  }

  .note {
    grid-column: 1 / -1;
    font-size: 15px;
    color: #4a453d;
    max-width: 44em;
  }
}

/* Hold the drawing until the chart scrolls into view (plugins/reveal.ts). */
:global(.reveal-on) .chart:not(.is-in) {
  .path,
  .ship,
  .stops li { animation-play-state: paused; }
}

@media (max-width: 720px) {
  /* Six stops do not fit side by side on a phone: keep the codes, drop the
     names, which the facts below repeat. */
  .stops span { display: none; }
  /* Close stops (RTM / HAM) collide at this width: every other code drops
     below the line. */
  .stops li:nth-child(even) b { margin-top: 90px; }
  .stops b { font-size: 16px; }
  .facts { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .path { animation: none; stroke-dashoffset: 0; }
  .ship { display: none; }
  .stops li { animation: none; opacity: 1; }
}
</style>
