<template>
  <div>
    <UiPageHero
      heading="Our Work"
      subheading="See your industry reimagined. Five live demos that show exactly how we'd transform your digital presence."
    />

    <WorkPortfolioGrid :projects="projects" />

    <CtaBanner
      heading="Like what you see?"
      subheading="Let's build your industry's version."
    />
  </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/portfolio";

useSeoMeta({
  title: "Our Work — Timeframe Solutions",
  description:
    "Portfolio of Nairobi business websites: real estate, car rental, clinics, electronics retail. Built with Nuxt 4 and optimized for mobile.",
  ogTitle: "Our Work — Timeframe Solutions",
  ogDescription:
    "Fully built demo sites for Nairobi businesses. See what Timeframe Solutions can build for you.",
});
</script>
