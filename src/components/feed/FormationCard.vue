<template>
  <article class="tweet">
    <div class="avatar" :class="formation.color">{{ formation.icon }}</div>
    <div class="content">
      <div class="header">
        <span class="name">{{ formation.school }}</span>
        <span class="secondary">@{{ formation.handle }}</span>
        <span class="secondary"> · </span>
        <span class="secondary">{{ formation.period }}</span>
      </div>
      <div class="text"><strong>{{ formation.title }}</strong></div>
      <div class="media">
        <div class="media-body">
          <p>{{ formation.description }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  formation: Object
})
</script>

<style scoped>
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
  font-size: 12px;
  color: #fff;
  flex-shrink: 0;
}

.avatar.orange { background: #ff7a00; }
.avatar.purple { background: #7856ff; }

.content { flex: 1; min-width: 0; }

.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

.name { font-weight: 700; font-size: 15px; white-space: nowrap; }
.secondary { color: var(--text-secondary); font-size: 15px; white-space: nowrap; }
.text { font-size: 15px; line-height: 1.5; margin-bottom: 8px; }

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
</style>
