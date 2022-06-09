<template>
    <v-speed-dial
        class="mb-16"
        :bottom="true"
        :right="true"
        fixed
        direction="top"
        transition="slide-y-reverse-transition"
    >
        <template v-slot:activator>
            <v-btn
                fab
                large
                @click.prevent="clearVideos"
                color="red darken-2 white--text"
            >
                Clear
            </v-btn>
        </template>
    </v-speed-dial>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'button-claer',

    methods: {
        ...mapActions('video', ['clearSearchFilter']),
        ...mapActions('loader', ['setLoading']),

        clearVideos(){
            this.setLoading(true)
            this.clearSearchFilter()
                .then(() => {
                    this.$toast.success('Successful clean search.')
                })
                .finally(() => {
                    this.setLoading(false)
                })
        }
    }

}
</script>

<style>

</style>