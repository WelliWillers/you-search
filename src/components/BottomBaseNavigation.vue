<template>
    <v-bottom-navigation
        :value="value"
        color="white"
        background-color="red"
        fixed
        
    >
        <v-btn>
            <span>Search new</span>

            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
            <span>Favorites</span>

            <v-icon>mdi-heart</v-icon>
        </v-btn>

    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "bottom-base",

        data() {
            return {
                value: 0 
            }
        },
    }
</script>

<style>

</style>