<template>
  <UiSectionWrapper bg="surface" py="lg">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
      <div class="max-w-2xl">
        <UiAppBadge label="Featured Work" variant="eyebrow" class="mb-6" />
        <h2 class="text-4xl md:text-5xl font-extrabold text-tf-text-primary tracking-tight">
          Live demos for Nairobi industries.
        </h2>
      </div>
      <NuxtLink to="/work" class="group text-tf-primary font-bold inline-flex items-center gap-2 hover:underline decoration-2 underline-offset-8 transition-all">
        View All Projects
        <Icon name="lucide:arrow-right" class="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
      <WorkPortfolioCard 
        v-for="project in projects.slice(0, 4)" 
        :key="project.slug"
        :project="project"
      />
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import { projects } from '~/data/portfolio'
</script>
