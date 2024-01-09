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

    <section class="min-h-[250px] relative">
      <SectionsMarketSizeMS
        :market_size_1="market_size_1"
        :market_size_type="market_size_type"
        v-if="activeTab == $t('market_size') && market_size_1"
      />
      <SectionsMarketSizeTurnover
        :turnover="turnover"
        :cost_structure="cost_structure"
        :profitability="profitability"
        v-if="activeTab == $t('turnover_cost_profitability')"
      />
      <SectionsMarketSizeCompanies
        :no_companies_employees="no_companies_employees"
        :no_employees_avg_salary="no_employees_avg_salary"
        :competitive_landscape="competitive_landscape"
        v-if="activeTab == $t('companies_employees_salaries')"
      />
      <ThemeLoading v-if="loading" />
    </section>
    <ThemeLowerIdea
      class="absolute xl:-bottom-36 -bottom-56"
      :text="activeText"
    />
  </section>
</template>

<script setup>
const t = useI18n().t;
const loading = ref(false);
const activeTab = ref(t("companies_employees_salaries"));

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
let turnover = ref(null);
let cost_structure = ref(null);
let profitability = ref(null);
let no_companies_employees = ref(null);
let no_employees_avg_salary = ref(null);
let competitive_landscape = ref(null);

const marketSize = useChartsData()
  .getData("market_size_1")
  .then((res) => {
    market_size_1.value = res.data.value.data;
    return res;
  })
  .catch((err) => {
    console.log(err);
    return err;
  });

const marcketType = useChartsData()
  .getData("market_size_type")
  .then((res) => {
    market_size_type.value = res.data.value.data;
    return res;
  })
  .catch((err) => {
    console.log(err);
    return err;
  });

Promise.all([marketSize, marcketType])
  .then(() => {
    useChartsData()
      .getData("turnover")
      .then((res) => {
        turnover.value = res.data.value.data;
        return res;
      })
      .catch((err) => {
        return err;
      });
    useChartsData()
      .getData("cost_structure")
      .then((res) => {
        cost_structure.value = res.data.value.data;
        return res;
      })
      .catch((err) => {
        return err;
      });
    useChartsData()
      .getData("profitability")
      .then((res) => {
        profitability.value = res.data.value.data;
        return res;
      })
      .catch((err) => {
        return err;
      });
    useChartsData()
      .getData("no_companies_employees")
      .then((res) => {
        no_companies_employees.value = res.data.value.data;
        return res;
      })
      .catch((err) => {
        return err;
      });
    useChartsData()
      .getData("no_employees_avg_salary")
      .then((res) => {
        no_employees_avg_salary.value = res.data.value.data;
        return res;
      })
      .catch((err) => {
        return err;
      });

    useChartsData()
      .getData("competitive_landscape")
      .then((res) => {
        competitive_landscape.value = res.data.value.data;
        return res;
      })
      .catch((err) => {
        return err;
      });
  })
  .catch((error) => {
    console.error("Promise all:", error);
    loading.value = true;
  });
</script>
