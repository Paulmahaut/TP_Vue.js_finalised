import { reactive } from 'vue'

export const boutique = reactive({
  articles: [
    { id: 1, nom: 'Clavier mécanique', prix: 79, description: "Clavier mécanique rétroéclairé, switches rouges." },
    { id: 2, nom: 'Souris sans fil', prix: 29, description: "Souris ergonomique sans fil, 6 boutons." },
    { id: 3, nom: 'Écran 27 pouces', prix: 219, description: "Écran IPS 27 pouces, 144Hz." },
    { id: 4, nom: 'Casque audio', prix: 59, description: "Casque filaire avec micro amovible." },
    { id: 5, nom: 'Webcam HD', prix: 39, description: "Webcam 1080p avec autofocus." },
    { id: 6, nom: 'Tapis de souris XL', prix: 15, description: "Tapis de souris format bureau complet." },
    { id: 7, nom: 'Chaise de bureau', prix: 149, description: "Chaise ergonomique avec support lombaire." },
    { id: 8, nom: 'Disque SSD 1To', prix: 69, description: "SSD NVMe 1To, lecture 3500 Mo/s." },
  ],
  panier: [],
  connecte: false,
})

let prochainId = 9

export function ajouterArticle(article) {
  boutique.articles.push({ id: prochainId++, ...article })
}

export function supprimerArticle(id) {
  const index = boutique.articles.findIndex(a => a.id === id)
  if (index !== -1) boutique.articles.splice(index, 1)
}

export function ajouterAuPanier(article) {
  boutique.panier.push(article)
}

export function connecter() {
  boutique.connecte = true
}
