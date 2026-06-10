<template>
  <PricingCard
    badge="Standard Package"
    title="The Business Website"
    price="80k"
    tagline='"A fair price for world-class work."'
    :items="items"
    cta="Launch Your Site Now"
    :url="url"
    :featured="true"
    footer-text="Need custom backend features?"
    footer-link="Get a custom quote →"
  />
</template>

<script setup lang="ts">
const { url } = useWhatsApp();

const items = [
  "Up to 6 Page Architecture",
  "Full Responsive Mobile UX",
  "WhatsApp Conversion Flow",
  "Local SEO Optimisation",
  "High-Speed Performance",
  "Vercel Edge Deployment",
  "Domain & Email Setup",
  "Secure Contact Systems",
];
</script>
