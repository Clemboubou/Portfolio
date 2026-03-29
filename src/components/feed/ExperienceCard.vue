<template>
  <article class="tweet">
    <div class="avatar" :class="exp.color">{{ exp.icon }}</div>
    <div class="content">
      <div class="header">
        <span class="name">{{ exp.company }}</span>
        <VerifiedBadge />
        <span class="secondary">@{{ exp.handle }}</span>
        <span class="secondary"> · </span>
        <span class="secondary">{{ exp.period }}</span>
      </div>
      <div class="text">
        <strong>{{ exp.title }}</strong> — {{ exp.location }}
      </div>
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

defineProps({
  exp: Object
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
  font-size: 15px;
  color: #fff;
  flex-shrink: 0;
}

.avatar.green { background: var(--green); }

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

.media-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 16px 12px;
  background: var(--bg-tertiary);
}

.tag {
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 13px;
  background: var(--blue-faded);
  color: var(--blue);
  font-weight: 500;
}
</style>
