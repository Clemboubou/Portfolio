<!--
  APP.VUE — Composant racine de l'application

  C'est le "chef d'orchestre" du portfolio. Il fait 3 choses :
  1. Définit le layout 3 colonnes (sidebar gauche | feed central | sidebar droite)
  2. Gère l'état global : quel onglet est actif (posts, skills, experience, formation)
  3. Coordonne la communication entre composants (ex: clic sidebar droite → scroll vers un tweet)

  ARCHITECTURE :
  Le layout reproduit celui de X/Twitter :
  ┌──────────┬────────────────┬──────────┐
  │ Sidebar  │   Main Feed    │ Sidebar  │
  │  Left    │  (600px max)   │  Right   │
  │ (275px)  │                │ (350px)  │
  └──────────┴────────────────┴──────────┘

  GESTION DES ONGLETS :
  On utilise un ref() réactif "currentTab" partagé via v-model avec
  SidebarLeft et FeedHeader. Quand l'utilisateur clique sur un onglet,
  la valeur change et le v-if dans le template affiche le bon contenu.

  COMMUNICATION INTER-COMPOSANTS :
  - v-model (two-way binding) : pour les onglets (SidebarLeft ↔ App ↔ FeedHeader)
  - $emit (child → parent) : pour le like (TweetCard → App) et la navigation (SidebarRight → App)
  - props (parent → child) : pour passer les données aux composants enfants
-->
<template>
  <div class="layout">
    <!--
      SIDEBAR GAUCHE : navigation principale
      v-model="currentTab" crée un two-way binding :
      - le parent (App) passe la valeur via :modelValue
      - l'enfant (SidebarLeft) émet @update:modelValue quand on clique
    -->
    <SidebarLeft v-model="currentTab" />

    <!-- FEED CENTRAL : contenu principal qui change selon l'onglet -->
    <main class="main-feed">
      <!--
        HEADER STICKY : reste visible en haut quand on scroll.
        Contient le nom + les onglets (Posts, Compétences, Parcours, Formation).
        postCount est un computed qui calcule le nombre d'items de l'onglet actif.
      -->
      <FeedHeader v-model="currentTab" :post-count="currentPostCount" />

      <!--
        AFFICHAGE CONDITIONNEL avec v-if :
        Un seul onglet est affiché à la fois. Vue détruit et recrée les composants
        à chaque changement d'onglet (pas de keep-alive ici, pas nécessaire).
      -->

      <!-- Onglet Posts : bannière profil + liste des tweets (projets) -->
      <template v-if="currentTab === 'posts'">
        <ProfileBanner />
        <!--
          v-for itère sur le tableau réactif "posts" pour créer un TweetCard par projet.
          :key="post.id" est obligatoire pour que Vue puisse identifier chaque élément
          et optimiser les re-rendus quand un post change (ex: toggle like).
        -->
        <TweetCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @toggle-like="toggleLike"
        />
      </template>

      <!-- Onglet Compétences : une SkillCard par catégorie -->
      <template v-if="currentTab === 'skills'">
        <SkillCard
          v-for="(cat, i) in skillCategories"
          :key="i"
          :category="cat"
        />
      </template>

      <!-- Onglet Parcours : une ExperienceCard par expérience pro -->
      <template v-if="currentTab === 'experience'">
        <ExperienceCard
          v-for="(exp, i) in experiences"
          :key="i"
          :exp="exp"
        />
      </template>

      <!-- Onglet Formation : une FormationCard par diplôme -->
      <template v-if="currentTab === 'formation'">
        <FormationCard
          v-for="(f, i) in formations"
          :key="i"
          :formation="f"
        />
      </template>

      <!-- Contact : toujours visible en bas, quel que soit l'onglet -->
      <ContactSection />
    </main>

    <!--
      SIDEBAR DROITE : stack technique + liste des expériences
      @go-to-post écoute l'événement émis quand on clique sur une expérience,
      et appelle goToPost() qui switch sur l'onglet Posts et scroll vers le tweet.
    -->
    <SidebarRight @go-to-post="goToPost" />
  </div>
</template>

