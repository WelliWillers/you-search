<template>
  <div class="white pb-16 d-flex align-center space-between" :class="{'h-100': !haveResults}">
    
    <v-container class="text-center">

      <div class="w-100 d-flex align-center " :class="{'flex-row justify-space-between': haveResults, 'flex-column': !haveResults}">
        <logo class="pb-12"/>

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
      </div>


      <div v-if="haveResults || videos" class="videos">
        <v-card
          v-for="(video, index) in videos"
          :key="index"
          class=""
          width="100%"
        >
          <v-img
            class="white--text align-end"
            height="250px"
            :src="video.snippet.thumbnails.high.url"
          >
            <v-card-title>{{video.snippet.title}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            {{video.snippet.publishedAt}}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions class="d-flex justify-center pb-5">
            <v-btn
              color="red"
              class="white--text"
            >
              Watch video
            </v-btn>

            <v-btn
              color="blue"
              class="white--text"
            >
              Favorite
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <div v-else>
        <h1>No videos found at the moment <b v-if="search">for the search: {{search}}</b></h1>
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
    }
  },


  methods: {
    ...mapActions('video', ['getVideosBySearchName']),

    sendSearch() {
      this.getVideosBySearchName(this.search)
        .then((res) => {
          this.$toast.success('Success.')
          this.haveResults = true
        }).catch(() => {
          this.$toast.error('Error.')
        }).finally(() => {
          
        })
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
