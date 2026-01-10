<template>
  <div
    class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
  >
    <svg
      viewBox="0 0 1000 400"
      class="w-full h-full absolute top-0 left-0"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(59, 130, 246, 0)" />
          <stop offset="20%" stop-color="rgba(59, 130, 246, 0.5)" />
          <stop offset="100%" stop-color="rgba(239, 68, 68, 0.8)" />
        </linearGradient>
      </defs>

      <path
        :d="pathDefinition"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-dasharray="8,8"
        class="text-slate-300 dark:text-slate-700 opacity-40 transition-colors duration-500"
      />

      <path
        :d="pathDefinition"
        fill="none"
        stroke="url(#lineGradient)"
        stroke-width="3"
        stroke-linecap="round"
        class="transition-all duration-2500 ease-out"
        :class="startAnim ? 'opacity-100' : 'opacity-0'"
        :style="{
          strokeDasharray: 1300,
          strokeDashoffset: startAnim ? 0 : 1300,
        }"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const startAnim = ref(false);

const props = defineProps({
  path: {
    type: String,
    default: "M-50,200 C300,-100 700,500 1050,200", // 默认 S 轨迹
  },
});

const pathDefinition = "M0,200 C300,-50 700,450 1000,200";

onMounted(() => {
  // 对应 React 的 useEffect
  setTimeout(() => {
    startAnim.value = true;
  }, 100);
});
</script>

<style scoped>
@keyframes fly {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}
</style>
