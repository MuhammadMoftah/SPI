<template>
  <section class="relative h-full">
    <ThemeTitle :title="$t('market_size')" />
    <ThemeTabs
      class="my-6"
      :tabs="[
        $t('market_size'),
        $t('turnover_cost_profitability'),
        $t('companies_employees_salaries'),
      ]"
      :activeTab="activeTab"
      @tabChosen="(e) => (activeTab = e)"
    />
    <SectionsMarketSizeMS v-if="activeTab == $t('market_size')" />
    <SectionsMarketSizeTurnover
      v-if="activeTab == $t('turnover_cost_profitability')"
    />
    <SectionsMarketSizeCompanies
      v-if="activeTab == $t('companies_employees_salaries')"
    />
    <ThemeLowerIdea
      class="absolute xl:-bottom-36 -bottom-56"
      :text="activeText"
    />
  </section>
</template>

<script setup>
const t = useI18n().t;

const activeTab = ref(t("turnover_cost_profitability"));

const activeText = computed(() => {
  if (activeTab.value == t("market_size")) {
    return t("marcket_size_idea");
  }
  if (activeTab.value == t("turnover_cost_profitability")) {
    return t("turnover_idea");
  }
  if (activeTab.value == t("companies_employees_salaries")) {
    return t("companies_idea");
  }
});

// onBeforeMount(async () => {
//   const { data: market_size_1 } = await useChartsData()
//     .getData("market_size_1")
//     .catch((err) => {
//       console.log(err);
//     });
//   const { data: market_size_type } = await useChartsData()
//     .getData("market_size_type")
//     .catch((err) => {
//       console.log(err);
//     });
// });

// useChartsData()
//   .getData("market_size_1")
//   .then(() => {})
//   .catch((err) => {
//     console.log(err);
//   });
// useChartsData()
//   .getData("market_size_type")
//   .then(() => {})
//   .catch((err) => {
//     console.log(err);
//   });

// provide("charts", { data,market_size_1, market_size_type });
provide("charts", {});
// console.log("market_size_1 ", market_size_1, market_size_type);
</script>
