<script setup lang="ts">
const name = ref('nihaoya')
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
    <Footer {name} />
  </main>
</template>
