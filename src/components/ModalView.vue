<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'ModalView',
  props: {
    title: String,
    body: Date
  },
};
</script>
