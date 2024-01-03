<template>
    <ThemeTitle :title="$t('sector_economics')" />
    <ThemeTabs class="my-6" :tabs="[
        $t('market_size'),
        $t('turnover_cost_profitability'),
        $t('companies_employees_salaries'),
    ]" :activeTab="$t('market_size')" @tabChosen="(e) => console.log(e)" />
</template>