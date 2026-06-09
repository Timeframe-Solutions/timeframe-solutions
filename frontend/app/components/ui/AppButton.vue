<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? href : undefined"
    :target="isLink && target === '_blank' ? '_blank' : undefined"
    :rel="isLink && target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="[
      buttonClasses,
      size === 'sm'
        ? 'px-4 py-2 text-tf-text-sm'
        : 'px-6 py-3 text-tf-text-base',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
    :disabled="!isLink && disabled"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  variant: "primary" | "accent" | "ghost";
  href?: string;
  target?: "_blank" | "_self";
  size?: "sm" | "md";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  target: "_self",
  size: "md",
  disabled: false,
});

const isLink = computed(() => !!props.href);

const buttonClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "btn-primary";
    case "accent":
      return "btn-accent";
    case "ghost":
      return "btn-ghost";
    default:
      return "btn-primary";
  }
});
</script>

<style scoped>
/* Base classes are in tokens.css */
</style>
