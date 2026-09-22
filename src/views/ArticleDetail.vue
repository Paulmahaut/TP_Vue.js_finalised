<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { boutique, ajouterAuPanier } from '../boutique.js'

const route = useRoute()
const article = computed(() => boutique.articles.find(a => a.id === Number(route.params.id)))
</script>

<template>
  <div v-if="article">
    <h1>{{ article.nom }}</h1>
    <p>{{ article.description }}</p>
    <p>{{ article.prix }} €</p>
    <button @click="ajouterAuPanier(article)">Ajouter au panier</button>
  </div>
  <p v-else>Article introuvable.</p>
</template>
