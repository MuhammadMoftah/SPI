<template>
  <section class="flex justify-center w-full gap-3 h-fit">
    <aside
      class="flex items-center h-auto py-1 overflow-auto text-center small_scroll 3xl:h-14 rounded-b-xl px-7 gap-x-6 gap-y-2 bg-theme-mid-blue w-fit"
    >
      <NuxtLink :to="localePath('/')" class="link-style">
        <IconsHome />
        <span>{{ $t("home") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/business-analysis')" class="link-style">
        <IconsAnalysis class="!w-28" />
        <span> {{ $t("business_analysis") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/personal-advisor')" class="link-style">
        <IconsGlassess class="!w-6" />
        <span>{{ $t("personal_advisor") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/strategy-management')" class="link-style">
        <IconsStrategy />
        <span>{{ $t("strategy_management") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/project-management')" class="link-style">
        <IconsSurvey />
        <span>{{ $t("project_management") }}</span>
      </NuxtLink>

      <NuxtLink :to="localePath('/specific-company')" class="link-style">
        <IconsFinancial />
        <span>{{ $t("specific_company") }}</span>
      </NuxtLink>

      <!-- <NuxtLink :to="localePath('/investor-survey')" class="link-style">
        <IconsSurvey />
        <span>{{ $t("investor_survey") }}</span>
      </NuxtLink> -->

      <NuxtLink
        :to="localePath('/testing')"
        class="link-style"
        v-if="useRuntimeConfig().public.envMode == 'dev'"
      >
        <IconsSurvey />
        <span>{{ "Testing" }}</span>
      </NuxtLink>
    </aside>

    <aside
      class="flex items-center h-12 py-1 overflow-x-auto text-center small_scroll 3xl:h-14 rounded-b-xl px-7 gap-x-6 gap-y-2 bg-theme-mid-blue w-fit"
    >
      <button>
        <IconsUser class="w-5 h-5 3xl:h-6 3xl:w-6" />
      </button>
      <button>
        <IconsNotifications class="w-5 h-5 3xl:h-6 3xl:w-6" />
      </button>
      <button>
        <IconsSearch class="w-5 h-5 3xl:h-6 3xl:w-6" />
      </button>

      <NuxtLink
        :to="locale == 'ar' ? switchLocalePath('en') : switchLocalePath('ar')"
        class="text-xl text-center"
      >
        <span> {{ locale == "ar" ? "En" : "Ar" }}</span>
      </NuxtLink>
    </aside>
  </section>
</template>

<script setup>
// i18n languages
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>
.router-link-active {
  @apply !opacity-100;
}

.link-style {
  @apply grid shrink-0 text-xs 3xl:text-sm opacity-60;
}

.link-style svg {
  @apply w-5 h-5 3xl:h-6 3xl:w-6 mx-auto;
}
</style>
