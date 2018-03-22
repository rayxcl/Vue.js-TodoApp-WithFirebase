<template>
  <div class="clearAllContainer" @click="clearTodo">
    <span class="clearAllBtn" >Clear All</span>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  methods: {
    clearTodo() {
      this.$emit("removeAll");

      // this.$store.commit('setInputFocus', true)
      this.setInputFocus(true);
    },
    ...mapMutations(["setInputFocus"])
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: black;
}
</style>
