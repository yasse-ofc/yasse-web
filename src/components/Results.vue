<script setup lang="ts">
import Series from './Series.vue';
import { useSeriesStore } from '../stores/seriesStore';
</script>

<template>
    <article class="searchResults">
        <h2 class="resultText">SEARCH RESULTS:</h2>
        <div class="seriesGathered">
            <Series
                v-for="series in seriesStore.resultData"
                :title="formatText(series.title.toUpperCase())"
                :href="series.href"
                :img="series.img"
                :latest-chapter="series.latestChapter"
                :source="series.source.toUpperCase()"
            />
        </div>
    </article>
</template>

<style scoped>
.resultText {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 48%;
    border-radius: 1.7rem 0 0;
    color: var(--secondary);
    background-color: var(--accent);
    margin: 0;
    position: fixed;
}

.searchResults {
    width: 95%;
    height: 90%;
    border-radius: 30px 0 0 30px;
    background-color: var(--secondary);
    overflow-y: scroll;
}

.seriesGathered {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    margin-top: 70px;
}

h2 {
    text-align: center;
}
</style>

<script lang="ts">
export default {
    data() {
        return { seriesStore: useSeriesStore() };
    },
    methods: {
        formatText(text: string) {
            if (text.length > 80) return text.slice(0, 77) + '...';
            return text;
        }
    }
}
</script>