<template>
  <div>
    <UiPageHero 
      heading="Privacy Policy"
      subheading="Last updated: June 18, 2026. Your privacy is important to us."
    />
    <UiSectionWrapper bg="surface">
      <div class="prose prose-slate max-w-3xl mx-auto text-tf-text-body">
        <p class="text-lg leading-relaxed mb-6">
          At Timeframe Solutions, we value the trust you place in us. This Privacy Policy describes how we collect, use, and share information when you visit our website or use our services.
        </p>

        <h2 class="text-2xl font-bold text-tf-text-primary mt-8 mb-4">1. Information We Collect</h2>
        <p class="mb-4">
          We collect information you provide directly to us when requesting information, contact, or scheduling a consultation:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Contact details:</strong> such as email address, name, phone number, and organization name.</li>
          <li><strong>Communications:</strong> messages, inquiries, and files you send via our forms or WhatsApp links.</li>
        </ul>

        <h2 class="text-2xl font-bold text-tf-text-primary mt-8 mb-4">2. How We Use Your Information</h2>
        <p class="mb-4">
          We use the information we collect to:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Provide, maintain, and improve our website and services.</li>
          <li>Respond to inquiries, questions, and feedback.</li>
          <li>Send administrative or project-related updates.</li>
        </ul>

        <h2 class="text-2xl font-bold text-tf-text-primary mt-8 mb-4">3. Data Sharing and Security</h2>
        <p class="mb-6">
          We do not sell, trade, or share your personal information with third parties. We use industry-standard administrative, technical, and physical security measures to protect your data.
        </p>

        <h2 class="text-2xl font-bold text-tf-text-primary mt-8 mb-4">4. Contact Us</h2>
        <p class="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p class="font-bold text-lg">
          Email: <a href="mailto:hello@timeframesolutions.co.ke" class="text-tf-primary hover:underline">hello@timeframesolutions.co.ke</a>
        </p>
      </div>
    </UiSectionWrapper>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — Timeframe Solutions',
  description: 'Learn how Timeframe Solutions collects, uses, and protects your personal data.',
})
</script>
