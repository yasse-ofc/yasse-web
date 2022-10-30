<script setup lang="ts">
import Series from './Series.vue';
import { useSeriesStore } from '../stores/seriesStore';
</script>

<template>
    <article class="searchResults">
        <h2 class="resultText">RESULTADOS DA PESQUISA:</h2>
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
    width: 45%;
    border-radius: 1.7rem 1.7rem 0 0;
    color: var(--secondary);
    background-color: var(--accent);
    margin: 0;
    position: fixed;
}

.searchResults {
    width: 90%;
    height: 90%;
    border-radius: 30px;
    background-color: var(--secondary);
    overflow: scroll;
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