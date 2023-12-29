<template>
  <div>
    <section class="relative w-full bg-theme-indigo z-0 h-[637px]">
      <NuxtImg
        :placeholder="[1536, 637]"
        src="/imgs/home-cover.png"
        class="absolute top-0 left-0 z-0 object-cover w-full h-full"
        alt="home-cover"
        loading="lazy"
      />
      <article
        class="absolute z-10 grid max-w-lg gap-6 left-5 2xl:left-64 lg:left-20 top-56"
      >
        <p class="text-slate-50" style="text-shadow: 1px 1px 1px black">
          {{
            activeText == "government"
              ? $t("cover_text_government")
              : $t("cover_text_private")
          }}
        </p>
        <aside class="flex gap-6">
          <button
            @click="activeText = 'government'"
            class="w-40 font-normal capitalize rounded-full h-9 btn hover:bg-theme-indigo hover:text-white"
            :class="
              activeText == 'government'
                ? 'bg-theme-indigo text-white '
                : 'bg-theme-mid-blue text-theme-indigo'
            "
          >
            {{ $t("government") }}
          </button>

          <button
            @click="activeText = 'private'"
            class="w-40 font-normal capitalize rounded-full h-9 btn hover:bg-theme-indigo hover:text-white"
            :class="
              activeText == 'private'
                ? 'bg-theme-indigo text-white '
                : 'bg-theme-mid-blue text-theme-indigo'
            "
          >
            {{ $t("private") }}
          </button>
        </aside>
      </article>
    </section>

    <aside
      class="grid max-w-6xl grid-cols-4 gap-8 py-6 mx-auto bg-white/0 grayscale"
    >
      <NuxtImg
        v-for="n in 4"
        :placeholder="[380]"
        :src="`/imgs/partners/${n}.png`"
        :alt="`partner${n}`"
        loading="lazy"
      />
    </aside>

    <aside class="py-7 bg-theme-indigo">
      <div class="flex items-center max-w-6xl gap-5 mx-auto text-slate-50">
        <img src="@/static/logo.png" class="h-5" alt="" />
        <p>{{ $t("footer_p1") }}</p>
        <p class="ms-auto">{{ $t("footer_p2") }}</p>
      </div>
    </aside>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
const activeText = ref("private");
</script>
