<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { connecter } from '../boutique.js'

const pseudo = ref('')
const router = useRouter()

function valider() {
  connecter()
  router.push('/admin')
}
</script>

<template>
  <h1>Connexion</h1>
  <form @submit.prevent="valider">
    <input v-model="pseudo" placeholder="Pseudo" required />
    <button type="submit">Se connecter</button>
  </form>
</template>
