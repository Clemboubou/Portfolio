<template>
  <div :id="`post-${post.id}`">
    <!-- Pinned label -->
    <div v-if="post.pinned" class="pinned">
      <svg viewBox="0 0 24 24"><path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"/></svg>
      Post épinglé
    </div>

    <article class="tweet">
      <img :src="profile.photo" :alt="profile.name" class="avatar-img" />
      <div class="content">
        <!-- Header: nom, badge, handle, date -->
        <div class="header">
          <span class="name">{{ profile.name }}</span>
          <VerifiedBadge v-if="post.verified" />
          <span class="secondary">{{ profile.handle }}</span>
          <span class="secondary"> · </span>
          <span class="secondary">{{ post.time }}</span>
        </div>

        <!-- Texte du tweet -->
        <div class="text" v-html="linkedText"></div>

        <!-- Media card (detail du projet) -->
        <TweetMedia v-if="post.media" :media="post.media" />

        <!-- Actions (reply, retweet, like, share) -->
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

// Transforme les <span class="tag">texte</span> en liens Google
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
.pinned {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px 0 56px;
  font-size: 13px;
  color: var(--text-secondary);
}

.pinned svg {
  width: 16px;
  height: 16px;
  fill: var(--text-secondary);
}

.tweet {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: background 0.15s;
}

.tweet:hover {
  background: var(--bg-hover);
}

.avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.content {
  flex: 1;
  min-width: 0;
}

.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

.name {
  font-weight: 700;
  font-size: 15px;
  white-space: nowrap;
}

.secondary {
  color: var(--text-secondary);
  font-size: 15px;
  white-space: nowrap;
}

.text {
  font-size: 15px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: pre-line;
  margin-bottom: 8px;
}

.text :deep(.tag) {
  color: var(--blue);
  text-decoration: none;
  cursor: pointer;
}

.text :deep(.tag:hover) {
  text-decoration: underline;
}
</style>
