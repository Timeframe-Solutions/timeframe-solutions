<template>
  <div class="group relative h-full flex flex-col">
    <!-- Card Visuals (Image & Hover Overlay) -->
    <div
      class="relative aspect-[16/10] overflow-hidden rounded-2xl bg-tf-surface-alt border border-tf-border transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-tf-primary/10 group-hover:-translate-y-2"
    >
      <NuxtImg
        :src="project.coverImage"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-tf-text-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8"
      >
        <span class="text-white font-bold inline-flex items-center gap-2">
          Explore Case Study
          <Icon name="lucide:arrow-right" class="w-5 h-5" />
        </span>
      </div>
    </div>

    <!-- Card Content -->
    <div class="mt-8 px-2 flex-grow">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <span
            class="text-tf-primary text-xs font-bold uppercase tracking-widest"
            >{{ project.industry }}</span
          >
          <div class="w-1 h-1 rounded-full bg-tf-border"></div>
          <span class="text-tf-text-muted text-xs font-medium">{{
            project.pages
          }}</span>
        </div>

        <!-- Live Site Link (Optional) -->
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="relative z-20 flex items-center gap-1.5 text-xs font-bold text-tf-primary hover:text-tf-primary-dark transition-colors px-3 py-1.5 rounded-full bg-tf-primary/5 border border-tf-primary/10 hover:bg-tf-primary/10 ring-1 ring-transparent focus:ring-tf-primary focus:outline-none"
          :aria-label="`Visit live site for ${project.title}`"
          @click.stop
        >
          Live Site
          <Icon name="lucide:external-link" class="w-3.5 h-3.5" />
        </a>
      </div>

      <h3
        class="text-2xl font-bold text-tf-text-primary mb-3 group-hover:text-tf-primary transition-colors tracking-tight"
      >
        <!-- Stretched link pattern to avoid nested links while keeping the whole card clickable -->
        <NuxtLink
          :to="project.route"
          class="after:absolute after:inset-0 z-10 focus:outline-none"
          :aria-label="`View case study for ${project.title}`"
        >
          {{ project.title }}
        </NuxtLink>
      </h3>

      <p
        class="text-tf-text-body text-lg leading-relaxed opacity-80 line-clamp-2"
      >
        {{ project.oneLiner }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PortfolioProject } from "~/types";

defineProps<{
  project: PortfolioProject;
}>();
</script>
