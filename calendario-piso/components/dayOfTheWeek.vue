<script setup>
defineProps(['dayOfTheWeek']);
</script>

<template>
  <div class="grid p-4 border-solid border-2 border-black h-1 content-center">
    {{ dayOfTheWeek }}
  </div>
</template>
