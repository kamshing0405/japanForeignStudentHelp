---
layout: page
pageClass: custom-home-bg
---

<script setup>

import { School, Plane, Notebook, BriefcaseBusiness, ArrowRight } from 'lucide-vue-next';

import { useRouter, withBase } from 'vitepress'
const router = useRouter()

const startJourney = () => {
    router.go('japanForeignStudentHelp/docs/whyjp/whyjp')
}

const support = () => {
    router.go('japanForeignStudentHelp/docs/支援/支援・情報サイト')
}
const education = () => {
    router.go('japanForeignStudentHelp/docs/学校について/01.日本の教育制度')
}

const entercountry = () => {
    router.go('japanForeignStudentHelp/docs/入国/01.在留資格')
}

const life = () => {
    router.go('japanForeignStudentHelp/docs/生活ガイド/01.住民登録・医療保険')
}

const career = () => {
    router.go('japanForeignStudentHelp/docs/卒業後の進路/01.就職活動')
}
</script>

<div class='relative w-full flex flex-col items-center justify-center overflow-hidden pt-55'>
  <div class='absolute inset-0 z-0 transition-colors duration-500"'></div>
  <div class='dark:opacity-0 absolute top-25 opacity-35 sm:top-0'>
  <img src='/images/intro_sakura.webp'>
  </div>
  <div class='opacity-0 dark:opacity-35 absolute top-5 right-0 sm:top-0'>
  <img src='/images/hujisan.png' class='w-250'>
  </div>
  <AirlineAnimation />
    <!-- Main -->
  <div class='flex flex-col justify-center items-center text-center'>
    <div class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs tracking-widest font-bold rounded-full shadow-sm">
    <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
    JAPAN STUDY GUIDE
    </div>
    <div class="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-8 drop-shadow-sm font-sans transition-colors fontchange text-gradient">
      日本留学ガイド
    </div>
    <div class="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 drop-shadow-sm font-sans transition-colors fontchange">
      外国人留学生のために
    </div>
    <div class="text-md md:text-xl tracking-tight text-slate-900 dark:text-white mb-8 drop-shadow-sm  transition-colors ">
      計画・入国・生活・進路・支援情報
    </div>
    <div class='flex justify-center'>
      <div 
        @click="startJourney"
        class="group relative inline-flex items-center justify-center px-5 py-2 bg-blue-900/80 hover:bg-blue-700 text-white text-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-bold cursor-pointer">
        <span>はじめに</span>
      </div>
     <div 
        @click="support"
        class="group ml-5 relative inline-flex items-center justify-center px-5 py-2 bg-slate-300 hover:bg-slate-300/80 text-zinc-600 text-sm rounded-full shadow-xl hover:shadow-1xl transition-all duration-300 font-bold cursor-pointer ">
        <span>社会的支援</span>
      </div>
    </div>
  </div>

  <!-- feature -->
  <div class=' w-4/5 max-w-7xl m-15'>
    <div class=" glass p-8 rounded-2xl dark:border-slate-800 shadow-sm mx-auto transition-colors duration-300">
        <!-- feature -->
        <div class="grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-4! gap-6 mt-7">
            <div @click="education">
                <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                    <div class=' absolute right-10 top-9 opacity-0  group-hover:opacity-100 duration-500 transition-all  group-hover:translate-x-4'><ArrowRight class="w-6 h-6" /></div>
                    <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 dark:group-hover:bg-red-500/50 group-hover:text-white transition-colors duration-300">
                    <School class="w-6 h-6" />
                    </div>
                    <p class=" font-bold text-md mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">日本の学校</p>
                    <span class='block border border-red-600 w-auto my-1'></span>
                    <a @click.stop href='docs/学校について/01.日本の教育制度' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md mt-2 duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>在留資格</p></a>
                    <a @click.stop href='docs/学校について/02.日本の学校紹介' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>学校の種類</p></a>
                    <a @click.stop href='docs/学校について/04.留学費用' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>費用・奨学金</p></a>
                </div>
            </div>
            <div @click="entercountry">
                <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                    <div class=' absolute right-10 top-9 opacity-0  group-hover:opacity-100 duration-500 transition-all  group-hover:translate-x-4'><ArrowRight class="w-6 h-6" /></div>
                    <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 dark:group-hover:bg-red-500/50 group-hover:text-white transition-colors duration-300">
                    <Plane class="w-6 h-6" />
                    </div>
                    <p class=" font-bold text-md mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">入国</p>
                    <span class='block border border-red-600 w-auto my-1'></span>
                    <a @click.stop href='docs/入国/01.在留資格' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md mt-2 duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>在留資格</p></a>
                    <a @click.stop href='docs/入国/02.来日前の準備' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>来日前の準備</p></a>
                    <a @click.stop href='docs/入国/03.空港での流れ' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>空港での流れ</p></a>
                </div>
            </div>
            <div @click="life">
                <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                    <div class=' absolute right-10 top-9 opacity-0  group-hover:opacity-100 duration-500 transition-all  group-hover:translate-x-4'><ArrowRight class="w-6 h-6" /></div>
                    <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 dark:group-hover:bg-red-500/50 group-hover:text-white transition-colors duration-300">
                    <Notebook class="w-6 h-6" />
                    </div>
                    <p class=" font-bold text-md mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">生活ガイド</p>
                    <span class='block border border-red-600 w-auto my-1'></span>
                    <a @click.stop href='docs/生活ガイド/01.住民登録・医療保険' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md mt-2 duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>市役所の流れ</p></a>
                    <a @click.stop href='docs/生活ガイド/03.住まい' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>生活・交通・仕事</p></a>
                    <a @click.stop href='docs/生活ガイド/04.緊急対応' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>緊急対応</p></a>
                </div>
            </div>
            <div @click="career">
                <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                    <div class=' absolute right-10 top-9 opacity-0  group-hover:opacity-100 duration-500 transition-all  group-hover:translate-x-4'><ArrowRight class="w-6 h-6" /></div>
                    <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 dark:group-hover:bg-red-500/50 group-hover:text-white transition-colors duration-300">
                    <BriefcaseBusiness class="w-6 h-6" />
                    </div>
                    <p class=" font-bold text-md mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">日本の卒業後の進路</p>
                    <span class='block border border-red-600 w-auto my-1'></span>
                    <a @click.stop href='docs/卒業後の進路/01.就職活動' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md mt-2 duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>就職活動</p></a>
                    <a @click.stop href='docs/卒業後の進路/04.採用選考の流れ' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>採用選考</p></a>
                    <a @click.stop href='docs/卒業後の進路/06.帰国・海外就職' class='flex p-2 hover:bg-gray-100 dark:hover:bg-slate-800 items-center rounded-md duration-30 '><span class='inline-block rounded-lg mr-2 w-2 h-2 bg-sky-500'></span><p class='font-bold'>帰国・海外就職</p></a>
                </div>
            </div>
        </div>
    </div>

</div>
</div>
