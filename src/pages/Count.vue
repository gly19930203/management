<template>
    <div>
        <p>{{count}}</p>
        <button @click="inc">+</button>
        <button @click="dec">-</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  computed:{
      count(){
          return this.$store.state.count
      }
  },
  methods: {
    inc() {
      this.$store.commit('inc');
    },
    dec() {
      this.$store.commit('dec');
    }
  }
};
</script>
