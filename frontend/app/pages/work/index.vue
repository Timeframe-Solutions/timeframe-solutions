<template>
  <div>
    <UiPageHero 
      heading="Our Work"
      subheading="Four industries. Four fully built demos. Each one is a live Nuxt 4 site showing exactly what we'd build for your business."
    />
    
    <WorkPortfolioGrid :projects="projects" />

    <CtaBanner 
      heading="Like what you see?"
      subheading="Let's build your industry's version."
    />
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/portfolio'

useSeoMeta({
  title: 'Our Work — Timeframe Solutions',
  description: 'Portfolio of Nairobi business websites: real estate, car rental, clinics, electronics retail. Built with Nuxt 4 and optimized for mobile.',
  ogTitle: 'Our Work — Timeframe Solutions',
  ogDescription: 'Fully built demo sites for Nairobi businesses. See what Timeframe Solutions can build for you.'
})
</script>
