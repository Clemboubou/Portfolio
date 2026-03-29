<!--
  FeedHeader.vue — En-tête collant (sticky) du fil principal.
  Contient le nom du profil, le nombre de posts, et les onglets de navigation.
  Reste visible en haut de la colonne centrale lors du défilement grâce à
  position:sticky + backdrop-filter pour un effet de transparence floutée.
  Utilise le pattern v-model pour synchroniser l'onglet actif avec le parent.
-->
<template>
  <header class="feed-header">
    <!-- Titre : nom du profil + compteur de posts -->
    <div class="header-title">
      <h2>{{ profile.name }}</h2>
      <div class="subtitle">{{ postCount }} posts</div>
    </div>

    <!-- Onglets de navigation entre les sections du portfolio -->
    <div class="tabs">
      <!--
        Chaque onglet émet 'update:modelValue' au clic pour implémenter
        le pattern v-model de Vue 3. Le parent peut ainsi écrire :
          <FeedHeader v-model="activeTab" />
        L'onglet actif reçoit la classe "active" qui déclenche le pseudo-
        élément ::after (indicateur bleu sous l'onglet).
      -->
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: modelValue === tab.id }"
        @click="$emit('update:modelValue', tab.id)"
      >
        {{ tab.label }}
      </div>
    </div>
  </header>
</template>

<script setup>
import { profile } from '../../data/portfolio.js'

/**
 * @component FeedHeader
 * En-tête sticky avec onglets de navigation pour le fil central.
 *
 * @prop {String} modelValue — ID de l'onglet actif (v-model).
 *   Valeurs possibles : 'posts', 'skills', 'experience', 'formation'.
 * @prop {Number} postCount  — Nombre total de posts, affiché sous le nom.
 *
 * @emits update:modelValue — Émis au clic sur un onglet, avec l'ID du nouvel onglet.
 *   Permet au parent d'utiliser v-model pour la synchronisation bidirectionnelle.
 */
defineProps({
  modelValue: String,
  postCount: Number
})

defineEmits(['update:modelValue'])

/**
 * Liste statique des onglets.
 * Les labels sont en français pour correspondre au portfolio.
 */
const tabs = [
  { id: 'posts', label: 'Posts' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Parcours' },
  { id: 'formation', label: 'Formation' }
]
</script>

<style scoped>
/*
  Position sticky : l'en-tête reste collé en haut de la colonne
  lors du défilement, au-dessus du contenu (z-index: 10).
  Le fond semi-transparent + backdrop-filter:blur crée l'effet
  "verre dépoli" caractéristique de l'UI Twitter moderne :
  le contenu qui défile derrière est visible mais flouté.
*/
.feed-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-title {
  padding: 12px 16px 4px;
}

.header-title h2 {
  font-size: 20px;
  font-weight: 700;
}

.subtitle {
  font-size: 13px;
  color: var(--text-secondary);
}

/* Les onglets se partagent la largeur disponible de manière égale */
.tabs {
  display: flex;
}

.tab {
  flex: 1;
  padding: 16px 0;
  text-align: center;
  font-size: 15px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.2s;
  position: relative; /* Nécessaire pour positionner le ::after en absolu */
  font-weight: 500;
}

.tab:hover {
  background: var(--bg-hover);
}

.tab.active {
  color: var(--text-primary);
  font-weight: 700;
}

/*
  Indicateur d'onglet actif : barre bleue horizontale en bas de l'onglet.
  Utilise un pseudo-élément ::after positionné en absolu par rapport au .tab.
  Centré horizontalement via left:50% + translateX(-50%).
  Largeur fixe (60px) pour un rendu propre quel que soit le texte de l'onglet.
*/
.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background: var(--blue);
}
</style>
