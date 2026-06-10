<template>
  <PricingCard
    badge="Starter"
    title="The Starter Site"
    price="50k"
    tagline='"Everything you need to get found."'
    :items="items"
    cta="Start Here"
    :url="url"
    footer-text="Want to upgrade later?"
    footer-link="Move to Standard →"
  />
</template>

<script setup lang="ts">
const { url } = useWhatsApp();

const items = [
  "Up to 3 Page Architecture",
  "Mobile-Responsive Design",
  "WhatsApp Contact Button",
  "Google Business Setup",
  "Fast Vercel Deployment",
  "Domain & Email Setup",
  "Basic Contact Form",
  "30-Day Support Included",
];
</script>
