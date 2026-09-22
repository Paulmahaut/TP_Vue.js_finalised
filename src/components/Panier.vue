<script setup>
import { boutique } from '../boutique.js'
</script>

<template>
  <h2>Mon panier</h2>
  <p v-if="boutique.panier.length === 0">Le panier est vide.</p>
  <ul v-else>
    <li v-for="(article, i) in boutique.panier" :key="i">
      {{ article.nom }} - {{ article.prix }} €
    </li>
  </ul>
</template>
