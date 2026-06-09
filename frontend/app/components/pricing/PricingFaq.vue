<template>
  <SectionWrapper bg="surface-alt" py="lg">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-tf-text-primary mb-12 text-center">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faq" 
          :key="index"
          class="bg-tf-surface rounded-xl border border-tf-border overflow-hidden"
        >
          <button 
            @click="activeIndex = activeIndex === index ? null : index"
            class="w-full flex items-center justify-between p-6 text-left hover:bg-tf-surface-alt transition-colors"
          >
            <span class="text-lg font-bold text-tf-text-primary">{{ item.question }}</span>
            <Icon 
              name="lucide:chevron-down" 
              class="w-5 h-5 text-tf-primary transition-transform duration-300"
              :class="{ 'rotate-180': activeIndex === index }"
            />
          </button>
          <div 
            v-show="activeIndex === index"
            class="px-6 pb-6 text-tf-text-body leading-relaxed"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { faq } from '~/data/pricing-faq'

const activeIndex = ref<number | null>(0)
</script>
