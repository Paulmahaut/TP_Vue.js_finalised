<script setup>
import { ref, computed, watch } from 'vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps(['articles'])
defineEmits(['supprimer', 'ajouter-panier'])

const page = ref(1)
const articlesParPage = 4

watch(() => props.articles, () => { page.value = 1 })

const totalPages = computed(() => Math.max(1, Math.ceil(props.articles.length / articlesParPage)))
const articlesAffiches = computed(() => {
  const indexDebut = (page.value - 1) * articlesParPage
  return props.articles.slice(indexDebut, indexDebut + articlesParPage)
})
</script>

<template>
  <div class="grille">
    <ArticleItem
      v-for="article in articlesAffiches"
      :key="article.id"
      :article="article"
      @supprimer="$emit('supprimer', $event)"
      @ajouter-panier="$emit('ajouter-panier', $event)"
    />
  </div>
  <p v-if="articles.length === 0">Aucun article trouvé.</p>
  <div class="pagination" v-else>
    <button :disabled="page === 1" @click="page--">Précédent</button>
    <span>Page {{ page }} / {{ totalPages }}</span>
    <button :disabled="page === totalPages" @click="page++">Suivant</button>
  </div>
</template>
