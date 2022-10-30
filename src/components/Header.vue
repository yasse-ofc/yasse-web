<template>
    <header class="header">
        <img class="logo" src='../assets/logo.svg' alt="Yasse Logo">
        <h1>Yasse</h1>
        <select class="selectLanguage" name="language">
            <option value="br">🇧🇷</option>
            <option value="us">🇺🇸</option>
        </select>
    </header>
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px;
    height: 50px;
    max-width: 100%;

    background-color: var(--accent);
}

.logo {
    height: 95px;
}

.selectLanguage {
    width: 3%;
    height: 50%;
}

h1 {
    color: var(--secondary);
    font-size: 1.6rem;
    font-family: 'Pacifico', cursive;
    font-weight: normal;
}
</style>
  