<template>
  <section id="process" class="process" aria-labelledby="process-title">
    <div class="wrap">
      <div class="head">
        <p class="kicker">How a programme runs</p>
        <h2 id="process-title" v-reveal:blur>From tech pack to <em>Rotterdam</em>, in five steps.</h2>
      </div>

      <ol class="steps">
        <li v-for="(s, i) in process" :key="s.n" v-reveal="i">
          <span class="n">{{ s.n }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.description }}</p>
          <span class="d">{{ s.duration }}</span>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import process from '@/data/process.json'
</script>

<style lang="scss" scoped>
.process {
  padding: clamp(80px, 10vw, 144px) 0;
  border-top: 1px solid var(--rule);
}

.head h2 { margin-top: 16px; max-width: 13em; }

.steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  margin: clamp(48px, 6vw, 88px) 0 0;
  padding: 0;
  list-style: none;
  counter-reset: step;

  li {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 28px 24px 0 0;
    border-top: 1px solid var(--ink);
    position: relative;

    /* A knot on the thread at each step. */
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: 0;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--selvedge);
    }
  }

  .n {
    font-family: var(--serif);
    font-style: italic;
    font-size: 40px;
    line-height: 1;
    color: var(--selvedge);
  }

  h3 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: 26px;
    line-height: 1.1;
  }

  p { margin: 0; font-size: 15px; line-height: 1.6; color: #4a453d; }

  .d {
    margin-top: auto;
    padding-top: 8px;
    font-size: 12px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--thread);
  }
}

@media (max-width: 1024px) {
  .steps { grid-template-columns: repeat(2, 1fr); row-gap: 40px; }
}

@media (max-width: 560px) {
  .steps { grid-template-columns: 1fr; }
}
</style>
