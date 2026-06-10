<template>
  <UiSectionWrapper bg="surface-alt" py="lg">
    <div class="text-center mb-20">
      <UiAppBadge label="Pricing" variant="eyebrow" class="mb-6" />
      <h2
        class="text-4xl md:text-5xl font-extrabold text-tf-text-primary tracking-tight mb-6"
      >
        Simple, honest pricing.
      </h2>
      <p class="text-tf-text-body text-xl max-w-2xl mx-auto opacity-80">
        No hidden fees. No retainers. One payment — your site is live.
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start pt-6"
    >
      <PricingCardStarter />
      <PricingCardStandard />
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
// PricingSnapshot
</script>
