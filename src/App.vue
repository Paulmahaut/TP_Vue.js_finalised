<script setup>
import { boutique } from './boutique.js'
</script>

<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/articles">Articles</router-link>
    <router-link to="/ajouter">Ajouter</router-link>
    <router-link to="/panier">Panier ({{ boutique.panier.length }})</router-link>
    <router-link to="/admin">Admin</router-link>
    <router-link to="/login" v-if="!boutique.connecte">Login</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>
