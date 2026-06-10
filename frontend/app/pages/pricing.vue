<template>
  <div>
    <UiPageHero
      heading="Simple, Fixed Pricing"
      subheading="One price. No surprises. No asterisks."
    />

    <UiSectionWrapper py="lg">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start pt-6"
      >
        <PricingCardStarter />
        <PricingCardStandard />
      </div>
    </UiSectionWrapper>

    <PricingFaq />
    <CtaBanner
      heading="Ready to get your site built?"
      subheading="Drop us a message and we'll get back to you within 24 hours."
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Website Pricing Kenya — From KES 50,000 | Timeframe Solutions",
  description:
    "Fixed price web design in Kenya. From KES 50,000 for a complete business website. No hidden costs.",
});
</script>
