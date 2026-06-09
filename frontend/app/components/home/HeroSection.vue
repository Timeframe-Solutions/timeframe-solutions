<template>
  <UiSectionWrapper
    bg="surface"
    py="lg"
    class="relative overflow-hidden min-h-[80vh] flex items-center"
  >
    <!-- Speed Line Decoration - Subtle and Premium -->
    <div
      class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
    >
      <svg
        class="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L100 100" stroke="var(--tf-primary)" stroke-width="0.1" />
        <path d="M20 0 L100 80" stroke="var(--tf-primary)" stroke-width="0.1" />
        <path d="M40 0 L100 60" stroke="var(--tf-primary)" stroke-width="0.1" />
      </svg>
    </div>

    <div
      class="relative z-10 flex flex-col items-center text-center mx-auto max-w-5xl"
    >
      <UiAppBadge label="Fast & Reliable Web Solutions" class="mb-8" />

      <h1
        class="text-tf-text-primary text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-[-0.03em]"
      >
        Websites that work as hard <br class="hidden md:block" />
        <span class="text-tf-primary">as your business.</span>
      </h1>

      <p
        class="text-tf-text-body text-xl md:text-2xl max-w-3xl mb-12 font-medium opacity-90"
      >
        Nairobi's premier studio for high-conversion web solutions.
        <br class="hidden md:block" />
        Fixed price
        <span
          class="text-tf-text-primary font-bold underline decoration-tf-accent/40 decoration-4 underline-offset-4 text-2xl md:text-3xl mx-1"
          >KES 80,000</span
        >
        delivered in 14 days.
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-6">
        <UiAppButton
          variant="accent"
          :href="url"
          target="_blank"
          class="px-10 py-5 text-lg shadow-lg shadow-tf-accent/20"
        >
          Start Your Project
        </UiAppButton>
        <UiAppButton variant="ghost" href="/work" class="px-10 py-5 text-lg">
          Explore Our Work
        </UiAppButton>
      </div>

      <div class="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6">
        <div
          v-for="v in verticals"
          :key="v"
          class="flex items-center gap-2 group"
        >
          <div
            class="w-1.5 h-1.5 rounded-full bg-tf-border group-hover:bg-tf-primary transition-colors"
          ></div>
          <span
            class="text-tf-text-muted text-xs font-bold uppercase tracking-[0.2em] group-hover:text-tf-text-primary transition-colors"
          >
            {{ v }}
          </span>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
const { url } = useWhatsApp();

const verticals = [
  "Real Estate",
  "Car Rental",
  "Healthcare",
  "SACCOs",
  "Retail",
];
</script>
