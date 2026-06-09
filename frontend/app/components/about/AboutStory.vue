<template>
  <UiSectionWrapper bg="surface" py="lg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div class="max-w-xl">
        <UiAppBadge label="Our Philosophy" variant="eyebrow" class="mb-8" />
        <h2 class="text-4xl md:text-5xl font-extrabold text-tf-text-primary mb-10 tracking-tight leading-tight">
          A small studio. <br>Serious about craft.
        </h2>
        <div class="space-y-8 text-lg md:text-xl text-tf-text-body leading-relaxed opacity-90">
          <p>
            Timeframe Solutions is a Nairobi-based web development studio. We build custom websites for East African businesses that are tired of WhatsApp DMs as a storefront and Facebook pages as a presence.
          </p>
          <p>
            We're developers, not just designers. Every site we deliver is built with Nuxt 4, deployed on Vercel, and written properly — semantic HTML, optimized images, fast load times, and real SEO. Not a WordPress theme with a logo swap.
          </p>
          <p class="font-bold text-tf-text-primary">
            We work with one type of client: Nairobi SMBs who are serious about their business and want a site that reflects that.
          </p>
        </div>
      </div>
      <div class="relative group">
        <div class="absolute -inset-4 bg-tf-primary-light rounded-[2.5rem] -rotate-2 transition-transform group-hover:rotate-0 duration-500"></div>
        <div class="relative aspect-square bg-tf-surface-alt rounded-[2rem] overflow-hidden border border-tf-border flex items-center justify-center p-16 shadow-2xl shadow-tf-primary/5">
          <div class="text-center">
            <Icon name="lucide:code-2" class="w-32 h-32 text-tf-primary mb-10 mx-auto" />
            <p class="text-3xl font-extrabold text-tf-text-primary font-display tracking-tight leading-tight">
              Built for Nairobi.<br>Deployed to the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
// About Story component
</script>
