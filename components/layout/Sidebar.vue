<template>
  <aside class="h-screen bg-theme-indigo">
    <figure class="grid h-20 place-content-center">
      <img src="@/static/logo.png" class="w-32" alt="" />
    </figure>

    <section class="grid gap-4 px-1 mt-2">
      <label for="" class="grid gap-1">
        <p class="text-sm text-slate-50">
          {{ $t("select_sector") }}
        </p>
        <select name="main sector" class="input" id="">
          <option :key="el.id" :value="el.id" v-for="el in sectors">{{ el.label }}</option>
        </select>
      </label>

      <label for="" class="grid gap-1">
        <p class="text-sm text-slate-50">{{ $t("select_sector") }}</p>
        <select name="" class="input" id="">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
          <option value="">Option 4</option>
        </select>
      </label>
    </section>

    <section class="flex flex-col mt-5 overflow-auto divide-y h-[63vh] divide-white/20 small_scroll">
      <button v-for="el in sideFilters" :title="el.label"
        class="flex items-center font-light gap-2 text-sm hover:bg-white/10 duration-300 capitalize ms-3 hover:ps-2 min-h-[37px] text-slate-50">
        <component class="w-4 h-4" :is="el.icon" />
        <span class="w-full truncate text-start"> {{ el.label }}</span>
      </button>

    </section>
  </aside>
</template>

<script setup>
//Icons
import { IconsPieChart, IconsBarChart, IconsMultiUsers } from "#components";

const sectors = useSidebarSectors()


const app = useNuxtApp();
const t = app.$i18n.t;

// console.log("app ", $router);
const sideFilters = computed(() => {
  return [
    {
      label: t("market_size"),
      icon: IconsPieChart,
      value: "",
    },
    {
      label: t("sector_economics"),
      icon: IconsBarChart,
      value: "",
    },
    {
      label: t("sector_demographic"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("sector_technology"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("sector_regulations"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("government_direction"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("special_economic_zones"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("climate_weather"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("political_analysis"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("global_foreign_investment_trend"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("financial_analysis_and_benchmarking"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("global_indices"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("capital_market"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      label: t("cost_of_doing_business"),
      icon: IconsMultiUsers,
      value: "",
    },
  ];
});
</script>
