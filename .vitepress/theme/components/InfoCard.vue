<script setup>
import { computed } from "vue";
// 1. 確保你已經執行了 pnpm add lucide-vue-next
import { ArrowRight, ChevronRight } from "lucide-vue-next";

const props = defineProps({
  icon: { type: [Object, Function], required: true }, // 改為支援組件類型
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  items: { type: Array, default: () => [] },
  season: { type: String, required: true },
  seasonStyles: {
    type: Object,
    default: () => ({
      spring: {
        bgGradient: "bg-rose-950/40",
        hoverBg: "hover:bg-rose-900/60",
        hoverBorder: "hover:border-rose-500/50",
        decoration: "from-rose-500/20",
        iconColor: "text-rose-400",
        hoverText: "group-hover:text-rose-300",
        bullet: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]",
        label: "春",
      },
      // 建議補上預設，防止找不到 season 時報錯
    }),
  },
});

// 2. 增加安全檢查，防止 styles 變成 undefined 導致模板崩潰
const styles = computed(() => {
  return props.seasonStyles[props.season] || props.seasonStyles["spring"];
});
</script>

<template>
  <div
    v-if="styles"
    :class="[
      'group relative backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden',
      styles.bgGradient,
      styles.hoverBg,
      styles.hoverBorder,
    ]"
  >
    <div
      :class="[
        'absolute top-0 right-0 w-32 h-32 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0',
        styles.decoration,
      ]"
    />

    <div
      class="absolute -bottom-6 -right-2 text-9xl font-serif text-white/[0.03] pointer-events-none select-none group-hover:text-white/[0.08] transition-colors duration-700"
    >
      {{ styles.label }}
    </div>

    <div class="flex items-start justify-between mb-8 relative z-10">
      <div>
        <div
          :class="[
            'mb-4 transform group-hover:scale-110 transition-transform duration-500 origin-left',
            styles.iconColor,
          ]"
        >
          <component :is="icon" :size="32" stroke-width="1.5" />
        </div>
        <h3
          :class="[
            'text-2xl font-bold text-white tracking-widest transition-colors duration-300',
            styles.hoverText,
          ]"
        >
          {{ title }}
        </h3>
        <p
          class="text-xs text-white/40 mt-2 font-sans tracking-widest uppercase"
        >
          {{ subtitle }}
        </p>
      </div>

      <div
        :class="[
          'opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100',
          styles.iconColor,
        ]"
      >
        <ArrowRight :size="24" />
      </div>
    </div>

    <div
      class="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mb-8 group-hover:from-white/40 transition-all duration-500"
    />

    <ul class="list-none p-0 m-0 space-y-4 relative z-10">
      <li v-for="(item, index) in items" :key="`${season}-${index}`">
        <a
          href="#"
          @click.prevent
          class="flex items-center text-base text-white/60 hover:text-white no-underline transition-all duration-300 group/link py-1"
        >
          <span
            :class="[
              'w-2 h-2 rounded-full mr-4 opacity-0 scale-0 group-hover/link:opacity-100 group-hover/link:scale-100 transition-all duration-300',
              styles.bullet,
            ]"
          ></span>

          <span class="relative">
            {{ item }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white/60 transition-all duration-300 group-hover/link:w-full"
            ></span>
          </span>

          <ChevronRight
            :size="16"
            :class="[
              'ml-auto opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300',
              styles.iconColor,
            ]"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 保持原樣 */
.font-serif {
  font-family: "YuMincho", "Hiragino Mincho ProN", "MS PMincho", serif;
}
</style>
