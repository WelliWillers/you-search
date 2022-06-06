<template>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="1000"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="red"
                class="white--text"
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>mdi-play-circle</v-icon>
            </v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar
                    color="red"
                    dark
                >{{title}}</v-toolbar>
                <v-card-text class="pa-4">
                    <iframe
                        width="100%"
                        height="500"
                        :src="`https://www.youtube.com/embed/${videoId}`"
                        :title="title"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; picture-in-picture"
                        allowfullscreen
                    />
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn
                        solid
                        color="red"
                        class="white--text"
                        @click="dialog.value = false"
                    >Close</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
export default {
    name: "watch-video",

    props: {
        videoId: {
            type: String,
            required: true
        },
        title: {
            type: String
        }

    }

}
</script>

<style>

</style>