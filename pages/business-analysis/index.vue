<template>
  <main>
    <ThemeTitle :title="$t('sector_economics')" />
    <ThemeTabs class="my-6" :tabs="[
      $t('market_size'),
      $t('turnover_cost_profitability'),
      $t('companies_employees_salaries'),
    ]" :activeTab="$t('market_size')" @tabChosen="(e) => console.log(e)" />

    <section class="">
      <p class="mb-12 text-sm text-theme-indigo">
        {{ $t("marcket_size_p") }}
      </p>
    </section>

    <section class="grid grid-cols-1 gap-40 xl:grid-cols-2">
      <div>
        <ChartsBar />
      </div>
      <div>
        <ChartsDoughnut />
      </div>
    </section>
  </main>
</template>

<script></script>
<style></style>
