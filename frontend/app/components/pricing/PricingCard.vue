<template>
  <div
    class="w-full rounded-[2.5rem] border shadow-2xl p-8 md:p-12 relative flex flex-col"
    :class="
      featured
        ? 'bg-tf-surface border-tf-primary shadow-tf-primary/10'
        : 'bg-tf-surface border-tf-border shadow-tf-primary/5'
    "
  >
    <!-- Badge -->
    <div
      class="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap"
      :class="
        featured
          ? 'bg-tf-text-primary text-white'
          : 'bg-tf-surface border border-tf-border text-tf-text-muted'
      "
    >
      {{ badge }}
    </div>

    <!-- Header -->
    <div class="text-center mb-12">
      <h3
        class="text-tf-text-muted text-sm font-bold uppercase tracking-[0.2em] mb-8"
      >
        {{ title }}
      </h3>
      <div class="flex items-baseline justify-center gap-2">
        <span class="text-3xl font-bold text-tf-text-primary">KES</span>
        <span
          class="font-extrabold text-tf-text-primary font-display tracking-tighter"
          :class="featured ? 'text-8xl' : 'text-7xl'"
        >
          {{ price }}
        </span>
      </div>
      <p class="text-tf-text-muted mt-6 font-medium text-lg italic">
        {{ tagline }}
      </p>
    </div>

    <!-- Features -->
    <div class="grid grid-cols-1 gap-y-5 mb-12 flex-1">
      <div
        v-for="item in items"
        :key="item"
        class="flex items-start gap-4 group"
      >
        <div
          class="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          :class="
            featured
              ? 'bg-tf-primary-light group-hover:bg-tf-primary'
              : 'bg-tf-surface-alt group-hover:bg-tf-border'
          "
        >
          <Icon
            name="lucide:check"
            class="w-3 h-3 transition-colors"
            :class="
              featured
                ? 'text-tf-primary group-hover:text-white'
                : 'text-tf-text-muted'
            "
          />
        </div>
        <span class="text-tf-text-body font-medium leading-tight">{{
          item
        }}</span>
      </div>
    </div>

    <!-- CTA -->
    <UiAppButton
      :variant="featured ? 'accent' : 'primary'"
      :href="url"
      target="_blank"
      class="w-full justify-center py-5 text-lg"
      :class="featured ? 'shadow-xl shadow-tf-accent/20' : ''"
    >
      {{ cta }}
    </UiAppButton>

    <p class="text-center mt-8 text-sm text-tf-text-muted font-medium">
      {{ footerText }}
      <a
        :href="url"
        target="_blank"
        class="text-tf-primary hover:underline decoration-2 underline-offset-4"
      >
        {{ footerLink }}
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  badge: string;
  title: string;
  price: string;
  tagline: string;
  items: string[];
  cta: string;
  featured?: boolean;
  url: string;
  footerText?: string;
  footerLink?: string;
}>();
</script>
