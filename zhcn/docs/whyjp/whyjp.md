---
layout: page
---

<script setup>
import japanBg from '../../../images/japan.webp'
import { GraduationCap, CheckCircle2, Globe, Briefcase, ArrowRight } from 'lucide-vue-next';
import { reasons } from '../../../.vitepress/theme/components/contentZhcn';

const scrollToSection = (id) => {
  // 取得目標元素
  const element = document.getElementById(id);
  
  if (element) {
    // 執行平滑捲動
    element.scrollIntoView({ 
      behavior: 'smooth', // 平滑效果
      block: 'start'      // 捲動到元素頂部
    });
  } else {
    console.warn(`Element with id "${id}" not found.`);
  }
};
</script>

<div class='flex justify-center p-5 bg-[#f9f8f4] dark:bg-slate-950' >
<div class='max-w-5xl'>
<div class=" mt-25">
  <div class="mb-8">
    <span class=" text-white bg-red-600 dark:bg-red-500/50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
      DISCOVER YOUR FUTURE
    </span>
  </div>
  <div class="fontchange text-3xl md:text-5xl leading-[1.1] mb-2;
  letter-spacing: -0.02em">
    为何在此时刻，选择日本留学？
  </div>
  <div class="fontchange text-lg md:text-xl dark:text-gray-400 text-gray-500 leading-relaxed mb-12 mt-5">
    <p>日本，是一个传统与创新交汇的国度</p>
    <p>您将获得超越单纯“学习”、足以改变人生的体验</p>
  </div>
</div>

<div class='glass w-auto mb-15'>
    <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm mx-auto transition-colors duration-300">
        <h3 class="text-lg text-center text-gray-900 dark:text-white transition-colors duration-300">
            <p class=" text-sky-600 text-[0.8rem] font-bold py-1 uppercase text-center ">
            WHY JAPAN?
            </p>
            <p class='text-2xl font-bold tracking-wider'>选择日本的<span class="text-rose-500"> 4 个理由</span></p>
            <p class="text-slate-500 py-3">
            作为对您未来的投资，我们将为您介绍日本留学为何是您的最佳选择。
            </p>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
            <div @click="scrollToSection('education')">
                <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                    <div class=' absolute right-10 top-9 opacity-0  group-hover:opacity-100 duration-500 transition-all  group-hover:translate-x-4'><ArrowRight class="w-6 h-6" /></div>
                    <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 dark:group-hover:bg-red-500/50 group-hover:text-white transition-colors duration-300">
                    <GraduationCap class="w-6 h-6" />
                    </div>
                    <p class=" font-bold text-md mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">教育水平</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    世界公认的研究环境：培育出多位诺贝尔奖得主
                    </p>
                </div>
            </div>
            <div @click="scrollToSection('culture')">
                <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-600 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                    <div class=' absolute right-10 top-9 opacity-0  group-hover:opacity-100 duration-500 transition-all  group-hover:translate-x-4'><ArrowRight class="w-6 h-6" /></div>
                    <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 dark:group-hover:bg-red-500/50 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 class="w-6 h-6" />
                    </div>
                    <p class=" font-bold text-md mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">文化体验</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    跨越时空的文化体验：传统与现代的完美交融
                    </p>
                </div>
            </div>
            <div @click="scrollToSection('safety')">
                <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-600 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                    <div class=' absolute right-10 top-9 opacity-0  group-hover:opacity-100 duration-500 transition-all  group-hover:translate-x-4'><ArrowRight class="w-6 h-6" /></div>
                    <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 dark:group-hover:bg-red-500/50 group-hover:text-white transition-colors duration-300">
                    <Globe class="w-6 h-6" />
                    </div>
                    <p class=" font-bold text-md mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">治安・便利性</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    全球罕见的安全环境，以及精准无比的基础设施
                    </p>
                </div>
            </div>
            <div @click="scrollToSection('career')">
                <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-600 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                    <div class=' absolute right-10 top-9 opacity-0  group-hover:opacity-100 duration-500 transition-all  group-hover:translate-x-4'><ArrowRight class="w-6 h-6" /></div>
                    <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 dark:group-hover:bg-red-500/50 group-hover:text-white transition-colors duration-300">
                    <Briefcase class="w-6 h-6" />
                    </div>
                    <p class=" font-bold text-md mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">职业发展</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    立足世界第四大经济强国，成就您的国际视野
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class='glass w-auto mb-25'>
    <div class="bg-[#fcfaf2] bg-seigaiha dark:bg-none dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm mx-auto transition-colors duration-300">
    <div class="relative">
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-red-500/20 hidden md:block -translate-x-1/2"></div>
        <ContentSection 
            v-for="(reason, index) in reasons" 
            :key="reason.id" 
            :section="reason" 
            :index="index" 
        />
    </div>
    </div>
</div>

</div>
</div>
