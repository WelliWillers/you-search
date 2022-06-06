<template>
    <div v-if="haveResults || videos.length > 0" class="videos pt-4">
        <card-video v-for="(video, index) in videos" :key="index" :video="video"/>
    </div>
</template>

<script>
export default {

}
</script>