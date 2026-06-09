<template>
  <UiSectionWrapper bg="surface" py="sm">
    <div class="bg-tf-primary rounded-[var(--tf-radius-xl)] p-8 lg:p-16 text-center text-tf-text-inverse">
      <h2 class="text-tf-text-inverse text-3xl lg:text-4xl font-bold mb-4">
        {{ heading }}
      </h2>
      <p v-if="subheading" class="text-tf-text-inverse/80 text-lg mb-8 max-w-2xl mx-auto">
        {{ subheading }}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <UiAppButton variant="accent" :href="ctaHref || url" target="_blank">
          {{ ctaLabel }}
        </UiAppButton>
        <UiAppButton v-if="secondaryLabel" variant="ghost" :href="secondaryHref" class="border-tf-text-inverse text-tf-text-inverse hover:bg-tf-text-inverse/10">
          {{ secondaryLabel }}
        </UiAppButton>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
const { url } = useWhatsApp();

interface Props {
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

withDefaults(defineProps<Props>(), {
  ctaLabel: 'WhatsApp Us →'
});
</script>
