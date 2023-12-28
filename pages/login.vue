<template>
  <main>
    <div class="max-w-sm p-6 mx-auto bg-gray-200 rounded-lg shadow-md">
      <AuthLogin />
      {{ test }}
      {{ test2 }}
    </div>
  </main>
</template>

<script setup>
const test = useFoo();
const test2 = useAge();
</script>
