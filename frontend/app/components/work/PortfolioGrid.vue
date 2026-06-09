<template>
  <UiSectionWrapper bg="surface" py="lg">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <WorkPortfolioCard 
        v-for="project in projects" 
        :key="project.slug"
        :project="project"
      />
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import type { PortfolioProject } from '~/app/types'

defineProps<{
  projects: PortfolioProject[]
}>()
</script>
