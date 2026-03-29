<!--
  ProfileBanner.vue — Bannière de profil affichée en haut du fil.
  Reprend le layout du profil Twitter : bannière dégradée, avatar chevauchant
  la bannière, bio, métadonnées (localisation, disponibilité, date) et stats.
  Ce composant est purement présentationnel — il importe directement les données
  du profil sans props ni emits.
-->
<template>
  <div>
    <!--
      Bannière dégradée : gradient linéaire bleu → cyan.
      Sert de fond décoratif au-dessus du profil, comme sur Twitter.
    -->
    <div class="banner"></div>

    <div class="profile-section">
      <!--
        Avatar photo : positionné en position:absolute avec un top négatif (-67px)
        pour chevaucher la bannière. La moitié de l'avatar (67px = 134/2) dépasse
        vers le haut, créant l'effet de superposition bannière/profil de Twitter.
        La bordure de 4px couleur bg-primary donne l'illusion d'un "trou" découpé.
      -->
      <img :src="profile.photo" :alt="profile.name" class="avatar" />

      <!-- Bouton "Me contacter" aligné à droite, au-dessus de la bio -->
      <div class="actions">
        <a :href="`mailto:${profile.email}`" class="edit-btn">Me contacter</a>
      </div>

      <!-- Nom et handle (@pseudo) -->
      <div class="name">{{ profile.name }}</div>
      <div class="handle">{{ profile.handle }}</div>

      <!-- Bio avec technologies clés mises en valeur en bleu via la classe .hl -->
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

      <!-- Métadonnées : localisation, disponibilité, date d'inscription -->
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

      <!-- Statistiques : projets, compétences, formations -->
      <div class="stats">
        <span><strong>{{ profile.stats.projects }}</strong> Projets</span>
        <span><strong>{{ profile.stats.skills }}</strong> Competences</span>
        <span><strong>{{ profile.stats.formations }}</strong> Formations</span>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * @component ProfileBanner
 * Bannière de profil style Twitter. Composant sans props — importe
 * directement les données du profil depuis le fichier de données.
 * Purement présentationnel, aucune interaction utilisateur.
 */
import { profile } from '../../data/portfolio.js'
</script>

<style scoped>
/*
  Bannière dégradée : gradient diagonal bleu → cyan.
  Hauteur fixe de 200px comme sur Twitter. Sert uniquement de fond
  décoratif derrière l'avatar qui le chevauche.
*/
.banner {
  height: 200px;
  background: linear-gradient(135deg, #1d4ed8, #0ea5e9, #06b6d4);
}

/* position:relative nécessaire pour le positionnement absolu de l'avatar */
.profile-section {
  padding: 12px 16px 16px;
  border-bottom: 1px solid var(--border);
  position: relative;
}

/*
  Avatar en position absolue avec top:-67px (moitié de 134px de hauteur).
  Cela fait chevaucher l'avatar sur la bannière au-dessus — effet signature
  du profil Twitter. La bordure de 4px en bg-primary simule un "découpage"
  propre dans la bannière. object-fit:cover évite la déformation de la photo.
*/
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

/*
  Alignement du bouton à droite. Le margin-bottom de 36px laisse
  de la place pour le nom/handle qui apparaissent sous l'avatar.
*/
.actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 36px;
}

/* Bouton stylisé en pilule avec bordure, comme le "Edit profile" de Twitter */
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

/* Texte surligné en bleu pour les mots clés importants (technologies, CDI) */
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

/* Chiffres en couleur primaire pour les faire ressortir des labels gris */
.stats strong {
  color: var(--text-primary);
}

/* Responsive : bannière et avatar plus petits sur mobile */
@media (max-width: 700px) {
  .banner { height: 140px; }
  /* top:-45px = moitié de 90px pour maintenir le chevauchement proportionnel */
  .avatar { width: 90px; height: 90px; font-size: 32px; top: -45px; }
}
</style>
