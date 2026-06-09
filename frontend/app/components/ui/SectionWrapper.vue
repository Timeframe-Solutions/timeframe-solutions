<template>
  <section 
    :id="id"
    :class="[
      bg === 'surface-alt' ? 'bg-tf-surface-alt' : 'bg-tf-surface',
      py === 'sm' ? 'py-[var(--tf-section-py-sm)]' : 'py-[var(--tf-section-py-lg)]'
    ]"
  >
    <div class="mx-auto max-w-[var(--tf-container-max)] px-[var(--tf-container-pad)] lg:px-[var(--tf-container-pad-lg)]">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  bg?: 'surface' | 'surface-alt';
  py?: 'sm' | 'lg';
  id?: string;
}

withDefaults(defineProps<Props>(), {
  bg: 'surface',
  py: 'lg'
});
</script>
