<script setup>
import { ref } from 'vue'

const emit = defineEmits(['ajouter'])

const nom = ref('')
const prix = ref('')
const description = ref('')

function soumettre() {
  emit('ajouter', { nom: nom.value, prix: Number(prix.value), description: description.value })
}
</script>

<template>
  <form @submit.prevent="soumettre">
    <input v-model="nom" placeholder="Nom de l'article" required />
    <input v-model="prix" type="number" placeholder="Prix" required />
    <textarea v-model="description" placeholder="Description"></textarea>
    <button type="submit">Ajouter</button>
  </form>
</template>
