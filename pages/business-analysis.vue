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

    <section class="flex gap-8 p-6 rounded-3xl text-theme-indigo bg-theme-aqua">
      <IconsIdeaLight class="w-10 h-10 shrink-0" />
      <p>
        Saudi Arabia notes a thriving retail sector (expected to grow at a CAGR of 7.1% during 2021A-26F), mainly driven
        by factors such as likely increase in presence of e-commerce platforms, growth in consumer/ household spending on
        essentials, strong B2B demand potential, growth in tourism, and government initiatives/ programs. In response to
        the surging demand, few leading market players are expanding presence. For instance, Abdullah Al Othaim Markets
        (retailer) opened 9 branches in the Kingdom in Q1’2022 and Geekay (entertainment retailer) and BFL (multi brand
        retailer) entered the market in Jun 2022.
      </p>

    </section>
  </main>
</template>

<script>
</script>
<style></style>
