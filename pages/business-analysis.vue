<template>
  <main>
    <SectionsMarketSizeContainer v-if="activeSideTab.id == 1" />

    <SectionsSectorEcon v-if="activeSideTab.id == 2" />
  </main>
</template>
<script setup>
const activeSideTab = computed(() => {
  return useGlobalStore().activeSideTab;
});
</script>
