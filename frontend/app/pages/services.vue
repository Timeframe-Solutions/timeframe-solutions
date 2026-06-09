<template>
  <div>
    <UiPageHero 
      heading="What We Build"
      subheading="One package covers all five verticals. Here's what that looks like for each industry."
    />
    
    <ServicesServiceDetail 
      v-for="(service, index) in services" 
      :key="service.id" 
      :service="service"
      :is-even="index % 2 === 0"
    />

    <ServicesIncludesList />
    <ServicesUpsellList />

    <CtaBanner 
      heading="Let's scope your project."
      subheading="Not sure which category your business fits into? Send us a message."
    />
  </div>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

useSeoMeta({
  title: 'Web Design Services Nairobi — Timeframe Solutions',
  description: 'Custom websites for Nairobi businesses. Real estate, clinics, car yards, SACCOs, retail. Fixed price, fast delivery.',
  ogTitle: 'Web Design Services Nairobi — Timeframe Solutions',
  ogDescription: 'Custom websites for Nairobi businesses. Fixed price KES 80,000.',
})
</script>
