<template>
  <UiSectionWrapper bg="surface" py="lg">
    <div class="relative group">
      <div class="absolute -inset-2 bg-tf-primary/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div class="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border border-tf-border bg-tf-surface-alt transition-transform duration-500 group-hover:scale-[1.01]">
        <NuxtImg 
          :src="coverImage" 
          :alt="title + ' production preview'"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 ring-1 ring-inset ring-tf-text-primary/10 rounded-[2rem]"></div>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
defineProps<{
  coverImage: string
  title: string
}>()
</script>
