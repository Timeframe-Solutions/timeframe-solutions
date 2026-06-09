<template>
  <UiSectionWrapper :bg="isEven ? 'surface' : 'surface-alt'" py="lg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div>
        <div class="flex items-center gap-4 mb-6">
          <div class="p-3 bg-tf-primary-light rounded-lg text-tf-primary">
            <Icon :name="service.icon" class="w-8 h-8" />
          </div>
          <h2 class="text-3xl font-bold text-tf-text-primary">{{ service.title }}</h2>
        </div>
        <p class="text-lg text-tf-text-body mb-8 leading-relaxed">
          {{ service.body }}
        </p>
      </div>
      
      <div class="bg-tf-surface p-8 rounded-xl border border-tf-border shadow-sm">
        <h3 class="text-xl font-bold text-tf-text-primary mb-6">Key Features</h3>
        <ul class="space-y-4">
          <li v-for="feature in service.featureList" :key="feature" class="flex items-start gap-3">
            <Icon name="lucide:check-circle-2" class="w-6 h-6 text-tf-success flex-shrink-0" />
            <span class="text-tf-text-body">{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
import type { ServiceVertical } from '~/app/types'

defineProps<{
  service: ServiceVertical
  isEven: boolean
}>()
</script>
