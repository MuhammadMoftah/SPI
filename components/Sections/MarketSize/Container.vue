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
    <SectionsMarketSizeMS
      :market_size_1="market_size_1"
      :market_size_type="market_size_type"
      v-if="activeTab == $t('market_size')"
    />
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

const activeTab = ref(t("market_size"));

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
let market_size_1 = ref(null);
let market_size_type = ref(null);

useChartsData()
  .getData("market_size_1")
  .then((res) => {
    market_size_1.value = res.data.value.data;
  })
  .catch((err) => {
    console.log(err);
  });

useChartsData()
  .getData("market_size_type")
  .then((res) => {
    market_size_type.value = res.data.value.data;
  })
  .catch((err) => {
    console.log(err);
  });
</script>
