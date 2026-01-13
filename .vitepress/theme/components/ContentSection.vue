<script setup lang="ts">
import { computed } from "vue";
import type { Section } from "../components/types";

const props = defineProps<{
  section: Section;
  index: number;
}>();

const isEven = computed(() => props.index % 2 === 0);
</script>

<template>
  <section
    :id="section.id"
    class="py-20 md:py-32 border-b border-stone-200 last:border-0 relative overflow-hidden"
  >
    <!-- Decorative numbering background -->
    <div
      class="absolute top-10 text-[12rem] md:text-[20rem] font-serif font-black text-stone-100 select-none -z-10 opacity-60 leading-none"
      :class="isEven ? 'left-4' : 'right-4'"
    >
      0{{ index + 1 }}
    </div>

    <div class="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
      <div
        class="flex flex-col gap-12 md:gap-20 items-center"
        :class="isEven ? 'md:flex-row' : 'md:flex-row-reverse'"
      >
        <!-- Text Content -->
        <div class="flex-1 space-y-8">
          <header class="space-y-4">
            <div
              class="flex items-center gap-3 text-red-500 font-bold uppercase tracking-widest text-sm"
            >
              <span class="w-8 h-px bg-red-500 inline-block"></span>
              Reason 0{{ index + 1 }}
            </div>
            <h3
              class="text-3xl md:text-5xl font-serif font-bold text-sumi leading-snug"
            >
              {{ section.title }}
            </h3>
            <p class="text-xl text-stone-500 font-serif italic">
              {{ section.subtitle }}
            </p>
          </header>

          <div class="prose prose-stone prose-lg leading-relaxed font-sans">
            <p
              v-for="(paragraph, i) in section.content.split('\n\n')"
              :key="i"
              class="mb-6"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Visual/Image Area -->
        <div class="flex-1 w-full">
          <div class="relative group">
            <!-- Image Frame Effect -->
            <div
              class="absolute inset-0 border-2 border-japan-indigo transform transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
              :class="
                isEven
                  ? 'translate-x-4 translate-y-4'
                  : '-translate-x-4 translate-y-4'
              "
            ></div>

            <div class="relative aspect-4/3 overflow-hidden bg-stone-200">
              <img
                v-if="section.image"
                :src="section.image"
                :alt="section.title"
                class="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-stone-100 text-stone-300"
              >
                <span class="font-serif text-4xl">Image</span>
              </div>

              <!-- Overlay Gradient -->
              <div
                class="absolute inset-0 bg-linear-to-t from-japan-indigo/20 to-transparent opacity-60"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
