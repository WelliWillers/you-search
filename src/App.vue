<template>
  <v-app>
    <div class="full-screem d-flex flex-column justify-space-between">
      <!-- <v-progress-circular
        indeterminate
        size="64"
      > -->
          <router-view/>
          <bottom-base />
      <!-- </v-progress-circular> -->
    </div>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('loader', ['loading'])
  }
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
    .gap__1rem{
      gap: 1rem;
    }
  }
</style>