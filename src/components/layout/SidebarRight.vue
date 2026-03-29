<!--
  SidebarRight.vue — Sidebar droite (style "Trending" / "Who to follow" de Twitter).
  Affiche la stack technique et les expériences professionnelles comme raccourcis.
  Sticky sur toute la hauteur de l'écran avec défilement interne.
  Masquée en dessous de 1280px pour laisser plus de place au contenu.
-->
<template>
  <aside class="sidebar-right">
    <!-- Barre de recherche décorative (readonly — pas fonctionnelle) -->
    <div class="search-box">
      <div class="search-wrapper">
        <svg viewBox="0 0 24 24">
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
        </svg>
        <input type="text" class="search-input" placeholder="Rechercher..." readonly />
      </div>
    </div>

    <!-- Stack technique — équivalent de la section "Trending" de Twitter -->
    <div class="card">
      <h3 class="card-title">Stack Technique</h3>
      <div
        v-for="(item, i) in trending"
        :key="i"
        class="card-item"
      >
        <div class="label">{{ item.category }}</div>
        <div class="title">{{ item.name }}</div>
      </div>
    </div>

    <!--
      Expériences = équivalent "Who to follow" de Twitter.
      Au clic sur une entreprise, émet 'go-to-post' avec le postId
      pour que le parent puisse scroller jusqu'au post correspondant
      dans le fil principal.
    -->
    <div class="card">
      <h3 class="card-title">Expériences</h3>
      <div
        v-for="(company, i) in companies"
        :key="i"
        class="follow-item"
        @click="$emit('go-to-post', company.postId)"
      >
        <div class="follow-avatar" :style="{ background: company.color }">
          {{ company.icon }}
        </div>
        <div class="follow-info">
          <div class="follow-name">{{ company.name }}</div>
          <div class="follow-role">{{ company.role }}</div>
        </div>
      </div>
    </div>

    <div class="footer">
      &copy; 2025 Clement Bourgeois
    </div>
  </aside>
</template>

<script setup>
import { trending, companies } from '../../data/portfolio.js'

/**
 * @component SidebarRight
 * Sidebar droite avec stack technique et raccourcis vers les expériences.
 *
 * @emits go-to-post {string} — Émis au clic sur une expérience.
 *   Contient le postId de l'expérience pour permettre au parent
 *   de scroller programmatiquement vers le post correspondant
 *   dans le fil central. Implémente la navigation croisée
 *   sidebar → contenu principal.
 */
defineEmits(['go-to-post'])
</script>

<style scoped>
/*
  Sidebar sticky : reste en place lors du défilement du contenu central.
  overflow-y:auto permet le défilement interne si le contenu dépasse
  la hauteur de l'écran (cas des longues listes de technologies).
*/
.sidebar-right {
  width: 350px;
  padding: 0 24px;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
}

/*
  Masquer la scrollbar WebKit pour un rendu plus propre.
  Le défilement reste fonctionnel (molette/tactile) mais la barre
  visuelle est cachée pour rester fidèle à l'esthétique Twitter.
*/
.sidebar-right::-webkit-scrollbar {
  width: 0;
}

/*
  La barre de recherche est sticky DANS la sidebar sticky.
  Elle reste en haut de la sidebar même quand celle-ci défile.
  z-index:10 pour rester au-dessus des cartes qui défilent dessous.
*/
.search-box {
  position: sticky;
  top: 0;
  padding: 12px 0;
  background: var(--bg-primary);
  z-index: 10;
}

.search-wrapper {
  position: relative;
}

/* Icône de recherche positionnée en absolu à gauche dans l'input */
.search-wrapper svg {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  fill: var(--text-secondary);
}

/* Input avec padding-left élevé (48px) pour laisser la place à l'icône */
.search-input {
  width: 100%;
  padding: 12px 20px 12px 48px;
  border-radius: 9999px;
  border: 1px solid transparent;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 15px;
  outline: none;
  font-family: inherit;
  transition: all 0.2s;
}

/* Au focus : fond transparent + bordure bleue (style Twitter) */
.search-input:focus {
  background: transparent;
  border-color: var(--blue);
}

.search-input::placeholder {
  color: var(--text-secondary);
}

/* Cartes arrondies avec fond secondaire — style "widget" Twitter */
.card {
  background: var(--bg-secondary);
  border-radius: 16px;
  margin-bottom: 16px;
  overflow: hidden;
}

.card-title {
  font-size: 20px;
  font-weight: 800;
  padding: 12px 16px;
}

.card-item {
  padding: 12px 16px;
  transition: background 0.2s;
  cursor: pointer;
}

.card-item:hover {
  background: var(--bg-hover);
}

.card-item .label {
  font-size: 13px;
  color: var(--text-secondary);
}

.card-item .title {
  font-size: 15px;
  font-weight: 700;
  margin: 2px 0;
}

/* Items "follow" (expériences) : layout avec avatar + texte, cliquables */
.follow-item {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background 0.2s;
  cursor: pointer;
}

.follow-item:hover {
  background: var(--bg-hover);
}

/* Avatar avec couleur dynamique via :style (pas de classe CSS prédéfinie) */
.follow-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 14px;
  color: #fff;
  flex-shrink: 0;
}

.follow-name {
  font-weight: 700;
  font-size: 15px;
}

.follow-role {
  color: var(--text-secondary);
  font-size: 14px;
}

.footer {
  padding: 16px;
  font-size: 13px;
  color: var(--text-secondary);
}

/* Masquer entièrement la sidebar droite sous 1280px (tablette et mobile) */
@media (max-width: 1280px) {
  .sidebar-right { display: none; }
}
</style>
