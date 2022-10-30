<script setup lang="ts">
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Results from './components/Results.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main>
    <Header />
    <div class="sections">
      <section class="search">
        <Search />
      </section>
      <section class="results">
        <Results />
      </section>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
}

.sections {
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
}

.search, .results {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.results {
  align-items: flex-end;
}
</style>