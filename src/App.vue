<template>
  <div id="app">
    <header>
      <h1>Персонажи Рика и Морти</h1>
    </header>
    <main>
      <CharacterList />
    </main>
    <footer>
      <p>&copy; 2023 Персонажи Рика и Морти. Все права защищены.</p>
    </footer>
  </div>
</template>

<script setup>
import CharacterList from "./components/CharacterCard/CharacterList.vue";
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #007bff;
  color: #fff;
  padding: 1.5rem;
}

header h1 {
  margin: 0;
}

main {
  flex-grow: 1;
  padding: 2rem;
}

footer {
  background-color: #f5f5f5;
  padding: 1rem;
  margin-top: auto;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}
</style>
