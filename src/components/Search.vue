<script setup lang="ts">
import { useSeriesStore } from '../stores/seriesStore';
</script>

<template>
  <form class="search" @submit.prevent="onSubmit">
    <select ref="seriesType" class="selectSeriesType">
      <option value="anime">Anime</option>
      <option value="manga">Manga</option>
      <option value="novel">Novel</option>
      <option value="webtoon">Webtoon</option>
    </select>
    <input class="searchBar" ref="searchTerm" placeholder="Series to search for...">
  </form>
</template>

<style scoped>
.search {
  width: 90%;
}

.searchBar {
  border: 3px solid var(--secondary);
  border-radius: 1rem;

  width: 100%;
  height: 3%;

  margin-top: 5%;
  text-align: center;
}

.searchBar:focus {
  outline: none;
  box-shadow: none;
  border: 3px solid var(--accent);
}

.selectSeriesType {
  height: 3%;
  width: 30%;
  background-color: var(--accent);
}
</style>

<script lang="ts">
export default {
  data() {
    return { seriesStore: useSeriesStore() };
  },
  methods: {
    async onSubmit() {
      const searchTerm = (await this.$refs["searchTerm"] as any).value;
      const seriesType = (await this.$refs["seriesType"] as any).value;
      
      (await this.$refs["searchTerm"] as any).value = "";

      await this.seriesStore.update(searchTerm, seriesType);
    }
  }
}
</script>