<script setup>
import { ref, computed } from 'vue'
import { boutique, supprimerArticle, ajouterAuPanier } from '../boutique.js'
import BarreRecherche from '../components/BarreRecherche.vue'
import ListeArticles from '../components/ListeArticles.vue'

const recherche = ref('')

const articlesFiltres = computed(() =>
  boutique.articles.filter(a => a.nom.toLowerCase().includes(recherche.value.toLowerCase()))
)
</script>

<template>
  <h1>Articles</h1>
  <BarreRecherche v-model="recherche" />
  <ListeArticles
    :articles="articlesFiltres"
    @supprimer="supprimerArticle"
    @ajouter-panier="ajouterAuPanier"
  />
</template>
