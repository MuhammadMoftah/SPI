<template>
    <aside
        class="w-full py-3 text-sm font-medium text-center 3xl:text-base text-slate-50 rounded-b-2xl bg-theme-celestial-blue">
        {{ text }}
    </aside>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: 'Text',
    }
});
</script>