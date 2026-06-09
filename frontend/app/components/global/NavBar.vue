<template>
  <nav 
    class="sticky top-0 z-50 w-full transition-all duration-300 border-b"
    :class="[
      isScrolled 
        ? 'bg-tf-surface/80 backdrop-blur-md border-tf-border shadow-sm py-2' 
        : 'bg-tf-surface border-transparent py-4'
    ]"
  >
    <div class="mx-auto max-w-[var(--tf-container-max)] px-[var(--tf-container-pad)] lg:px-[var(--tf-container-pad-lg)]">
      <div class="flex h-[var(--tf-nav-height)] items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-tf-primary rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
            T
          </div>
          <span class="text-tf-text-primary font-display text-xl font-bold tracking-tight">
            Timeframe<span class="text-tf-primary">Solutions</span>
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:gap-10">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="text-tf-text-body hover:text-tf-primary font-medium transition-colors text-sm"
            active-class="text-tf-primary"
          >
            {{ link.name }}
          </NuxtLink>
          <UiAppButton variant="accent" :href="url" target="_blank" size="sm" class="font-bold">
            WhatsApp Us
          </UiAppButton>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-tf-surface-alt border border-tf-border lg:hidden transition-colors active:bg-tf-border"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <Icon 
            :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" 
            class="h-5 w-5 text-tf-text-primary"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div 
        v-if="isMenuOpen"
        class="absolute left-0 top-full w-full bg-tf-surface border-b border-tf-border lg:hidden shadow-xl"
      >
        <div class="flex flex-col gap-2 p-6">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="text-tf-text-body font-semibold p-3 rounded-lg hover:bg-tf-surface-alt transition-colors"
            active-class="bg-tf-primary-light text-tf-primary"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
          <div class="mt-4 pt-4 border-t border-tf-border">
            <UiAppButton variant="accent" :href="url" target="_blank" class="w-full justify-center py-4">
              WhatsApp Us
            </UiAppButton>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const { url } = useWhatsApp();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

// Handle scroll shadow
if (process.client) {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 20;
  };
  window.addEventListener('scroll', onScroll);
  onUnmounted(() => window.removeEventListener('scroll', onScroll));
}
</script>
