<template>
  <section id="quote" class="final">
    <div class="wrap">
      <div class="kicker">Start a programme</div>
      <h2>Send a <em>tech pack.</em> We'll come back with a plan.</h2>
      <p>
        PDF, Illustrator, Excel or photos of a reference garment.
        A merchandiser replies within one working day with open questions
        and a full FOB costing within five.
      </p>
      <div class="row">
        <a
          class="btn rust"
          :href="`mailto:${info.email_primary}?subject=Tech%20pack%20—%20FOB%20Hai%20Phong`"
        >Email a tech pack</a>
        <NuxtLink class="btn ghost" to="/contact">Book a call</NuxtLink>
      </div>

      <div class="contact">
        <div>
          <b>Email</b>
          <a :href="`mailto:${info.email_primary}`">{{ info.email_primary }}</a><br>
          <a :href="`mailto:${info.email_secondary}`">{{ info.email_secondary }}</a>
        </div>
        <div>
          <b>Phone &amp; WhatsApp</b>
          <a :href="`tel:${info.phone_href}`">{{ info.phone }}</a><br>
          <span>{{ info.hours }}</span>
        </div>
        <div>
          <b>Office</b>
          <span>{{ info.company_name }}</span><br>
          <span>{{ info.address_full }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import info from '@/data/info'
</script>

<style lang="scss" scoped>
.final {
  padding: clamp(96px, 12vw, 180px) 0;
  text-align: center;
}

.kicker { margin-bottom: 36px; }

h2 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(52px, 7.4vw, 124px);
  line-height: .98;
  margin: 0 auto 32px;
  max-width: 16ch;
  font-variation-settings: "opsz" 72;

  em { color: var(--rust); }
}

p {
  margin: 0 auto 44px;
  max-width: 44ch;
  color: #3a352e;
  font-size: 17px;
}

.row {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.contact {
  margin: 52px auto 0;
  max-width: 820px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: left;
  padding-top: 36px;
  border-top: 1px solid var(--hair);

  div b {
    display: block;
    font: 600 11px/1 var(--sans);
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--mute);
    margin-bottom: 10px;
  }

  a {
    border-bottom: 1px solid var(--ink);
    padding-bottom: 1px;

    &:hover { color: var(--rust); border-color: var(--rust); }
  }

  span { color: var(--ink); }
}

@media (max-width: 1000px) {
  .contact { grid-template-columns: 1fr; }
}
</style>
