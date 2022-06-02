<template>
  <div class="primary h-100">
    <validation-observer v-slot="{handleSubmit}" ref="formValidator">
      <v-form class="form__validate__style w-100" role="form" @submit.prevent="handleSubmit(sendSearch)">
        <base-input-validate 
            :rules="{email: true, required: true}"
            type="text"
            name="search"
            label=""
            prependIcon="mdi-account"
            v-model="search"
            hint="Search your band here..."
        />
      </v-form>
    </validation-observer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      search: null
    }
  },


  methods: {
    sendSearch() {
      alert(this.search)
    }
  }
  
}
</script>
