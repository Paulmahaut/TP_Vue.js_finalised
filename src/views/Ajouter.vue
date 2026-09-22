<script setup>
import { useRouter } from 'vue-router'
import { ajouterArticle } from '../boutique.js'
import FormulaireArticle from '../components/FormulaireArticle.vue'

const router = useRouter()

function validerAjout(article) {
  ajouterArticle(article)
  router.push('/articles')
}
</script>

<template>
  <h1>Ajouter un article</h1>
  <FormulaireArticle @ajouter="validerAjout" />
</template>
