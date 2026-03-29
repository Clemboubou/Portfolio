<template>
  <header class="feed-header">
    <div class="header-title">
      <h2>{{ profile.name }}</h2>
      <div class="subtitle">{{ postCount }} posts</div>
    </div>
    <div class="tabs">
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

defineProps({
  modelValue: String,
  postCount: Number
})

defineEmits(['update:modelValue'])

const tabs = [
  { id: 'posts', label: 'Posts' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Parcours' },
  { id: 'formation', label: 'Formation' }
]
</script>

<style scoped>
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
  position: relative;
  font-weight: 500;
}

.tab:hover {
  background: var(--bg-hover);
}

.tab.active {
  color: var(--text-primary);
  font-weight: 700;
}

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
