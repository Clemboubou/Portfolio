<!--
  ContactSection.vue — Section de contact toujours visible en bas du fil.
  Affichée quel que soit l'onglet actif (pas conditionnelle) pour que
  le visiteur puisse toujours trouver les coordonnées facilement.
  Utilise des liens mailto: et tel: natifs pour permettre un contact
  direct en un clic depuis mobile ou desktop.
-->
<template>
  <!-- id="contact-section" permet le scroll programmatique depuis la sidebar -->
  <article id="contact-section" class="tweet">
    <!-- Avatar avec "@" comme icône — symbolise le contact/email -->
    <div class="avatar">@</div>
    <div class="content">

      <!-- En-tête : "Contact" + badge vérifié + handle du profil -->
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

        <!--
          Lien mailto: — ouvre le client email natif de l'utilisateur.
          Stylisé comme un tag bleu pour rester cohérent avec le design.
        -->
        <a :href="`mailto:${profile.email}`" class="tag">{{ profile.email }}</a><br />

        <!--
          Lien tel: — permet d'appeler directement depuis un mobile.
          Le format international (+33) est construit dynamiquement :
          on retire le "0" initial du numéro français et on préfixe +33.
          Le .replace(/\s/g, '') supprime les espaces du numéro formaté.
        -->
        <a :href="`tel:+33${profile.phone.replace(/\s/g, '').substring(1)}`" class="tag">{{ profile.phone }}</a><br />
        {{ profile.location }} — Mobilité : {{ profile.mobility }}
      </div>
    </div>
  </article>
</template>

<script setup>
import VerifiedBadge from '../icons/VerifiedBadge.vue'

/**
 * @component ContactSection
 * Section de contact permanente. Importe directement les données du profil
 * (email, téléphone, localisation, mobilité) sans props — c'est un composant
 * singleton qui n'est jamais réutilisé avec des données différentes.
 */
import { profile } from '../../data/portfolio.js'
</script>

<style scoped>
/* Layout tweet sans border-bottom car c'est le dernier élément du fil */
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

/* line-height plus aéré (1.8) que les tweets normaux (1.5) pour la lisibilité */
.text {
  font-size: 15px;
  line-height: 1.8;
}

/* Technologies et liens stylisés en bleu — même apparence que les hashtags Twitter */
.text .tag {
  color: var(--blue);
}

/* Liens email/tel : pas de soulignement par défaut, soulignement au survol */
.text a {
  text-decoration: none;
}

.text a:hover {
  text-decoration: underline;
}
</style>
