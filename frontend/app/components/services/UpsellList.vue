<template>
  <UiSectionWrapper bg="surface-alt" py="lg">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl font-bold text-tf-text-primary mb-4">Need more? We quote separately.</h2>
      <p class="text-tf-text-body mb-10">
        For businesses that require advanced functionality or ongoing support, we offer separate scoping for the following:
      </p>
      <div class="grid grid-cols-1 gap-4 text-left">
        <div 
          v-for="item in upsells" 
          :key="item.label"
          class="flex items-center gap-4 p-4 bg-tf-surface rounded-lg border border-tf-border"
        >
          <Icon name="lucide:zap" class="w-5 h-5 text-tf-accent flex-shrink-0" />
          <span class="text-tf-text-body font-medium">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import { upsells } from '~/data/services-page'
</script>
