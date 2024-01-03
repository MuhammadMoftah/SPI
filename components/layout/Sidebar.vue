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

        <select
          name="main sector"
          @change="
            useGlobalStore().setSector($event.target.value),
              console.log($event.target.value)
          "
          :value="useGlobalStore().activeSector"
          class="input"
        >
          <option :key="el.id" :value="el.id" v-for="el in sectors">
            {{ el.label }}
          </option>
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

    <section
      class="flex flex-col h-[calc(100vh_-_260px)] mt-5 overflow-auto divide-y divide-white/20 small_scroll"
    >
      <button
        @click="useGlobalStore().activeSideTab = el"
        v-for="el in sideFilters"
        :title="el.label"
        class="flex items-center font-light gap-2 text-sm hover:bg-white/10 duration-300 capitalize ms-3 hover:ps-2 min-h-[37px] text-slate-50"
        :class="
          useGlobalStore().activeSideTab.id == el.id ? 'ps-2 bg-white/10' : ''
        "
      >
        <component class="w-4 h-4" :is="el.icon" />
        <span class="w-full truncate text-start"> {{ el.label }}</span>
      </button>
    </section>
  </aside>
</template>

<script setup>
//Icons
import {
  IconsPieChart,
  IconsBarChart,
  IconsMultiUsers,
  IconsDollar,
  IconsStockTicker,
  IconsListCenter,
  IconsAnalysis2,
  IconsGlobal,
  IconsTrade,
  IconsWeather,
  IconsMapMarker,
  IconsCompilance,
  IconsMicrochip,
  IconsGovernmentLine,
} from "#components";

const sectors = useSidebarSectors();

const app = useNuxtApp();
const t = app.$i18n.t;

const sideFilters = computed(() => {
  return [
    {
      id: 1,
      label: t("market_size"),
      icon: IconsPieChart,
      value: "",
    },
    {
      id: 2,
      label: t("sector_economics"),
      icon: IconsBarChart,
      value: "",
    },
    {
      id: 3,
      label: t("sector_demographic"),
      icon: IconsMultiUsers,
      value: "",
    },
    {
      id: 4,
      label: t("sector_technology"),
      icon: IconsMicrochip,
      value: "",
    },
    {
      id: 5,
      label: t("sector_regulations"),
      icon: IconsCompilance,
      value: "",
    },
    {
      id: 6,
      label: t("government_direction"),
      icon: IconsGovernmentLine,
      value: "",
    },
    {
      id: 7,
      label: t("special_economic_zones"),
      icon: IconsMapMarker,
      value: "",
    },
    {
      id: 8,
      label: t("climate_weather"),
      icon: IconsWeather,
      value: "",
    },
    {
      id: 9,
      label: t("political_analysis"),
      icon: IconsTrade,
      value: "",
    },
    {
      id: 10,
      label: t("global_foreign_investment_trend"),
      icon: IconsGlobal,
      value: "",
    },
    {
      id: 11,
      label: t("financial_analysis_and_benchmarking"),
      icon: IconsAnalysis2,
      value: "",
    },
    {
      id: 12,
      label: t("global_indices"),
      icon: IconsListCenter,
      value: "",
    },
    {
      id: 13,
      label: t("capital_market"),
      icon: IconsStockTicker,
      value: "",
    },
    {
      id: 14,
      label: t("cost_of_doing_business"),
      icon: IconsDollar,
      value: "",
    },
  ];
});
</script>
