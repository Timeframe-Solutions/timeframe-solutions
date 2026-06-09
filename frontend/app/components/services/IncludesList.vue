<template>
  <UiSectionWrapper bg="surface" py="lg">
    <div class="max-w-4xl mx-auto">
      <UiAppCard class="border-t-4 border-tf-primary shadow-lg" padding="lg">
        <h2 class="text-2xl md:text-3xl font-bold text-tf-text-primary mb-8 text-center">
          Everything in the KES 80,000 package
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <div v-for="item in inclusions" :key="item.label" class="flex items-center gap-3">
            <Icon name="lucide:check" class="w-5 h-5 text-tf-success flex-shrink-0" />
            <span class="text-tf-text-body font-medium">{{ item.label }}</span>
          </div>
        </div>
      </UiAppCard>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import { inclusions } from '~/data/services-page'
</script>
