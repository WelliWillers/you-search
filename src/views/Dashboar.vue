<template>
  <div class="white pb-16 d-flex align-center space-between" :class="{'h-100': !haveResults}">
    
    <v-container class="text-center py-4">

      <v-row class="w-100 d-flex align-center m-0" :class="{'flex-row justify-space-between': haveResults, 'flex-column': !haveResults}">
        <v-col md="4" class="texte-left">
          <logo class="pb-5" />
        </v-col>

        <v-col md="4">
          <validation-observer class="w-100" v-slot="{handleSubmit}" ref="formValidator">

            <v-form class="form__validate__style white--text w-100" role="form" @submit.prevent="handleSubmit(sendSearch)">
                <base-input-validate
                  :rules="{ required: true }"
                  type="text"
                  name="Search"
                  clearable
                  append-icon="mdi-map-marker"
                  class="white--text w-100"
                  label="Search your band or a music."
                  prependIcon="mdi-account"
                  v-model="search"
                />
            </v-form>

          </validation-observer>
        </v-col>
      </v-row>


      <div v-if="haveResults || videos.length > 0" class="videos pt-4">
        <card-video v-for="(video, index) in videos" :key="index" :video="video"/>
      </div>

      <div v-if="search">
        <div v-if="search.length >= 15 && videos.length == 0">

          <h3>No videos found at the moment <b v-if="search">for the search: {{search}}</b></h3>
        </div>
      </div>
        
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      search: null,
      haveResults: false,
      nothingFound: false,
    }
  },


  methods: {
    ...mapActions('video', ['getVideosBySearchName']),
    ...mapActions('loader', ['setLoading']),

    sendSearch() {
      this.setLoading(true)
      this.getVideosBySearchName(this.search)
        .then((res) => {
          this.$toast.success('Success.')
          this.haveResults = true
        }).catch(() => {
          this.nothingFound = true
          this.$toast.error('Error.')
        }).finally(() => {
          this.setLoading(false)
        })
    },

    vaforitateVideo(id){
      localStorage.setItem()
    }
  },

  computed: {
    ...mapState('video', ['videos'])
  }
  
}
</script>

<style lang="scss" scoped>
  .videos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: 100%;
  }
</style>
