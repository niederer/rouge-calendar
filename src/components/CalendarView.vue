<template>
  <div>
    <h1>My Calendar</h1>
    <div class="new-date-box">
      <h2>Add a Lipstick</h2>
      <div class="field">
        <label for="newRecordName">Lipstick name</label>
        <input v-model="newRecordName" name="newRecordName" id="newRecordName" type="text">
      </div>
      <div class="field">
        <label for="newRecordDate">Date</label>
        <input v-model="newRecordDate" name="newRecordDate" id="newRecordDate" type="date">
      </div>
      <button @click="createNewRecord">Add Lipstick</button>
    </div>
    <calendar-view :show-date="showDate" :events="events" @click-event="onClickEvent" class="">
      <calendar-view-header slot="header" slot-scope="t" :header-props="t.headerProps" @input="setShowDate" />
    </calendar-view>
  </div>
</template>

<script>
  import { CalendarView, CalendarViewHeader, CalendarMathMixin } from 'vue-simple-calendar';
  import ModalView from '@/components/ModalView.vue';

  export default {
    name: 'app',
    data: function() {
      return {
        showDate: new Date(),
        newRecordName: '',
        newRecordDate: '',
        events: []
      };
    },

    events: [],

    methods: {
      setShowDate(d) {
        this.showDate = d;
      },

      createNewRecord() {
        this.events.push({
          startDate: this.newRecordDate,
          title: this.newRecordName
        });
      },

      onClickEvent(event) {
        // this.doSomethingElse(event);
        // console.log('You clicked' + event.title);

        this.$modal.show(ModalView, {
          title: event.title,
          body: event.startDate
        },
        {
          draggable: true
        });
      },

      doSomethingElse(event) {
        console.log(' Bubbled Event ' + event.title);
      }
    },

    mixins: [CalendarMathMixin],
    components: {
      CalendarView,
      CalendarViewHeader,
      ModalView
    },

    mounted: function() {
      if (localStorage.getItem('events')) this.events = JSON.parse(localStorage.getItem('events'));
      this.newRecordDate = this.isoYearMonthDay(this.today());
    },

    watch: {
      events: {
        handler() {
          localStorage.setItem('events', JSON.stringify(this.events));
        },

        deep: true,
      }
    }
  };
</script>

<style lang="scss">
  .cv-wrapper .cv-event {
    font-size: 0.9em;
  }
  .today {
    .cv-day-number {
      font-weight: bold;
    }
  }
</style>
