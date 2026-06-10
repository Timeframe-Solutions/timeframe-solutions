<template>
  <UiSectionWrapper bg="surface" py="lg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div class="max-w-xl">
        <UiAppBadge label="Our Philosophy" variant="eyebrow" class="mb-8" />
        <h2
          class="text-4xl md:text-5xl font-extrabold text-tf-text-primary mb-10 tracking-tight leading-tight"
        >
          A small studio. <br />Serious about craft.
        </h2>
        <div
          class="space-y-8 text-lg md:text-xl text-tf-text-body leading-relaxed"
        >
          <p>
            Timeframe Solutions is a Nairobi-based web development studio. And
            every business we work with starts in the same place.
          </p>

          <p>
            WhatsApp DMs as a storefront. Facebook as a website. It works until
            it doesn't. Until you're ready for more.
          </p>

          <p>
            That's where your journey with us begins. Together, we'll move you
            from scattered social media to a custom-built Nuxt 4 website. From
            slow load times to lightning-fast performance. From invisible to
            findable. From template limitations to something that's truly,
            uniquely yours.
          </p>

          <div class="relative pl-6 border-l-4 border-tf-primary">
            <p class="font-semibold text-tf-text-primary">
              From digital presence to digital excellence.
            </p>
            <p class="mt-2 opacity-85">
              That's the journey we take with every client. Ready to begin
              yours?
            </p>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div
          class="absolute -inset-4 bg-tf-primary-light rounded-[2.5rem] -rotate-2 transition-transform group-hover:rotate-0 duration-500"
        ></div>
        <div
          class="relative aspect-square bg-tf-surface-alt rounded-[2rem] overflow-hidden border border-tf-border flex items-center justify-center p-16 shadow-2xl shadow-tf-primary/5"
        >
          <div class="text-center">
            <Icon
              name="lucide:code-2"
              class="w-32 h-32 text-tf-primary mb-10 mx-auto"
            />
            <p
              class="text-3xl font-extrabold text-tf-text-primary font-display tracking-tight leading-tight"
            >
              Built for Nairobi.<br />Deployed to the world.
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
