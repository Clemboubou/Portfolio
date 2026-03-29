<!--
  SkillCard.vue — Carte de compétences affichée dans l'onglet "Compétences".
  Reprend la mise en page d'un tweet Twitter (avatar + contenu) pour rester
  cohérent avec le thème du portfolio. Affiche une catégorie de compétences
  (ex. Front-end, Back-end) avec ses technologies sous forme de tags colorés.

  Code couleur des tags :
  - Vert  (pro)      → compétence acquise en expérience professionnelle
  - Jaune (learning)  → compétence acquise en formation / apprentissage
  Une légende avec des points colorés explique ce code à l'utilisateur.
-->
<template>
  <article class="tweet">
    <!-- Avatar circulaire coloré avec un emoji/icône représentant la catégorie -->
    <div class="avatar" :class="category.color">{{ category.icon }}</div>
    <div class="content">

      <!-- En-tête : nom de la catégorie + badge vérifié + handle -->
      <div class="header">
        <span class="name">{{ category.name }}</span>
        <VerifiedBadge />
        <span class="handle">@{{ category.handle }}</span>
      </div>

      <div class="text">
        {{ category.description }}

        <!--
          Légende du code couleur : deux points colorés (vert = pro, jaune = formation)
          permettent à l'utilisateur de comprendre la signification des couleurs
          des tags sans chercher ailleurs. Toujours visible dans chaque carte.
        -->
        <span class="legend">
          <span class="legend-dot pro"></span> Expérience pro
          <span class="legend-dot learning"></span> Formation
        </span>
      </div>

      <!-- Liste des compétences sous forme de tags en ligne (flex-wrap) -->
      <div class="skills-list">
        <div class="skills-inline">
          <!--
            Chaque compétence reçoit la classe "pro" ou "learning"
            selon skill.pro (booléen). Cela applique le code couleur :
            - pro     → fond vert atténué + texte vert
            - learning → fond jaune atténué + texte jaune
          -->
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

/**
 * @component SkillCard
 * Affiche une catégorie de compétences avec code couleur pro/formation.
 *
 * @prop {Object} category - Objet catégorie contenant :
 *   - icon {string}        — emoji affiché dans l'avatar
 *   - color {string}       — classe CSS pour la couleur de l'avatar (green, purple, orange)
 *   - name {string}        — nom de la catégorie (ex. "Front-end")
 *   - handle {string}      — handle fictif (ex. "frontend")
 *   - description {string} — texte descriptif
 *   - skills {Array}       — liste de { name: string, pro: boolean }
 *                            pro=true  → compétence professionnelle (vert)
 *                            pro=false → compétence de formation (jaune)
 */
defineProps({
  category: Object
})
</script>

<style scoped>
/* Layout tweet classique : avatar à gauche, contenu à droite */
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

/* Avatar circulaire — la couleur de fond varie selon la catégorie */
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

/* Classes de couleur dynamiques pour l'avatar */
.avatar.green { background: var(--green); }
.avatar.purple { background: #7856ff; }
.avatar.orange { background: #ff7a00; }

/* Le contenu prend tout l'espace restant ; min-width:0 empêche le débordement flex */
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

/* Style de base des tags de compétence — forme pilule */
.skill-tag {
  padding: 5px 14px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
}

/* Vert = compétence acquise en milieu professionnel */
.skill-tag.pro {
  background: var(--green-faded);
  color: var(--green);
}

/* Jaune/ambre = compétence acquise en formation (pas encore d'expérience pro) */
.skill-tag.learning {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

/* --- Légende du code couleur --- */
.legend {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-size: 12px;
  color: var(--text-secondary);
}

/* Points colorés de la légende — même couleur que les tags correspondants */
.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.legend-dot.pro {
  background: var(--green);
}

/* margin-left supplémentaire pour séparer visuellement les deux entrées de légende */
.legend-dot.learning {
  background: #f59e0b;
  margin-left: 10px;
}
</style>
