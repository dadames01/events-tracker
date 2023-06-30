<script setup>
const props = defineProps(['dayNumber']);

const styling = computed(() => {
  if (!props.dayNumber) {
    return { 'background-color': '#D3D3D3' };
  }
  return {};
});
</script>

<template>
  <div class="p-4 border-solid border-2 border-black h-28" :style="styling">
    <span v-if="dayNumber">{{ dayNumber }}</span>
  </div>
</template>
