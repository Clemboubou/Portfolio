<!--
  ExperienceCard.vue — Carte d'expérience professionnelle dans l'onglet "Parcours".
  Structure similaire à un TweetCard (avatar + en-tête + contenu + tags)
  mais simplifiée : pas de barre d'actions (TweetActions), pas de compteurs
  de likes/retweets. L'accent est mis sur l'information factuelle
  (entreprise, poste, période, description, technologies).
-->
<template>
  <article class="tweet">
    <!-- Avatar coloré avec emoji/icône représentant l'entreprise -->
    <div class="avatar" :class="exp.color">{{ exp.icon }}</div>
    <div class="content">

      <!-- En-tête : nom entreprise + badge vérifié + handle + période -->
      <div class="header">
        <span class="name">{{ exp.company }}</span>
        <VerifiedBadge />
        <span class="secondary">@{{ exp.handle }}</span>
        <span class="secondary"> · </span>
        <span class="secondary">{{ exp.period }}</span>
      </div>

      <!-- Titre du poste et localisation en texte simple -->
      <div class="text">
        <strong>{{ exp.title }}</strong> — {{ exp.location }}
      </div>

      <!--
        Bloc média intégré : description + tags technologiques.
        Même structure visuelle que TweetMedia mais directement dans le template
        car la structure est plus simple (pas de label, pas de résultat).
      -->
      <div class="media">
        <div class="media-body">
          <p>{{ exp.description }}</p>
        </div>
        <div class="media-tags">
          <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import VerifiedBadge from '../icons/VerifiedBadge.vue'

/**
 * @component ExperienceCard
 * Carte d'expérience professionnelle, variante simplifiée du TweetCard.
 * Pas de barre d'actions ni de métriques sociales — uniquement informatif.
 *
 * @prop {Object} exp - Objet expérience contenant :
 *   - icon {string}        — emoji affiché dans l'avatar
 *   - color {string}       — classe CSS couleur de l'avatar (ex. "green")
 *   - company {string}     — nom de l'entreprise
 *   - handle {string}      — handle fictif Twitter de l'entreprise
 *   - period {string}      — période (ex. "2022 - 2024")
 *   - title {string}       — intitulé du poste
 *   - location {string}    — lieu de travail
 *   - description {string} — description des missions
 *   - tags {string[]}      — technologies utilisées
 */
defineProps({
  exp: Object
})
</script>

<style scoped>
/* Layout tweet : avatar à gauche, contenu à droite */
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
  font-size: 15px;
  color: #fff;
  flex-shrink: 0;
}

.avatar.green { background: var(--green); }

/* min-width:0 empêche le contenu flex de déborder (texte long, tags nombreux) */
.content { flex: 1; min-width: 0; }

.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

/* white-space:nowrap empêche le nom et le handle de passer à la ligne */
.name { font-weight: 700; font-size: 15px; white-space: nowrap; }
.secondary { color: var(--text-secondary); font-size: 15px; white-space: nowrap; }

.text { font-size: 15px; line-height: 1.5; margin-bottom: 8px; }

/* Bloc média : carte intégrée avec bordure arrondie */
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

.media-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 16px 12px;
  background: var(--bg-tertiary);
}

/* Tags sans variante "main" ici — tous en bleu atténué uniformément */
.tag {
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 13px;
  background: var(--blue-faded);
  color: var(--blue);
  font-weight: 500;
}
</style>
