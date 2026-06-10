<template>
  <UiSectionWrapper bg="surface-alt" py="lg">
    <div class="text-center mb-24">
      <UiAppBadge label="Our Stack" variant="eyebrow" class="mb-6" />
      <h2
        class="text-4xl md:text-5xl font-extrabold text-tf-text-primary tracking-tight"
      >
        Modern tech for modern business.
      </h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div
        v-for="(tech, i) in stack"
        :key="tech.name"
        class="group relative bg-tf-surface rounded-3xl border border-tf-border text-center flex flex-col items-center gap-5 p-8 cursor-default transition-all duration-300 hover:-translate-y-2 hover:border-tf-primary/30 hover:shadow-xl hover:shadow-tf-primary/8"
        :style="{ animationDelay: `${i * 80}ms` }"
      >
        <!-- Subtle top accent line that grows on hover -->
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 bg-tf-primary rounded-full transition-all duration-300 group-hover:w-3/4"
        />

        <!-- Icon container -->
        <div class="relative mt-2">
          <div
            class="w-16 h-16 rounded-2xl bg-tf-primary-light flex items-center justify-center transition-all duration-300 group-hover:bg-tf-primary group-hover:scale-110 group-hover:rotate-3"
          >
            <Icon
              :name="tech.icon"
              class="w-8 h-8 text-tf-primary transition-colors duration-300 group-hover:text-white"
            />
          </div>
          <!-- Ping dot -->
          <span
            class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-tf-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <!-- Text -->
        <div class="pb-1">
          <h3 class="text-base font-bold text-tf-text-primary tracking-tight">
            {{ tech.name }}
          </h3>
          <p
            class="text-xs text-tf-text-muted font-medium mt-1 uppercase tracking-widest"
          >
            {{ tech.role }}
          </p>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
const stack = [
  { name: "Nuxt 4", role: "Frontend Core", icon: "lucide:layers" },
  { name: "Tailwind 3", role: "Premium Styling", icon: "lucide:palette" },
  { name: "Vercel", role: "Edge Delivery", icon: "lucide:cloud" },
  { name: "Lucide", role: "System Icons", icon: "lucide:box" },
  { name: "TypeScript", role: "Safety & Logic", icon: "lucide:code" },
];
</script>
