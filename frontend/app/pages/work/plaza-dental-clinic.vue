<template>
  <div v-if="project">
    <WorkCaseStudyHero 
      :title="project.title"
      :industry="project.industry"
      :one-liner="project.oneLiner"
    />
    
    <WorkCaseStudyMeta 
      :industry="project.industry"
      :pages="project.pages"
      :features="project.features.length + ' key features'"
    />

    <WorkCaseStudyScreenshots 
      :cover-image="project.coverImage"
      :title="project.title"
    />

    <WorkCaseStudyFeatures :features="project.features" />

    <WorkCaseStudyDemonstrates :body="project.demonstrates" />

    <CtaBanner 
      :heading="'Need a clinic website?'"
      subheading="Appointment forms, doctor profiles, local SEO — KES 80,000."
    />
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/portfolio'

const project = projects.find(p => p.slug === 'plaza-dental-clinic')

useSeoMeta({
  title: project?.title + ' — Case Study | Timeframe Solutions',
  description: project?.oneLiner,
  ogTitle: project?.title,
  ogDescription: project?.oneLiner
})
</script>
