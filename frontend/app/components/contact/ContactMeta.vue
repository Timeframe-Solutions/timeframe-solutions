<template>
  <SectionWrapper bg="surface-alt" py="sm" class="border-y border-tf-border">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div class="flex items-center gap-3">
          <Icon name="lucide:clock" class="h-6 w-6 text-tf-primary" />
          <div>
            <span class="block text-xs font-bold text-tf-text-muted uppercase tracking-wider">Response Time</span>
            <span class="text-tf-text-primary font-bold">Within 24 hours</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <Icon name="lucide:mail" class="h-6 w-6 text-tf-primary" />
          <div>
            <span class="block text-xs font-bold text-tf-text-muted uppercase tracking-wider">Email</span>
            <span class="text-tf-text-primary font-bold">hello@timeframesolutions.co.ke</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Icon name="lucide:map-pin" class="h-6 w-6 text-tf-primary" />
        <div>
          <span class="block text-xs font-bold text-tf-text-muted uppercase tracking-wider">Location</span>
          <span class="text-tf-text-primary font-bold">Nairobi, Kenya</span>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
// Contact Meta component
</script>
