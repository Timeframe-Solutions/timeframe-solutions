<template>
  <div v-if="project">
    <WorkCaseStudyHero 
      :title="project.title"
      :industry="project.industry"
      :one-liner="project.oneLiner"
    />
    
    <WorkCaseStudyMeta 
      :industry="project.industry"
      :pages="project.pages"
      :features="project.features.length + ' key features'"
    />

    <WorkCaseStudyScreenshots 
      :cover-image="project.coverImage"
      :title="project.title"
    />

    <WorkCaseStudyFeatures :features="project.features" />

    <!-- Interactive Footer Mockup Section -->
    <UiSectionWrapper bg="surface-alt" py="lg" class="border-t border-b border-tf-border">
      <div class="max-w-4xl mx-auto">
        <div class="mb-10 text-center">
          <span class="text-tf-primary text-xs font-bold uppercase tracking-widest">Interactive Design Mockup</span>
          <h3 class="text-3xl font-bold text-tf-text-primary mt-2">Ivory Hotel Footer</h3>
          <p class="text-tf-text-muted mt-2 text-sm max-w-lg mx-auto">
            A live preview of the footer layout built for Ivory Hotel, incorporating luxury typography and clean structured links.
          </p>
        </div>

        <!-- Ivory Hotel Mockup Footer Container -->
        <div class="bg-[#12110F] text-[#F3EFE9] rounded-3xl p-8 md:p-12 shadow-2xl border border-[#2A2620] overflow-hidden relative">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#C5A880] via-[#E5D3B3] to-[#C5A880]"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-[#2A2620]">
            <!-- Hotel Brand -->
            <div class="md:col-span-6 space-y-4">
              <div class="text-2xl font-serif font-semibold tracking-wide text-[#E5D3B3]">
                IVORY <span class="font-sans text-xs uppercase tracking-[0.3em] ml-1 text-[#C5A880]">Hotel & Suites</span>
              </div>
              <p class="font-sans text-xs text-[#A8A297] leading-relaxed max-w-sm">
                A sanctuary of quiet luxury and refinement, offering bespoke experiences in the heart of the city. Experience world-class hospitality, gourmet dining, and absolute comfort.
              </p>
            </div>

            <!-- Links list -->
            <div class="md:col-span-6 space-y-4">
              <h4 class="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A880] font-bold">
                Quick Navigation
              </h4>
              <ul class="font-sans grid grid-cols-2 gap-3 text-xs">
                <li>
                  <a href="#" class="text-[#A8A297] hover:text-[#E5D3B3] transition-colors flex items-center gap-1.5">
                    <span class="w-1 h-1 rounded-full bg-[#C5A880]"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-[#A8A297] hover:text-[#E5D3B3] transition-colors flex items-center gap-1.5">
                    <span class="w-1 h-1 rounded-full bg-[#C5A880]"></span>
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="#" class="text-[#A8A297] hover:text-[#E5D3B3] transition-colors flex items-center gap-1.5">
                    <span class="w-1 h-1 rounded-full bg-[#C5A880]"></span>
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href="#" class="text-[#A8A297] hover:text-[#E5D3B3] transition-colors flex items-center gap-1.5">
                    <span class="w-1 h-1 rounded-full bg-[#C5A880]"></span>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" class="text-[#A8A297] hover:text-[#E5D3B3] transition-colors flex items-center gap-1.5">
                    <span class="w-1 h-1 rounded-full bg-[#C5A880]"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-[#A8A297] hover:text-[#E5D3B3] transition-colors flex items-center gap-1.5">
                    <span class="w-1 h-1 rounded-full bg-[#C5A880]"></span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Footer Bar -->
          <div class="font-sans pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#A8A297]">
            <p>© 2026 Ivory Hotel & Suites. All rights reserved.</p>
            <div class="flex gap-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
              <span>•</span>
              <a href="#" class="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </UiSectionWrapper>

    <WorkCaseStudyDemonstrates :body="project.demonstrates" />

    <CtaBanner 
      :heading="'Need a hotel or lodge website?'"
      subheading="Room showcases, dining menus, direct booking requests — KES 80,000."
    />
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/portfolio'

const project = projects.find(p => p.slug === 'ivory-hotel')

useSeoMeta({
  title: project?.title + ' — Case Study | Timeframe Solutions',
  description: project?.oneLiner,
  ogTitle: project?.title,
  ogDescription: project?.oneLiner
})
</script>
