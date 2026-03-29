<!--
  TWEETCARD.VUE — Composant principal : affiche un projet comme un tweet

  C'est le composant le plus complexe du portfolio. Il reproduit la structure
  d'un tweet Twitter :
  ┌──────────────────────────────────────┐
  │ 📌 Post épinglé (optionnel)         │
  │ [avatar] Nom ✓ @handle · date       │
  │ Texte du tweet avec #hashtags       │
  │ ┌────────────────────────────────┐  │
  │ │ Carte média (détail projet)    │  │
  │ │ Tags techniques                │  │
  │ │ ● Résultat                     │  │
  │ └────────────────────────────────┘  │
  │ 💬 12   🔁 45   ❤️ 128   ↗         │
  └──────────────────────────────────────┘

  LOGIQUE CLÉ : linkedText (computed)
  Le texte brut contient des <span class="tag">Angular</span>.
  Le computed linkedText les transforme en <a href="google.com/search?q=Angular">
  pour que chaque mot bleu soit cliquable et ouvre une recherche Google.
  On utilise une regex pour trouver tous les <span class="tag">...</span>
  et les remplacer par des <a>.

  COMMUNICATION :
  - Reçoit : post (Object) via props
  - Émet : toggle-like (quand on clique sur le cœur)
  - Importe : profile depuis portfolio.js pour le nom/photo
-->
<template>
  <!-- L'id permet le scroll depuis la sidebar droite (goToPost dans App.vue) -->
  <div :id="`post-${post.id}`">
    <!-- Label "Post épinglé" affiché au-dessus si post.pinned est true -->
    <div v-if="post.pinned" class="pinned">
      <svg viewBox="0 0 24 24"><path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"/></svg>
      Post épinglé
    </div>

    <article class="tweet">
      <!-- Photo de profil (image réelle, pas des initiales) -->
      <img :src="profile.photo" :alt="profile.name" class="avatar-img" />
      <div class="content">
        <!-- Header : nom + badge vérifié + handle + date -->
        <div class="header">
          <span class="name">{{ profile.name }}</span>
          <!-- Badge bleu ✓ comme sur Twitter (composant SVG séparé) -->
          <VerifiedBadge v-if="post.verified" />
          <span class="secondary">{{ profile.handle }}</span>
          <span class="secondary"> · </span>
          <span class="secondary">{{ post.time }}</span>
        </div>

        <!--
          Texte du tweet : rendu en HTML via v-html.
          On utilise linkedText (computed) au lieu de post.text directement
          pour transformer les <span class="tag"> en liens Google cliquables.
          ATTENTION : v-html est à utiliser avec précaution (risque XSS),
          mais ici les données viennent de notre propre fichier, pas d'un utilisateur.
        -->
        <div class="text" v-html="linkedText"></div>

        <!-- Carte média : détails du projet (si le post en a un) -->
        <TweetMedia v-if="post.media" :media="post.media" />

        <!--
          Boutons d'action : reply, retweet, like, share
          Le like est le seul qui fonctionne réellement (toggle).
          Les autres sont décoratifs pour reproduire le design Twitter.
        -->
        <TweetActions
          :replies="post.replies"
          :retweets="post.retweets"
          :likes="post.likes"
          :liked="post.liked"
          @toggle-like="$emit('toggle-like', post.id)"
        />
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import VerifiedBadge from '../icons/VerifiedBadge.vue'
import TweetMedia from './TweetMedia.vue'
import TweetActions from './TweetActions.vue'
import { profile } from '../../data/portfolio.js'

const props = defineProps({
  post: Object
})

defineEmits(['toggle-like'])

/**
 * LINKED TEXT — Transformation des tags en liens Google
 *
 * Regex : /<span class="tag">([^<]+)<\/span>/g
 * - <span class="tag"> : début du tag
 * - ([^<]+) : capture tout le texte entre les balises (groupe 1)
 * - <\/span> : fin du tag
 * - /g : global, remplace toutes les occurrences
 *
 * Pour chaque match, on crée un <a> avec :
 * - href vers Google Search avec le texte encodé (encodeURIComponent)
 * - target="_blank" pour ouvrir dans un nouvel onglet
 * - rel="noopener" pour la sécurité (empêche la page ouverte d'accéder à window.opener)
 * - onclick="event.stopPropagation()" pour que le clic sur le lien
 *   ne trigger pas le hover/clic du tweet parent
 */
const linkedText = computed(() => {
  return props.post.text.replace(
    /<span class="tag">([^<]+)<\/span>/g,
    (_, text) => {
      const query = encodeURIComponent(text.replace('#', ''))
      return `<a href="https://www.google.com/search?q=${query}" target="_blank" rel="noopener" class="tag" onclick="event.stopPropagation()">${text}</a>`
    }
  )
})
</script>

<style scoped>
/* Label "Post épinglé" : petit texte gris avec l'icône de pin */
.pinned {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px 0 56px; /* 56px = largeur avatar + gap, pour aligner avec le contenu */
  font-size: 13px;
  color: var(--text-secondary);
}

.pinned svg {
  width: 16px;
  height: 16px;
  fill: var(--text-secondary);
}

/* Structure du tweet : flexbox avec avatar à gauche, contenu à droite */
.tweet {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: background 0.15s; /* Transition douce au survol */
}

.tweet:hover {
  background: var(--bg-hover); /* Fond légèrement plus clair au survol, comme Twitter */
}

/* Avatar : image ronde de 40px, object-fit: cover pour ne pas déformer */
.avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0; /* Empêche l'avatar de rétrécir si le contenu est long */
}

/* Le contenu prend tout l'espace restant */
.content {
  flex: 1;
  min-width: 0; /* Nécessaire pour que le texte long puisse wraper dans un flex child */
}

/* Header du tweet : nom, badge, handle, date — tout sur une ligne */
.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

.name {
  font-weight: 700;
  font-size: 15px;
  white-space: nowrap; /* Empêche le nom de passer à la ligne */
}

.secondary {
  color: var(--text-secondary);
  font-size: 15px;
  white-space: nowrap;
}

/* Texte du tweet */
.text {
  font-size: 15px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: pre-line; /* Respecte les \n dans le texte (sauts de ligne) */
  margin-bottom: 8px;
}

/*
  :deep() (anciennement >>>) permet de cibler des éléments DANS le v-html.
  Normalement le scoped CSS ne cible que les éléments du template,
  mais v-html injecte du HTML dynamiquement, donc on a besoin de :deep().
*/
.text :deep(.tag) {
  color: var(--blue);
  text-decoration: none;
  cursor: pointer;
}

.text :deep(.tag:hover) {
  text-decoration: underline; /* Soulignement au survol comme les liens Twitter */
}
</style>
