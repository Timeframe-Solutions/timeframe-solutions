<template>
  <span 
    :class="[
      'badge',
      variant === 'eyebrow' && 'tracking-[0.1em] uppercase text-tf-text-muted font-semibold bg-transparent px-0'
    ]"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  variant?: 'default' | 'eyebrow';
}

withDefaults(defineProps<Props>(), {
  variant: 'default'
});
</script>