<script setup>
/**
 * SCRIPT SETUP (Composition API)
 *
 * Vue 3 propose deux syntaxes : Options API (data, methods, computed...)
 * et Composition API (ref, computed, fonctions). Ici on utilise la Composition API
 * avec <script setup> qui est la syntaxe recommandée — plus concise, meilleur
 * support TypeScript, et les imports sont automatiquement exposés au template.
 */
import { ref, computed, nextTick } from 'vue'
import {
  posts as postsData,
  skillCategories,
  experiences,
  formations
} from './data/portfolio.js'

// Import des composants — chaque composant est un fichier .vue séparé (SFC)
import SidebarLeft from './components/layout/SidebarLeft.vue'
import SidebarRight from './components/layout/SidebarRight.vue'
import FeedHeader from './components/feed/FeedHeader.vue'
import ProfileBanner from './components/feed/ProfileBanner.vue'
import TweetCard from './components/feed/TweetCard.vue'
import SkillCard from './components/feed/SkillCard.vue'
import ExperienceCard from './components/feed/ExperienceCard.vue'
import FormationCard from './components/feed/FormationCard.vue'
import ContactSection from './components/feed/ContactSection.vue'

/**
 * STATE RÉACTIF
 *
 * ref() crée une variable réactive. Quand sa valeur change,
 * Vue re-rend automatiquement tous les composants qui l'utilisent.
 *
 * - currentTab : l'onglet actif ('posts', 'skills', 'experience', 'formation')
 * - posts : copie réactive des données pour pouvoir modifier les likes
 */
const currentTab = ref('posts')
const posts = ref(postsData)

/**
 * COMPUTED
 *
 * computed() crée une valeur dérivée qui se recalcule automatiquement
 * quand ses dépendances changent. Ici, quand currentTab change,
 * le nombre de posts affiché dans le header se met à jour tout seul.
 */
const currentPostCount = computed(() => {
  const counts = {
    posts: posts.value.length,
    skills: skillCategories.length,
    experience: experiences.length,
    formation: formations.length
  }
  return counts[currentTab.value] || 0
})

/**
 * TOGGLE LIKE
 *
 * Quand l'utilisateur clique sur le cœur d'un tweet,
 * TweetCard émet 'toggle-like' avec l'id du post.
 * On retrouve le post dans le tableau et on inverse son état.
 *
 * Comme posts est un ref(), Vue détecte la mutation et
 * re-rend uniquement le TweetCard concerné (grâce au :key).
 */
function toggleLike(postId) {
  const post = posts.value.find(p => p.id === postId)
  if (post) {
    post.liked = !post.liked
    post.likes += post.liked ? 1 : -1
  }
}

/**
 * NAVIGATION SIDEBAR DROITE → TWEET
 *
 * Quand on clique sur une expérience dans la sidebar droite :
 * 1. On switch sur l'onglet 'posts'
 * 2. On attend que Vue ait rendu le DOM (nextTick)
 * 3. On scroll vers le tweet correspondant via son id HTML
 *
 * nextTick() est nécessaire car après currentTab.value = 'posts',
 * les TweetCard n'existent pas encore dans le DOM — il faut attendre
 * que Vue ait fini de les créer avant de pouvoir scroller vers eux.
 */
function goToPost(postId) {
  currentTab.value = 'posts'
  nextTick(() => {
    const el = document.getElementById(`post-${postId}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  })
}
</script>

<style scoped>
/*
  SCOPED CSS
  Le mot-clé "scoped" fait que ces styles ne s'appliquent qu'à CE composant.
  Vue ajoute un attribut unique (data-v-xxxxx) à chaque élément du template
  et cible cet attribut dans le CSS compilé. Ça évite les conflits de styles.
*/

/* Layout 3 colonnes centré, largeur max 1280px comme X/Twitter */
.layout {
  display: flex;
  justify-content: center;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
}

/* Le feed central prend tout l'espace disponible mais ne dépasse pas 600px
   (largeur du feed Twitter). La bordure droite sépare du sidebar. */
.main-feed {
  flex: 1;
  max-width: 600px;
  border-right: 1px solid var(--border);
  min-height: 100vh;
}

/* Sur mobile, on ajoute un padding en bas pour ne pas que le contenu
   soit caché derrière la navbar fixée en bas (voir SidebarLeft.vue) */
@media (max-width: 700px) {
  .main-feed {
    padding-bottom: 54px;
  }
}
</style>
