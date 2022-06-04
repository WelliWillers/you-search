<template>
  <v-app>
    <div class="full-screem d-flex flex-column justify-space-between">
      <router-view/>
      <bottom-base />
    </div>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .full-screem {
    height: 100vh;
    width: 100vw;

    .h-100 {
      height: 100%;
    }
    .w-100 {
      width: 100%;
    }
  }
</style>