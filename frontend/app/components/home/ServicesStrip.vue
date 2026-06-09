<template>
  <UiSectionWrapper bg="surface-alt" py="lg">
    <div class="text-center mb-16">
      <UiAppBadge label="What We Build" variant="eyebrow" class="mb-4" />
      <h2
        class="text-3xl md:text-4xl font-bold text-[var(--tf-text-primary)] mb-4"
      >
        Your industry. Your website.
      </h2>
      <p class="text-[var(--tf-text-body)] max-w-2xl mx-auto">
        We've built demo sites for the verticals we know best — so you can see
        exactly what your site could look like before we start.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      <UiAppCard
        v-for="service in services"
        :key="service.id"
        padding="md"
        class="flex flex-col h-full"
      >
        <div class="mb-6 text-[var(--tf-primary)]">
          <Icon :name="service.icon" class="w-10 h-10" />
        </div>
        <h3 class="text-xl font-bold text-[var(--tf-text-primary)] mb-3">
          {{ service.title }}
        </h3>
        <p class="text-[var(--tf-text-body)] text-sm leading-relaxed">
          {{ service.description }}
        </p>
      </UiAppCard>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import { services } from "~/data/services";
</script>
