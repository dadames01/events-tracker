<script setup>
const { month, year } = useDate(new Date());
const tests = computed(() => {
  const a = new Array(31);
  const array = [];
  for (let i = 0; i < a.length; i++) {
    array.push(i + 1);
  }
  return array;
});
</script>

<template>
  <div>
    <span
      class="flex justify-center text-4xl bg-red-200 border-solid border-t border-r border-l border-black mx-5"
      >{{ month }} {{ year }}</span
    >
    <div class="px-5">
      <div class="grid grid-cols-7 gap-px pb-0.5">
        <div v-for="day in days">
          <DayOfTheWeek :day-of-the-week="day" />
        </div>
      </div>
      <div class="grid grid-cols-7 gap-px">
        <div v-for="test in tests">
          <DayOfTheMonth :dayNumber="test" />
        </div>
      </div>
    </div>
  </div>
</template>
