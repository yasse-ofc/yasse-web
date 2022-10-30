<template>
  <footer class="footer">
    <span class="trademark">Made by <a href="https://github.com/yasse-ofc" target="_blank" rel="noopener noreferrer">Yasse™</a></span>
  </footer>
</template>

<style scoped>


.footer {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 100%;

    background-color: var(--accent);

    position: absolute;
    bottom: 0;
}

.trademark {
  color: var(--secondary);
  text-align: center;
}

.trademark > a {
  font-weight: bold;
}

.trademark > a:hover {
  color: var(--background);
  transition: color 0.3s;
}
</style>
