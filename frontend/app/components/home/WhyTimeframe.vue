<template>
  <UiSectionWrapper bg="surface-alt" py="lg">
    <div class="text-center mb-16">
      <UiAppBadge label="Why Timeframe" variant="eyebrow" class="mb-4" />
      <h2
        class="text-3xl md:text-4xl font-bold text-[var(--tf-text-primary)] mb-4"
      >
        We know what Nairobi businesses actually need.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="point in proofPoints"
        :key="point.number"
        class="border-t-4 border-[var(--tf-primary)] pt-8"
      >
        <span
          class="block text-4xl font-extrabold text-[var(--tf-primary)] mb-4 font-display"
        >
          {{ point.number }}
        </span>
        <h3 class="text-xl font-bold text-[var(--tf-text-primary)] mb-3">
          {{ point.title }}
        </h3>
        <p class="text-[var(--tf-text-body)] leading-relaxed">
          {{ point.body }}
        </p>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import { proofPoints } from "~/data/why-timeframe";
</script>
