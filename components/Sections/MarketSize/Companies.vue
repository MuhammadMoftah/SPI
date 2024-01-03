<template>
  <div>
    <p class="mb-12 text-sm text-theme-indigo">
      {{ $t("companies_p") }}
    </p>

    <section class="grid items-end grid-cols-1 gap-8 gap-y-4 xl:grid-cols-3">
      <div class="">
        <ChartsDoughnut chartClass="max-h-[380px] !h-80 mx-auto" />
      </div>
      <div class="">
        <ChartsDoughnut chartClass="max-h-[380px] !h-80 mx-auto" />
      </div>
      <div class="">
        <ChartsDoughnut chartClass="max-h-[380px] !h-80 mx-auto" />
      </div>
    </section>
  </div>
</template>

<script setup></script>
