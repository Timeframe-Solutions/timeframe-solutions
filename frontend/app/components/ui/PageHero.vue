<template>
  <div 
    class="bg-tf-surface-alt py-[var(--tf-section-py-sm)] lg:py-[var(--tf-section-py-lg)]"
    :class="{ 'text-center': centered }"
  >
    <div class="mx-auto max-w-[var(--tf-container-max)] px-[var(--tf-container-pad)] lg:px-[var(--tf-container-pad-lg)]">
      <UiAppBadge v-if="eyebrow" :label="eyebrow" variant="eyebrow" class="mb-4" />
      <h1 class="text-tf-text-primary text-4xl lg:text-5xl font-bold mb-6">
        {{ heading }}
      </h1>
      <p 
        v-if="subheading" 
        class="text-tf-text-body text-lg lg:text-xl max-w-2xl"
        :class="{ 'mx-auto': centered }"
      >
        {{ subheading }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
}

withDefaults(defineProps<Props>(), {
  centered: true
});
</script>
