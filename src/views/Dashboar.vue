<template>
  <div class="white pb-16 d-flex align-center space-between overflow-y-auto">
    
    <v-container class="text-center py-4">

      <v-row class="w-100 d-flex align-center mx-0 text-center">
          <validation-observer class="w-100" v-slot="{handleSubmit}" ref="formValidator">

            <v-form class="form__validate__style white--text w-100" role="form" @submit.prevent="handleSubmit(sendSearch)">
                
              <v-row class="m-0 pb-8">

                <v-col base="12" sm="12" lg="4">
                  <base-select-validate
                    rules="required"
                    type="text"
                    name="Type"
                    :items="items"
                    clearable
                    append-icon="mdi-map-marker"
                    class="white--text w-100"
                    label="Select the type of your search."
                    prependIcon="mdi-account"
                    v-model="typeofsearch"
                  />
                </v-col>

                <v-col sm="12" lg="6">
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
                </v-col>

                <v-col sm="12" lg="2">
                  <v-btn type="submit" color="red" class="white--text" block depressed rounded x-large>
                    Search {{typeofsearch}}
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>

          </validation-observer>
      </v-row>


      <div v-if="haveResults || videos.length > 0">
        <div class="videos pt-4">
          <card-video v-for="(video, index) in videos" :key="index" :video="video"/>
        </div>
      </div>

      <div v-else>
        <p>No search applies, search for any song or band in the field above.</p>
      </div>

      <div v-if="search">
        
        <div v-if="search.length >= 15 && videos.length == 0">
          <h3>No videos found at the moment <b v-if="search">for the search: {{search}}</b></h3>
        </div>
      </div>

      <div v-if="nextPageToken" class="py-6">
        <v-btn color="red" depressed large class="white--text" rounded @click="loadMoreVideos">
          Load more videos
        </v-btn>
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
      typeofsearch: null,
      items: [
        {title: "Video", value:"video"},
        {title: "Playlist", value:"playlist"},
        {title: "Channel", value:"channel"}
      ]
    }
  },


  methods: {
    ...mapActions('video', ['getVideosBySearchName']),
    ...mapActions('loader', ['setLoading']),

    sendSearch() {
      const payload = {
        search: this.search,
        type: this.typeofsearch
      }
      this.setLoading(true)
      this.getVideosBySearchName(payload)
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

    loadMoreVideos(){
      const payload = {
        search: this.search,
        nextPageToken: this.nextPageToken,
        type: this.typeofsearch
      }

      this.setLoading(true)
      this.getVideosBySearchName(payload)
        .then((res) => {
          this.$toast.success('Success.')
          this.haveResults = true
        }).catch(() => {
          this.nothingFound = true
          this.$toast.error('Error.')
        }).finally(() => {
          this.setLoading(false)
        })
    }
  },

  computed: {
    ...mapState('video', ['videos', 'nextPageToken'])
  }
  
}
</script>

<style lang="scss">
  .videos {
    display: grid;
    gap: 1rem;
    width: 100%;
    max-width: 100% !important;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  // @media (min-width: 768px) {
  //   .videos {
  //   }
  // }
  
  // @media (min-width: 1265px) {
  //   .videos {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  // }

  // @media (min-width: 1900px) {
  //   .videos {
  //     grid-template-columns: repeat(3, 1fr);
  //   }
  // }
</style>
