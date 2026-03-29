<template>
  <div class="media">
    <div class="media-header">
      <div class="label">{{ media.label }}</div>
      <h4>{{ media.title }}</h4>
    </div>
    <div class="media-body">
      <p>{{ media.description }}</p>
    </div>
    <div v-if="media.tags" class="media-tags">
      <span
        v-for="tag in media.tags"
        :key="tag.name"
        class="tag"
        :class="{ main: tag.main }"
      >
        {{ tag.name }}
      </span>
    </div>
    <div v-if="media.result" class="media-result">
      <div class="dot"></div>
      <span>{{ media.result }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  media: Object
})
</script>

<style scoped>
.media {
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 10px;
}

.media-header {
  padding: 12px 16px;
  background: var(--bg-secondary);
}

.media-header .label {
  font-size: 12px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.media-header h4 {
  font-size: 15px;
  margin-top: 2px;
}

.media-body {
  padding: 12px 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
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

.tag.main {
  background: var(--blue);
  color: #fff;
  font-weight: 700;
}

.media-result {
  padding: 8px 16px 12px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
}

.media-result span {
  font-size: 13px;
  color: var(--green);
}
</style>
