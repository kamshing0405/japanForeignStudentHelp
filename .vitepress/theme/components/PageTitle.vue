<template>
  <section class="study-hero" :style="heroStyle">
    <div class="hero-text">
      <span class="line"></span>
      <div class="text">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "日本への留学計画",
  },
  subtitle: {
    type: String,
    default: "学校を知る",
  },
  bgImage: {
    type: String,
    default: "",
  },
  overlayOpacity: {
    type: Number,
    default: 0.5,
  },
  bgPos: {
    type: String,
    default: "",
  },
});

const heroStyle = computed(() => {
  const overlay = `rgba(0, 0, 0, ${props.overlayOpacity})`;
  return {
    backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${props.bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: props.bgPos,
  };
});
</script>

<style scoped>
.study-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  border-radius: 25px;
  background-color: #374151;
  background-size: cover;
  background-position: center;
  margin-bottom: 40px;
}

.hero-text {
  display: flex;
  align-items: center;
  gap: 20px;
}
.line {
  width: 4px;
  height: 80px;
  background-color: #c40018;
}
.text h1,
.text p {
  margin: 0;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}
.text h1 {
  font-size: 44px;
  line-height: 1.1;
}
.text p {
  font-size: 25px;
  margin-top: 8px;
  opacity: 0.8;
}
</style>
