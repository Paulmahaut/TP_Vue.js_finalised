<script setup>
defineProps(['article'])
defineEmits(['supprimer', 'ajouter-panier'])
</script>

<template>
  <div class="carte">
    <h3>{{ article.nom }}</h3>
    <p>{{ article.prix }} €</p>
    <router-link :to="`/article/${article.id}`">Voir</router-link>
    <button @click="$emit('ajouter-panier', article)">Ajouter au panier</button>
    <button @click="$emit('supprimer', article.id)">Supprimer</button>
  </div>
</template>
