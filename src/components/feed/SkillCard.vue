<template>
  <article class="tweet">
    <div class="avatar" :class="category.color">{{ category.icon }}</div>
    <div class="content">
      <div class="header">
        <span class="name">{{ category.name }}</span>
        <VerifiedBadge />
        <span class="handle">@{{ category.handle }}</span>
      </div>
      <div class="text">
        {{ category.description }}
        <span class="legend">
          <span class="legend-dot pro"></span> Expérience pro
          <span class="legend-dot learning"></span> Formation
        </span>
      </div>
      <div class="skills-list">
        <div class="skills-inline">
          <span
            v-for="skill in category.skills"
            :key="skill.name"
            class="skill-tag"
            :class="skill.pro ? 'pro' : 'learning'"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import VerifiedBadge from '../icons/VerifiedBadge.vue'

defineProps({
  category: Object
})
</script>

<style scoped>
.tweet {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 12px;
  transition: background 0.15s;
}

.tweet:hover {
  background: var(--bg-hover);
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

.avatar.green { background: var(--green); }
.avatar.purple { background: #7856ff; }
.avatar.orange { background: #ff7a00; }

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
}

.handle {
  color: var(--text-secondary);
  font-size: 15px;
}

.text {
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.skills-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  padding: 5px 14px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
}

.skill-tag.pro {
  background: var(--green-faded);
  color: var(--green);
}

.skill-tag.learning {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.legend {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-size: 12px;
  color: var(--text-secondary);
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.legend-dot.pro {
  background: var(--green);
}

.legend-dot.learning {
  background: #f59e0b;
  margin-left: 10px;
}
</style>
