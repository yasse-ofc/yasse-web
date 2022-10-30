<template>
    <div class="series">
        <img class="seriesImage" :src=img :alt=title>
        <div class="seriesInfo">
            <span class="seriesTitle"><a :href=href target="_blank" rel="noopener noreferrer">{{title}}</a></span>
            <hr>
            <span class="seriesLatestChapter">LATEST CHAPTER: {{latestChapter}}</span>
            <span class="seriesSource">SOURCE: {{source}}</span>
        </div>
    </div>
    <hr class="seriesDivider">
</template>

<style scoped>
.series {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    min-height: 150px;
    width: 90%;

    font-family: 'Poppins', sans-serif;
}

.seriesImage {
    max-height: 150px;
    max-width: 100px;
    border-radius: 20px;
    border: 3px solid var(--background);
}

.seriesInfo {
    display: flex;
    flex-direction: column;

    width: 70%;

    color: var(--background);
}

.seriesTitle > a {
    font-size: 1.3vw;
    color: var(--accent);
}

.seriesTitle > a:hover {
    color: var(--background);
    transition: color 0.3s;
}

.seriesSource {
    color: var(--grey-darker);
}

.seriesDivider {
    width: 95%;
    border-top: 2px solid var(--grey-dark);
}
</style>

<script lang="ts">
export default {
    props: ['title', 'href', 'img', 'latestChapter', 'source']
}
</script>