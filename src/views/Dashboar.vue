<template>
  <div class="white h-100 d-flex align-center space-between">
    
    <v-container class="text-center">

      <logo class="pb-12"/>

      <validation-observer v-slot="{handleSubmit}" ref="formValidator">

        <v-form class="form__validate__style white--text" role="form" @submit.prevent="handleSubmit(sendSearch)">
          <div class="">
            <base-input-validate
              :rules="{ required: true }"
              type="text"
              name="search"
              class="white--text"
              label="Search your band or a music."
              prependIcon="mdi-account"
              v-model="search"
              @change="sendSearch"
            />
            <v-btn
              fab
              dark
              type="submit"
              large
              color="primary"
            >
              <v-icon dark>
                mdi-magnify
              </v-icon>
            </v-btn>
          </div>
        </v-form>

      </validation-observer>
        
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      search: null
    }
  },


  methods: {
    ...mapActions('video', ['getVideosBySearchName']),

    sendSearch() {
      this.getVideosBySearchName(this.search)
        .then((res) => {
          this.$toast.success('Success.')
        }).catch(() => {
          this.$toast.error('Error.')
        }).finally(() => {
          this.$toast.success('Finish.')
        })
    }
  },

  computed: {
    ...mapState('videos', ['videos'])
  }
  
}
</script>

<style lang="scss" scoped>
  .search__box {
    max-width: 50rem;
  }
</style>
