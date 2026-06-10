<template>
  <footer class="bg-tf-text-primary text-tf-text-inverse py-16 lg:py-24">
    <div
      class="mx-auto max-w-[var(--tf-container-max)] px-[var(--tf-container-pad)] lg:px-[var(--tf-container-pad-lg)]"
    >
      <!-- Top: Brand + Nav + Contact -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-tf-text-muted/20"
      >
        <!-- Brand block -->
        <div class="lg:col-span-5 flex flex-col gap-6">
          <NuxtLink to="/" class="inline-block">
            <span
              class="text-tf-text-inverse font-display text-2xl font-bold tracking-tight"
            >
              Timeframe<span class="text-tf-primary">Solutions</span>
            </span>
          </NuxtLink>
          <p class="text-tf-text-muted text-base max-w-xs leading-relaxed">
            We build fast, conversion-focused websites for Kenyan businesses.
            Fixed price. No surprises.
          </p>
          <!-- Social icons -->
          <div class="flex items-center gap-4 mt-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-9 h-9 rounded-full border border-tf-text-muted/30 flex items-center justify-center text-tf-text-muted hover:text-tf-primary hover:border-tf-primary transition-colors"
            >
              <Icon :name="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Company links -->
        <div class="lg:col-span-3">
          <h4
            class="text-tf-text-inverse text-xs font-bold uppercase tracking-[0.18em] mb-6"
          >
            Company
          </h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="text-tf-text-muted text-sm hover:text-tf-primary transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services links -->
        <div class="lg:col-span-2">
          <h4
            class="text-tf-text-inverse text-xs font-bold uppercase tracking-[0.18em] mb-6"
          >
            Services
          </h4>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.name">
              <NuxtLink
                :to="link.path"
                class="text-tf-text-muted text-sm hover:text-tf-primary transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact block -->
        <div class="lg:col-span-2">
          <h4
            class="text-tf-text-inverse text-xs font-bold uppercase tracking-[0.18em] mb-6"
          >
            Get In Touch
          </h4>
          <ul class="space-y-4">
            <li>
              <a
                href="mailto:hello@timeframesolutions.co.ke"
                class="flex items-start gap-3 text-tf-text-muted text-sm hover:text-tf-primary transition-colors group"
              >
                <Icon
                  name="lucide:mail"
                  class="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-tf-primary"
                />
                <span>hello@timeframesolutions.co.ke</span>
              </a>
            </li>
            <li>
              <a
                :href="url"
                target="_blank"
                class="flex items-center gap-3 text-tf-text-muted text-sm hover:text-tf-primary transition-colors group"
              >
                <Icon
                  name="lucide:message-circle"
                  class="w-4 h-4 flex-shrink-0 group-hover:text-tf-primary"
                />
                <span>WhatsApp Us</span>
              </a>
            </li>
            <li>
              <span class="flex items-center gap-3 text-tf-text-muted text-sm">
                <Icon name="lucide:map-pin" class="w-4 h-4 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-tf-text-muted text-xs"
      >
        <p>© {{ currentYear }} Timeframe Solutions. All rights reserved.</p>
        <div class="flex items-center gap-1 text-tf-text-muted/60">
          <span>Crafted with</span>
          <Icon name="lucide:heart" class="w-3 h-3 text-tf-primary mx-1" />
          <span>in Nairobi</span>
        </div>
        <div class="flex gap-6">
          <NuxtLink
            to="/privacy"
            class="hover:text-tf-text-inverse transition-colors"
            >Privacy Policy</NuxtLink
          >
          <NuxtLink
            to="/terms"
            class="hover:text-tf-text-inverse transition-colors"
            >Terms of Service</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { url } = useWhatsApp();

const currentYear = new Date().getFullYear();

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/timeframesolutions",
    icon: "lucide:instagram",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/timeframesolutions",
    icon: "lucide:linkedin",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/timeframesolutions",
    icon: "lucide:twitter",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/timeframesolutions",
    icon: "lucide:facebook",
  },
];

const companyLinks = [
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Business Websites", path: "/services" },
  { name: "Local SEO", path: "/services" },
  { name: "WhatsApp Integration", path: "/services" },
];
</script>
