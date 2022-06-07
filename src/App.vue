<template>
  <v-app>
    <div class="full-screem d-flex flex-column justify-space-between">
      <slide-y-up-transition :duration="500" origin="center top" mode="out-in">
        <router-view/>
      </slide-y-up-transition>
      <bottom-base />

      <v-overlay :value="loading">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
    </div>
  </v-app>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { SlideYUpTransition } from 'vue2-transitions';

export default {
  components: {
    SlideYUpTransition
  },

  created(){
    this.setLoading(true)
    this.loadFavorite()
      .finally(() => {
        this.setLoading(false)
      })
  },

  methods: {
    ...mapActions('loader', ['setLoading']),
    ...mapActions('video', ['loadFavorite'])
  },

  computed: {
    ...mapState('loader', ['loading'])
  }
}
</script>

<style lang="scss">
  .full-screem {
    // height: 100vh;
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