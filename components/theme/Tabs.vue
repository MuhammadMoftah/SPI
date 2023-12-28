<template>
  <ul
    class="flex items-center w-full h-12 overflow-hidden capitalize rounded-b-2xl"
  >
    <li
      v-for="el in tabs"
      class="grid w-full h-full text-xs text-center cursor-pointer place-content-center hover:opacity-80"
      :class="
        InnerActiveTab == el
          ? 'bg-theme-indigo text-slate-50 font-medium'
          : 'bg-theme-mid-blue text-theme-indigo '
      "
      @click="(InnerActiveTab = el), $emit('tabChosen', el)"
    >
      {{ el }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(["activeTab", "tabs"]);
const InnerActiveTab = ref(props.activeTab);
</script>
