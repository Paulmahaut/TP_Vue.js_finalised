<script setup>
import { boutique, supprimerArticle } from '../boutique.js'
import ArticleItem from '../components/ArticleItem.vue'
</script>

<template>
  <h1>Administration</h1>
  <div class="grille">
    <ArticleItem
      v-for="article in boutique.articles"
      :key="article.id"
      :article="article"
      @supprimer="supprimerArticle"
    />
  </div>
</template>
