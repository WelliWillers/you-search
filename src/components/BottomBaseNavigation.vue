<template>
    <v-bottom-navigation
        :value="value"
        color="white"
        light
        hide-on-scroll
        background-color="red"
        fixed
        grow
    >
        <v-btn class="" :to="{ path: '/' }">
            <h3>Search new</h3>
            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn :to="{ path: '/favorites' }">
            <h3>Favorites</h3>
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