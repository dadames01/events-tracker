<script setup>
const { month, year, daysInfo } = useDate(new Date());
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
        <div v-for="dayInfo in daysInfo">
          <DayOfTheMonth :dayNumber="dayInfo.dayNumber" />
        </div>
      </div>
    </div>
  </div>
</template>
