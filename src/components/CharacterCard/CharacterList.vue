<template>
  <div>
    <div class="filters">
      <div class="filter-item">
        <input type="text" v-model="nameFilter" placeholder="Фильтр по имени" />
      </div>
      <div class="filter-item">
        <select v-model="statusFilter">
          <option value="">Все</option>
          <option value="alive">Живые</option>
          <option value="dead">Мертвые</option>
          <option value="unknown">Неизвестно</option>
        </select>
      </div>
      <div class="filter-item">
        <button class="btn" @click="applyFilters">Применить</button>
      </div>
    </div>
    <div class="pagination">
      <button class="btn" :disabled="currentPage === 1" @click="prevPage">Предыдущая</button>
      <span>Страница {{ currentPage }}</span>
      <button class="btn" :disabled="!hasNextPage" @click="nextPage">Следующая</button>
    </div>
    <div class="character-list">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import CharacterCard from "./CharacterCard.vue";
import { fetchCharacters } from "../../api/api.js";

const characters = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const nameFilter = ref("");
const statusFilter = ref("");

const hasNextPage = computed(() => currentPage.value < totalPages.value);

const fetchData = async () => {
  try {
    const data = await fetchCharacters(currentPage.value, nameFilter.value, statusFilter.value);
    characters.value = data.results;
    totalPages.value = data.info.pages;
  } catch (error) {
    console.error(error);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchData();
  }
};

const nextPage = () => {
  if (hasNextPage.value) {
    currentPage.value++;
    fetchData();
  }
};

const applyFilters = () => {
  currentPage.value = 1;
  fetchData();
};

onMounted(fetchData);
</script>

<style scoped>
.filters,
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-item {
  margin: 0.5rem;
}

.filter-item input,
.filter-item select {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.character-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
