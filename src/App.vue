<template>
  <div class="layout">
    <!-- Sidebar gauche : navigation -->
    <SidebarLeft v-model="currentTab" />

    <!-- Feed central -->
    <main class="main-feed">
      <FeedHeader v-model="currentTab" :post-count="currentPostCount" />

      <!-- Onglet Posts : profil + projets comme des tweets -->
      <template v-if="currentTab === 'posts'">
        <ProfileBanner />
        <TweetCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @toggle-like="toggleLike"
        />
      </template>

      <!-- Onglet Competences -->
      <template v-if="currentTab === 'skills'">
        <SkillCard
          v-for="(cat, i) in skillCategories"
          :key="i"
          :category="cat"
        />
      </template>

      <!-- Onglet Parcours -->
      <template v-if="currentTab === 'experience'">
        <ExperienceCard
          v-for="(exp, i) in experiences"
          :key="i"
          :exp="exp"
        />
      </template>

      <!-- Onglet Formation -->
      <template v-if="currentTab === 'formation'">
        <FormationCard
          v-for="(f, i) in formations"
          :key="i"
          :formation="f"
        />
      </template>

      <!-- Contact (toujours visible en bas) -->
      <ContactSection />
    </main>

    <!-- Sidebar droite : stack technique + experiences -->
    <SidebarRight @go-to-post="goToPost" />
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import {
  posts as postsData,
  skillCategories,
  experiences,
  formations
} from './data/portfolio.js'

// Layout
import SidebarLeft from './components/layout/SidebarLeft.vue'
import SidebarRight from './components/layout/SidebarRight.vue'

// Feed
import FeedHeader from './components/feed/FeedHeader.vue'
import ProfileBanner from './components/feed/ProfileBanner.vue'
import TweetCard from './components/feed/TweetCard.vue'
import SkillCard from './components/feed/SkillCard.vue'
import ExperienceCard from './components/feed/ExperienceCard.vue'
import FormationCard from './components/feed/FormationCard.vue'
import ContactSection from './components/feed/ContactSection.vue'

// State
const currentTab = ref('posts')
const posts = ref(postsData)

// Computed
const currentPostCount = computed(() => {
  const counts = {
    posts: posts.value.length,
    skills: skillCategories.length,
    experience: experiences.length,
    formation: formations.length
  }
  return counts[currentTab.value] || 0
})

// Actions
function toggleLike(postId) {
  const post = posts.value.find(p => p.id === postId)
  if (post) {
    post.liked = !post.liked
    post.likes += post.liked ? 1 : -1
  }
}

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
.layout {
  display: flex;
  justify-content: center;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
}

.main-feed {
  flex: 1;
  max-width: 600px;
  border-right: 1px solid var(--border);
  min-height: 100vh;
}

@media (max-width: 700px) {
  .main-feed {
    padding-bottom: 54px;
  }
}
</style>
