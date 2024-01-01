<template>
    <ThemeTitle :title="$t('sector_economics')" />
    <ThemeTabs class="my-6" :tabs="[
        $t('market_size'),
        $t('turnover_cost_profitability'),
        $t('companies_employees_salaries'),
    ]" :activeTab="$t('market_size')" @tabChosen="(e) => console.log(e)" />


    <p class="mb-12 text-sm text-theme-indigo">
        {{ $t("marcket_size_p") }}
    </p>

    <section class="grid items-end grid-cols-3 gap-y-4 xl:grid-cols-12 ">
        <div class="col-span-6">
            <ChartsBar chartClass="max-h-[380px] !h-80  mx-auto" />
        </div>
        <div class="col-span-1"> </div>
        <div class="col-span-5">
            <ChartsDoughnut chartClass="max-h-[380px] !h-72  mx-auto " />
        </div>
    </section>
    <ThemeLowerIdea class="mt-6 " :text="$t('marcket_size_idea')" />
</template>