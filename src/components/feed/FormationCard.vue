<!--
  FormationCard.vue — Carte de formation dans l'onglet "Formation".
  Variante la plus simple des cartes tweet : pas de badge vérifié,
  pas de tags technologiques, pas de barre d'actions.
  Affiche uniquement : école, handle, période, titre et description.
  Structure minimale car les formations nécessitent moins de détails
  que les expériences professionnelles ou les projets.
-->
<template>
  <article class="tweet">
    <!-- Avatar coloré avec emoji/icône représentant l'établissement -->
    <div class="avatar" :class="formation.color">{{ formation.icon }}</div>
    <div class="content">

      <!-- En-tête : nom de l'école + handle + période -->
      <div class="header">
        <span class="name">{{ formation.school }}</span>
        <span class="secondary">@{{ formation.handle }}</span>
        <span class="secondary"> · </span>
        <span class="secondary">{{ formation.period }}</span>
      </div>

      <!-- Titre de la formation (en gras) -->
      <div class="text"><strong>{{ formation.title }}</strong></div>

      <!--
        Bloc média simplifié : uniquement la description, sans tags.
        C'est la différence principale avec ExperienceCard qui inclut
        aussi des tags technologiques.
      -->
      <div class="media">
        <div class="media-body">
          <p>{{ formation.description }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
/**
 * @component FormationCard
 * Carte de formation — la variante la plus minimaliste des cartes tweet.
 * Pas de badge vérifié, pas de tags, pas d'actions.
 *
 * @prop {Object} formation - Objet formation contenant :
 *   - icon {string}        — emoji affiché dans l'avatar
 *   - color {string}       — classe CSS couleur de l'avatar (orange, purple)
 *   - school {string}      — nom de l'établissement
 *   - handle {string}      — handle fictif de l'école
 *   - period {string}      — période (ex. "2019 - 2022")
 *   - title {string}       — intitulé de la formation
 *   - description {string} — description du contenu de la formation
 */
defineProps({
  formation: Object
})
</script>

<style scoped>
/* Layout tweet identique aux autres cartes pour la cohérence visuelle */
.tweet {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: background 0.15s;
}

.tweet:hover { background: var(--bg-hover); }

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 12px;
  color: #fff;
  flex-shrink: 0;
}

/* Couleurs d'avatar spécifiques aux établissements de formation */
.avatar.orange { background: #ff7a00; }
.avatar.purple { background: #7856ff; }

.content { flex: 1; min-width: 0; }

.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

.name { font-weight: 700; font-size: 15px; white-space: nowrap; }
.secondary { color: var(--text-secondary); font-size: 15px; white-space: nowrap; }
.text { font-size: 15px; line-height: 1.5; margin-bottom: 8px; }

/* Bloc média minimal : juste la description, pas de section tags */
.media {
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.media-body {
  padding: 12px 16px;
  background: var(--bg-tertiary);
}

.media-body p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}
</style>
