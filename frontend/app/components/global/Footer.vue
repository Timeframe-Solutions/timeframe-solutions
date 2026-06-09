<template>
  <footer class="bg-tf-text-primary text-tf-text-inverse py-12 lg:py-20">
    <div class="mx-auto max-w-[var(--tf-container-max)] px-[var(--tf-container-pad)] lg:px-[var(--tf-container-pad-lg)]">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <!-- Brand & Tagline -->
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="inline-block mb-4">
            <span class="text-tf-text-inverse font-display text-2xl font-bold tracking-tight">
              Timeframe<span class="text-tf-primary">Solutions</span>
            </span>
          </NuxtLink>
          <p class="text-tf-text-muted text-lg max-w-sm">
            Built in Nairobi. Deployed to the world.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-tf-text-inverse font-display font-semibold mb-6">Explore</h4>
          <ul class="space-y-4">
            <li v-for="link in footerLinks" :key="link.path">
              <NuxtLink 
                :to="link.path"
                class="text-tf-text-muted hover:text-tf-primary transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-tf-text-inverse font-display font-semibold mb-6">Connect</h4>
          <ul class="space-y-4">
            <li>
              <a 
                href="mailto:hello@timeframesolutions.co.ke" 
                class="text-tf-text-muted hover:text-tf-primary transition-colors"
              >
                hello@timeframesolutions.co.ke
              </a>
            </li>
            <li>
              <a 
                :href="url" 
                target="_blank"
                class="text-tf-text-muted hover:text-tf-primary transition-colors"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-tf-text-muted/20 flex flex-col md:flex-row justify-between items-center gap-4 text-tf-text-muted text-sm">
        <p>© 2025 Timeframe Solutions · Nairobi, Kenya</p>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="hover:text-tf-text-inverse">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-tf-text-inverse">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { url } = useWhatsApp();

const footerLinks = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
</script>
