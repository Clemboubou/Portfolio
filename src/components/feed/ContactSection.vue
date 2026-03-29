<template>
  <article id="contact-section" class="tweet">
    <div class="avatar">@</div>
    <div class="content">
      <div class="header">
        <span class="name">Contact</span>
        <VerifiedBadge />
        <span class="handle">{{ profile.handle }}</span>
      </div>
      <div class="text">
        Disponible pour un CDI Full Stack
        <span class="tag">Angular</span> /
        <span class="tag">.NET Core</span> ou
        <span class="tag">Java</span> /
        <span class="tag">Spring Boot</span>.
        <br /><br />
        <a :href="`mailto:${profile.email}`" class="tag">{{ profile.email }}</a><br />
        <a :href="`tel:+33${profile.phone.replace(/\s/g, '').substring(1)}`" class="tag">{{ profile.phone }}</a><br />
        {{ profile.location }} — Mobilité : {{ profile.mobility }}
      </div>
    </div>
  </article>
</template>

<script setup>
import VerifiedBadge from '../icons/VerifiedBadge.vue'
import { profile } from '../../data/portfolio.js'
</script>

<style scoped>
.tweet {
  padding: 12px 16px;
  display: flex;
  gap: 12px;
}

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

.content { flex: 1; min-width: 0; }

.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

.name { font-weight: 700; font-size: 15px; }
.handle { color: var(--text-secondary); font-size: 15px; }

.text {
  font-size: 15px;
  line-height: 1.8;
}

.text .tag {
  color: var(--blue);
}

.text a {
  text-decoration: none;
}

.text a:hover {
  text-decoration: underline;
}
</style>
