<template>
  <div>
    <p class="mb-12 text-sm text-theme-indigo">
      {{ $t("marcket_size_p") }}
    </p>

    <section class="grid items-end grid-cols-3 gap-y-4 xl:grid-cols-12">
      <div class="col-span-6">
        <ChartsBar
          :chart-data="market_size_1"
          footer-text="Market size (SAR bn), 2019A-26F"
          chartClass="max-h-[380px] !h-80  mx-auto"
        />
      </div>
      <div class="col-span-2"></div>
      <div class="col-span-4">
        <ChartsDoughnut
          :chart-data="market_size_type"
          footerText="Market size By type (%), 2021A"
          chartClass="max-h-[380px] !h-72  mx-auto "
        />
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps(["market_size_1", "market_size_type"]);
</script>
