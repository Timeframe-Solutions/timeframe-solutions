<template>
  <div 
    class="card"
    :class="[
      padding === 'sm' ? 'p-[var(--tf-space-4)]' : padding === 'lg' ? 'p-[var(--tf-space-10)]' : 'p-[var(--tf-space-6)]',
      !hoverable && 'hover:transform-none hover:shadow-card'
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

withDefaults(defineProps<Props>(), {
  hoverable: true,
  padding: 'md'
});
</script>
