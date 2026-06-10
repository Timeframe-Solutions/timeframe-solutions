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

    <!-- Comet trails -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        class="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="comet1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0" />
            <stop offset="70%" stop-color="#f59e0b" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.7" />
          </linearGradient>
          <linearGradient id="comet2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#d97706" stop-opacity="0" />
            <stop offset="70%" stop-color="#d97706" stop-opacity="0.2" />
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.5" />
          </linearGradient>
          <linearGradient id="comet3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0" />
            <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.15" />
            <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.4" />
          </linearGradient>
        </defs>
        <!-- Comet 1 — main, mid-screen diagonal -->
        <line
          x1="-200"
          y1="180"
          x2="900"
          y2="420"
          stroke="url(#comet1)"
          stroke-width="1.5"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-900 -300"
            to="1600 400"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
        <!-- Comet 2 — thinner, upper third -->
        <line
          x1="-100"
          y1="80"
          x2="700"
          y2="260"
          stroke="url(#comet2)"
          stroke-width="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-800 -200"
            to="1800 300"
            dur="5.5s"
            begin="1.8s"
            repeatCount="indefinite"
          />
        </line>
        <!-- Comet 3 — faint, lower arc -->
        <line
          x1="-300"
          y1="320"
          x2="600"
          y2="520"
          stroke="url(#comet3)"
          stroke-width="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-1000 -100"
            to="1400 200"
            dur="7s"
            begin="3.2s"
            repeatCount="indefinite"
          />
        </line>
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
        Premium quality at an accessible investment.
        <span
          class="text-tf-text-primary font-bold underline decoration-tf-accent/40 decoration-4 underline-offset-4 text-2xl md:text-3xl mx-1"
        >
          Digital done right
        </span>
        finally
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
