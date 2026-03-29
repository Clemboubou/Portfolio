<!--
  XLogo.vue — Composant wrapper SVG pour le logo "X" (anciennement Twitter).
  Simple wrapper sans props ni logique : affiche uniquement le chemin SVG
  du logo avec une taille et une couleur par défaut.
  Utilisé dans SidebarLeft en haut de la navigation.
-->
<template>
  <!-- Chemin SVG officiel du logo X (Twitter rebrand) -->
  <svg viewBox="0 0 24 24" class="x-logo">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
</template>

<style scoped>
/*
  Taille fixe de 30x30px et couleur héritée du thème via --text-primary.
  Cela permet au logo de s'adapter automatiquement au mode sombre/clair
  sans logique conditionnelle.
*/
.x-logo {
  width: 30px;
  height: 30px;
  fill: var(--text-primary);
}
</style>
