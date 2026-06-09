<template>
  <div class="bg-tf-surface py-20 lg:py-32">
    <div class="mx-auto max-w-[var(--tf-container-max)] px-[var(--tf-container-pad)] lg:px-[var(--tf-container-pad-lg)]">
      <NuxtLink to="/work" class="group inline-flex items-center gap-2 text-tf-primary font-bold mb-12 hover:translate-x-[-4px] transition-transform">
        <Icon name="lucide:arrow-left" class="w-5 h-5" />
        Back to Work
      </NuxtLink>
      
      <div class="max-w-4xl">
        <UiAppBadge :label="industry" class="mb-8" />
        <h1 class="text-tf-text-primary text-5xl md:text-7xl font-extrabold mb-10 tracking-tight leading-tight">
          {{ title }}
        </h1>
        <p class="text-tf-text-body text-2xl md:text-3xl leading-relaxed opacity-90 font-medium">
          {{ oneLiner }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  industry: string
  oneLiner: string
}>()
</script>
