<template>
  <section class="manifesto">
    <div class="wrap">
      <div class="kicker">A note from the workshop</div>
      <p>
        The garment that <em>ships</em> is the garment you <em>approved.</em>
        Sampled in our room, sealed under our name on the container.
      </p>
      <div class="sig">— Wisermax HN, since 2014</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.manifesto {
  padding: clamp(80px, 10vw, 144px) 0;
  text-align: center;
  border-top: 1px solid var(--hair);
  border-bottom: 1px solid var(--hair);

  .kicker { margin-bottom: 36px; }

  p {
    font-family: var(--serif);
    font-weight: 400;
    font-size: clamp(28px, 3.2vw, 44px);
    line-height: 1.28;
    letter-spacing: -.005em;
    margin: 0 auto;
    max-width: 22ch;
    font-variation-settings: "opsz" 60;
    color: var(--ink);
  }

  p em { color: var(--rust); font-style: italic; }

  .sig {
    margin-top: 32px;
    font-family: var(--serif);
    font-style: italic;
    font-size: 16px;
    color: var(--mute);
  }
}
</style>
