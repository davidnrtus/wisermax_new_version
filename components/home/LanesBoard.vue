<template>
  <section id="lanes" class="band lanes">
    <div class="wrap">
      <div class="head">
        <h2>FOB Hai Phong — <em>lanes we sail.</em></h2>
        <p>
          Transit times typical for direct sea freight in normal conditions;
          peak season and canal congestion add 5–10 days. Your forwarder
          confirms the exact schedule at booking.
        </p>
      </div>

      <div class="board">
        <div class="row hd">
          <span>Code</span>
          <span>Destination</span>
          <span>Transit</span>
          <span>Frequency</span>
          <span style="text-align:right">Days</span>
        </div>
        <div v-for="lane in lanes" :key="lane.code" class="row">
          <span class="code">{{ lane.code }}</span>
          <span class="place">
            {{ lane.place }}
            <small>{{ lane.sub }}</small>
          </span>
          <span class="via">{{ lane.via }}</span>
          <span class="freq">{{ lane.freq }}</span>
          <span class="days">{{ lane.days }}</span>
        </div>
        <div class="foot">Air freight quoted from Noi Bai (HAN) on request.</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import lanes from '@/data/lanes.json'
</script>

<style lang="scss" scoped>
.head {
  margin-bottom: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: end;
}

h2 {
  font-size: clamp(36px, 4.4vw, 64px);
  line-height: 1;
  max-width: 18ch;

  em { color: var(--rust); }
}

.head p {
  margin: 0;
  color: #3a352e;
  font-size: 16px;
  max-width: 44ch;
  justify-self: end;
}

.board {
  border-top: 1.5px solid var(--ink);
}

.row {
  display: grid;
  grid-template-columns: 100px 1.6fr 1fr 1fr 120px;
  gap: 24px;
  padding: 22px 0;
  border-bottom: 1px solid var(--rule);
  align-items: baseline;

  &.hd {
    font: 600 11px/1 var(--sans);
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--mute);
    padding: 14px 0;
  }

  .code {
    font-family: var(--serif);
    font-weight: 500;
    font-size: 24px;
    letter-spacing: .03em;
  }

  .place {
    font-weight: 500;
    font-size: 16px;

    small {
      display: block;
      color: var(--mute);
      font-family: var(--serif);
      font-style: italic;
      font-weight: 400;
      margin-top: 2px;
      font-size: 13.5px;
    }
  }

  .via,
  .freq {
    color: var(--mute);
    font-size: 14px;
  }

  .days {
    text-align: right;
    font-family: var(--serif);
    font-weight: 500;
    font-size: 19px;
    letter-spacing: -.01em;
  }
}

.foot {
  padding: 18px 0 0;
  font-family: var(--serif);
  font-style: italic;
  font-size: 14px;
  color: var(--mute);
  text-align: center;
}

@media (max-width: 1000px) {
  .head { grid-template-columns: 1fr; p { justify-self: start; } }

  .row {
    grid-template-columns: 80px 1fr 90px;
    gap: 14px;

    .via,
    .freq { display: none; }

    &.hd span:nth-child(3),
    &.hd span:nth-child(4) { display: none; }
  }
}
</style>
