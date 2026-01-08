# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

<div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-linear-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] p-4 rounded-2xl font-bold shadow-xl">
  
  <div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    長所・短所
  </div>

  <div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    好き・嫌い
  </div>

  <div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    専門・能力
  </div>

  <div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    興味
  </div>

  <div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    将来の夢
  </div>
<div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    適性
  </div>
  <div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    価値観
  </div>  <div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    人生観
  </div>  
   <div class="flex items-center justify-center text-white h-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
    仕事観
  </div>
</div>

<div class="grid grid-cols-3 gap-4 p-4 bg-linear-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] rounded-2xl font-bold shadow-xl h-76">

  <div class="flex items-center justify-center text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm h-full p-4">
    自己分析
  </div>

  <div class="flex flex-col gap-3 h-full">
    <div class="flex-1 flex items-center justify-center text-white p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
      業界研究
    </div>
    <div class="flex-1 flex items-center justify-center text-white p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
      企業研究
    </div>
    <div class="flex-1 flex items-center justify-center text-white p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm">
      職種研究
    </div>
  </div>

  <div class="flex items-center justify-center text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm h-full p-4">
    インターン
  </div>

</div>
