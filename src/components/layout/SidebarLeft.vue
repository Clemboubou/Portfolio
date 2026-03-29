<template>
  <nav class="sidebar">
    <div class="logo">
      <XLogo />
    </div>

    <a
      v-for="item in navItems"
      :key="item.id"
      class="nav-item"
      :class="{ active: modelValue === item.id }"
      @click="$emit('update:modelValue', item.id)"
    >
      <svg viewBox="0 0 24 24"><path :d="item.icon" /></svg>
      <span>{{ item.label }}</span>
    </a>

    <a :href="`mailto:${profile.email}`" class="cta-btn">
      <span class="cta-text">Me contacter</span>
    </a>

    <div class="profile-card">
      <img :src="profile.photo" :alt="profile.name" class="avatar" />
      <div class="info">
        <div class="name">{{ profile.name.split(' ')[0] }} B.</div>
        <div class="handle">{{ profile.handle }}</div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import XLogo from '../icons/XLogo.vue'
import { profile } from '../../data/portfolio.js'

defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])

const navItems = [
  {
    id: 'posts',
    label: 'Accueil',
    icon: 'M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.409-.758z'
  },
  {
    id: 'skills',
    label: 'Compétences',
    icon: 'M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'
  },
  {
    id: 'experience',
    label: 'Parcours',
    icon: 'M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-15 2h15c.276 0 .5.22.5.5V8h-16V5.5c0-.28.224-.5.5-.5zM4.498 19c-.276 0-.5-.22-.5-.5V10h16v8.5c0 .28-.224.5-.5.5h-15z'
  },
  {
    id: 'formation',
    label: 'Formation',
    icon: 'M7.002 21.728l4.998-3 4.998 3V4.5c0-1.379-1.121-2.5-2.5-2.5h-4.996c-1.379 0-2.5 1.121-2.5 2.5v17.228z'
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 5.333 8-5.333V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.236l-8 5.334-8-5.334V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.264z'
  }
]
</script>

<style scoped>
.sidebar {
  width: 275px;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  border-right: 1px solid var(--border);
}

.logo {
  padding: 12px;
  margin-bottom: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 20px;
  margin-bottom: 2px;
  color: var(--text-primary);
}

.nav-item:hover {
  background: var(--bg-hover);
}

.nav-item.active {
  font-weight: 700;
}

.nav-item svg {
  width: 26px;
  height: 26px;
  fill: var(--text-primary);
  flex-shrink: 0;
}

.cta-btn {
  display: block;
  width: 90%;
  padding: 16px;
  border-radius: 9999px;
  background: var(--blue);
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  margin-top: 16px;
  transition: background 0.2s;
}

.cta-btn:hover {
  background: var(--blue-hover);
}

.profile-card {
  margin-top: auto;
  padding: 12px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 12px;
}

.profile-card:hover {
  background: var(--bg-hover);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.info {
  flex: 1;
  min-width: 0;
}

.name {
  font-weight: 700;
  font-size: 15px;
}

.handle {
  color: var(--text-secondary);
  font-size: 15px;
}

@media (max-width: 1000px) {
  .sidebar { width: 72px; }
  .nav-item span,
  .cta-text,
  .info { display: none; }
  .cta-btn {
    width: 50px;
    height: 50px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .sidebar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 54px;
    flex-direction: row;
    justify-content: space-around;
    border-right: none;
    border-top: 1px solid var(--border);
    background: var(--bg-primary);
    z-index: 50;
    padding: 0;
  }
  .logo, .cta-btn, .profile-card, .nav-item span { display: none; }
  .nav-item { padding: 14px; margin: 0; }
}
</style>
