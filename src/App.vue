<template>
  <div id="app">
    <h1>My Calendar</h1>
    <calendar-view
      :show-date="showDate"
      class="">
      <calendar-view-header
        slot="header"
        slot-scope="t"
        :header-props="t.headerProps"
        @input="setShowDate" />
    </calendar-view>
  </div>
</template>

<script>
  import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"

  export default {
    name: 'app',
    data: function() {
      return { showDate: new Date() }
    },
    components: {
      CalendarView,
      CalendarViewHeader,
    },
    methods: {
      setShowDate(d) {
        this.showDate = d;
      },
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    height: 67vh;
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

  .today {
    .cv-day-number {
      font-weight: bold;
    }
  }
</style>
