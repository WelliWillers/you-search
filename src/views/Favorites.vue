<template>
    <v-container class="text-center pt-4 pb-16"> 
        <div class="py-3">
            <h1>Your favorites videos</h1>    
        </div>  
        <div v-if="favorites.length > 0" class="videos py-4">
            
            <card-video v-for="(video, index) in favorites" isFavorite :key="index" :video="video"/>
        </div>
        <div v-else>
            <p>No favorite videos yet</p>
        </div>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('video', ['favorites'])
    }
}
</script>