<template>
    <v-card
        class="rounded-xl"
        width="100%"
    >
        <v-img
            class="white--text align-end"
            height="250px"
            :src="video.snippet.thumbnails.high.url"
        />

        <v-card-subtitle class="pb-0">
            {{video.snippet.publishedAt}}
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <v-card-title>{{video.snippet.title}}</v-card-title>
        </v-card-text>

        <v-card-actions class="d-flex justify-center pb-5 gap__1rem">
            <watch-video v-if="video.id.videoId" :videoId="video.id.videoId" :title="video.snippet.title" />

            <v-btn
                large
                rounded
                v-if="video.id.videoId"
                color="blue"
                class="white--text px-3"
                @click.prevent="vaforitateVideo(video)"
            >
                <v-icon>mdi-cards-heart-outline</v-icon>
            </v-btn>
            
            <v-btn
                large
                rounded
                v-if="video.id.playlistId"
                color="red"
                class="white--text px-3"
                :href="`https://www.youtube.com/watch?v=${video.etag}`"
                target="blank"
            >
                Watch playlist on youtube
            </v-btn>

            <v-btn
                large
                rounded
                v-if="video.id.channelId"
                color="red"
                class="white--text px-3"
                :href="`https://www.youtube.com/channel/${video.id.channelId}`"
                target="blank"
            >
                Go to channel
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "card-video",

    props: {
        video: {
            type: Object,
            require: true
        }
    },

    methods: {
        ...mapActions('video', ['addToFavorite']),
        ...mapActions('loader', ['setLoading']),

        vaforitateVideo(video){
            this.setLoading(true);
            this.addToFavorite(video)
                .then(() => {
                    this.$toast.success('Video favorited with success!')
                })
                .catch((error) => {
                    this.$toast.success(error.message)
                })
                .finally(() => {
                    this.setLoading(false);
                })
        }
    }

}
</script>

<style>

</style>