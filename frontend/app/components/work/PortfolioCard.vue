<template>
  <div class="group cursor-pointer h-full">
    <NuxtLink :to="project.route" class="block h-full">
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

      <div class="mt-8 px-2">
        <div class="flex items-center gap-3 mb-4">
          <span
            class="text-tf-primary text-xs font-bold uppercase tracking-widest"
            >{{ project.industry }}</span
          >
          <div class="w-1 h-1 rounded-full bg-tf-border"></div>
          <span class="text-tf-text-muted text-xs font-medium">{{
            project.pages
          }}</span>
        </div>

        <h3
          class="text-2xl font-bold text-tf-text-primary mb-3 group-hover:text-tf-primary transition-colors tracking-tight"
        >
          {{ project.title }}
        </h3>

        <p
          class="text-tf-text-body text-lg leading-relaxed opacity-80 line-clamp-2"
        >
          {{ project.oneLiner }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { PortfolioProject } from "~/types";

defineProps<{
  project: PortfolioProject;
}>();
</script>
