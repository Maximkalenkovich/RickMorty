<template>
  <div class="character-card">
    <div class="character-image">
      <img :src="character.image" :alt="character.name" />
    </div>
    <div class="character-info">
      <h3>{{ character.name }}</h3>
      <div class="character-details">
        <p><strong>Статус:</strong> {{ character.status }}</p>
        <p><strong>Вид:</strong> {{ character.species }}</p>
        <p><strong>Пол:</strong> {{ character.gender }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  character: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.character-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.character-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.character-image {
  width: 40%;
}

.character-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.character-info {
  width: 60%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.character-details {
  margin-top: 1rem;
}

.character-details p {
  margin-bottom: 0.5rem;
}

.character-details p strong {
  font-weight: bold;
}
</style>
