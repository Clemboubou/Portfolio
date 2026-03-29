<template>
  <div>
    <div class="banner"></div>
    <div class="profile-section">
      <img :src="profile.photo" :alt="profile.name" class="avatar" />
      <div class="actions">
        <a :href="`mailto:${profile.email}`" class="edit-btn">Me contacter</a>
      </div>
      <div class="name">{{ profile.name }}</div>
      <div class="handle">{{ profile.handle }}</div>
      <div class="bio">
        <span>Développeur Full Stack </span>
        <span class="hl">Angular</span>
        <span> / </span>
        <span class="hl">.NET Core</span>
        <br />
        <span>Re-architecture d'applications industrielles critiques chez Paul Wurth (SMS Group).</span>
        <br />
        <span>En recherche de </span>
        <span class="hl">CDI</span>
        <span> Full Stack.</span>
      </div>
      <div class="meta">
        <span class="meta-item">
          <svg viewBox="0 0 24 24"><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2z"/></svg>
          {{ profile.location }}
        </span>
        <span class="meta-item">
          <svg viewBox="0 0 24 24"><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"/></svg>
          {{ profile.availability }}
        </span>
        <span class="meta-item">
          <svg viewBox="0 0 24 24"><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>
          {{ profile.joinedDate }}
        </span>
      </div>
      <div class="stats">
        <span><strong>{{ profile.stats.projects }}</strong> Projets</span>
        <span><strong>{{ profile.stats.skills }}</strong> Competences</span>
        <span><strong>{{ profile.stats.formations }}</strong> Formations</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile } from '../../data/portfolio.js'
</script>

<style scoped>
.banner {
  height: 200px;
  background: linear-gradient(135deg, #1d4ed8, #0ea5e9, #06b6d4);
}

.profile-section {
  padding: 12px 16px 16px;
  border-bottom: 1px solid var(--border);
  position: relative;
}

.avatar {
  width: 134px;
  height: 134px;
  border-radius: 50%;
  border: 4px solid var(--bg-primary);
  background: var(--bg-secondary);
  object-fit: cover;
  position: absolute;
  top: -67px;
  left: 16px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 36px;
}

.edit-btn {
  padding: 8px 20px;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
}

.edit-btn:hover {
  background: var(--bg-hover);
}

.name {
  font-size: 20px;
  font-weight: 800;
}

.handle {
  color: var(--text-secondary);
  font-size: 15px;
  margin-bottom: 12px;
}

.bio {
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 12px;
}

.bio .hl {
  color: var(--blue);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-secondary);
  font-size: 15px;
}

.meta-item svg {
  width: 18px;
  height: 18px;
  fill: var(--text-secondary);
}

.stats {
  display: flex;
  gap: 20px;
}

.stats span {
  font-size: 14px;
  color: var(--text-secondary);
}

.stats strong {
  color: var(--text-primary);
}

@media (max-width: 700px) {
  .banner { height: 140px; }
  .avatar { width: 90px; height: 90px; font-size: 32px; top: -45px; }
}
</style>
