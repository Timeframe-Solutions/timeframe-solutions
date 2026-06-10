<template>
  <UiSectionWrapper bg="surface" py="lg">
    <div
      class="relative bg-tf-primary rounded-[var(--tf-radius-xl)] overflow-hidden"
    >
      <!-- Decorative rings -->
      <div
        class="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
      />
      <div
        class="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-white/10 pointer-events-none"
      />
      <div
        class="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-white/10 pointer-events-none"
      />

      <!-- Content -->
      <div
        class="relative z-10 px-8 py-16 lg:px-24 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <!-- Left: text -->
        <div class="text-center lg:text-left max-w-xl">
          <!-- Eyebrow -->
          <div
            class="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-tf-accent inline-block" />
            Let's Talk
          </div>
          <h2
            class="text-white text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4"
          >
            {{ heading }}
          </h2>
          <p v-if="subheading" class="text-white/70 text-lg leading-relaxed">
            {{ subheading }}
          </p>
        </div>

        <!-- Right: CTAs -->
        <div
          class="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 flex-shrink-0"
        >
          <UiAppButton
            variant="accent"
            :href="ctaHref || url"
            target="_blank"
            class="px-8 py-4 text-base font-bold shadow-xl shadow-tf-accent/30 whitespace-nowrap"
          >
            {{ ctaLabel }}
          </UiAppButton>
          <UiAppButton
            v-if="secondaryLabel"
            variant="ghost"
            :href="secondaryHref"
            class="px-8 py-4 text-base font-bold border border-white/30 text-white hover:bg-white/10 whitespace-nowrap"
          >
            {{ secondaryLabel }}
          </UiAppButton>
        </div>
      </div>

      <!-- Bottom trust strip -->
      <div
        class="relative z-10 border-t border-white/10 px-8 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
      >
        <div
          v-for="trust in trustItems"
          :key="trust"
          class="flex items-center gap-2 text-white/60 text-sm"
        >
          <Icon
            name="lucide:check-circle"
            class="w-4 h-4 text-tf-accent flex-shrink-0"
          />
          <span>{{ trust }}</span>
        </div>
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
  ctaLabel: "WhatsApp Us →",
});

const trustItems = [
  "Fixed price, no surprises",
  "Response within 24 hours",
  "Built and hosted in Kenya",
];
</script>
