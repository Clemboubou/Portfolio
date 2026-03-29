<!--
  TweetMedia.vue — Carte "média" attachée à un tweet/post de projet.
  Reproduit la structure d'une preview card Twitter : en-tête (label + titre),
  corps (description), tags technologiques et résultat optionnel.
  Reçoit un objet `media` contenant toutes les données à afficher.
-->
<template>
  <!-- Conteneur principal de la carte, bordée et arrondie comme une card Twitter -->
  <div class="media">

    <!-- En-tête : label catégoriel (ex. "Projet") et titre du projet -->
    <div class="media-header">
      <div class="label">{{ media.label }}</div>
      <h4>{{ media.title }}</h4>
    </div>

    <!-- Corps : description textuelle du projet -->
    <div class="media-body">
      <p>{{ media.description }}</p>
    </div>

    <!--
      Tags technologiques (ex. Angular, .NET, etc.).
      Chaque tag peut avoir la propriété `main: true` pour indiquer
      la technologie principale du projet — celle-ci sera mise en
      évidence visuellement (fond plein bleu au lieu de bleu atténué).
    -->
    <div v-if="media.tags" class="media-tags">
      <span
        v-for="tag in media.tags"
        :key="tag.name"
        class="tag"
        :class="{ main: tag.main }"
      >
        {{ tag.name }}
      </span>
    </div>

    <!-- Résultat / impact du projet, affiché avec un point vert indicateur de succès -->
    <div v-if="media.result" class="media-result">
      <div class="dot"></div>
      <span>{{ media.result }}</span>
    </div>
  </div>
</template>

<script setup>
/**
 * @component TweetMedia
 * Affiche les détails d'un projet sous forme de carte média dans un tweet.
 *
 * @prop {Object} media - Objet projet contenant :
 *   - label {string}       — catégorie / type (ex. "Projet personnel")
 *   - title {string}       — nom du projet
 *   - description {string} — description courte
 *   - tags {Array}         — liste de { name: string, main?: boolean }
 *   - result {string}      — résultat / impact (optionnel)
 */
defineProps({
  media: Object
})
</script>

<style scoped>
/* --- Conteneur carte --- */
/* Bordure arrondie + overflow:hidden pour que les coins des enfants
   ne dépassent pas du border-radius de 16px */
.media {
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 10px;
}

/* --- En-tête --- */
/* Fond secondaire pour distinguer visuellement l'en-tête du corps */
.media-header {
  padding: 12px 16px;
  background: var(--bg-secondary);
}

/* Label catégoriel en petites majuscules, discret */
.media-header .label {
  font-size: 12px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.media-header h4 {
  font-size: 15px;
  margin-top: 2px;
}

/* --- Corps --- */
/* Séparé de l'en-tête par une bordure pour créer un effet de sections empilées */
.media-body {
  padding: 12px 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
}

.media-body p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* --- Tags technologiques --- */
.media-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 16px 12px;
  background: var(--bg-tertiary);
}

/* Tag par défaut : fond bleu atténué, texte bleu — technologie secondaire */
.tag {
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 13px;
  background: var(--blue-faded);
  color: var(--blue);
  font-weight: 500;
}

/*
  Variante "main" : fond bleu plein + texte blanc + gras.
  Permet de distinguer la technologie principale du projet
  des technologies complémentaires d'un seul coup d'œil.
*/
.tag.main {
  background: var(--blue);
  color: #fff;
  font-weight: 700;
}

/* --- Résultat / impact --- */
.media-result {
  padding: 8px 16px 12px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Point vert circulaire : indicateur visuel de succès / résultat positif */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
}

.media-result span {
  font-size: 13px;
  color: var(--green);
}
</style>
