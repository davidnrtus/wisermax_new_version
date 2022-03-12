<template>
  <div class="clearfixed">
    <div class="tu-section text-center">
      <div v-if="error.statusCode === 404" class="e404">
        <h1>Opps! Page not found</h1>
      </div>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/" class="link">Back to Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'error',
    props: ['error']
  }
</script>

<style lang="scss" scoped>
// .logo-error {
//   padding-bottom: 12%;
//   position: relative;
//   img {
//     position: absolute;
//     top: 0;
//     left: 50%;
//     width: auto !important;
//     height: 100%;
//     transform: translateX(-50%);
//   }
// }
</style>