<template>
  <div class="inputBox shadow" >
    <input type="text" v-model="newTodoItem" placeholder="Type what you want to do" @keyup.enter="addTodo" ref="todoInput" @blur="setInputFocus(false)" @focus="setInputFocus(true)">
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
    <modal v-if="getShowModal">
      <h3 slot="header">Warning</h3>
      <span slot="footer" @click="setContorlModal({ type: 'nToggle', value: false })">
        Write something
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal";
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    addTodo() {
      if (this.getNewTodoItem !== "") {
        var value = this.getNewTodoItem && this.getNewTodoItem.trim();
        this.$emit("addTodo", value);
        this.clearInput();
        this.setFocus();
      } else {
        // this.setToggleModal();
        this.setContorlModal({ type: 'toggle', value: '' });
      }
    },
    setFocus () {
      this.$refs.todoInput.focus();
    },
    clearInput() {
      this.$store.commit('syncNewTodoItem', "")
    },
    ...mapMutations([
      "setInputFocus",
      "setContorlModal"
    ])
  },
  watch: {
    // Clear All 버튼 클릭 시 flag 변화를 감지하여 input에 focus 줌.
    getFlagFocus() {
      if (this.getFlagFocus === true) {
        this.setFocus();
      }
    }
  },
  components: {
    Modal: Modal
  },
  computed: {
    ...mapGetters(["getShowModal", "getFlagFocus", "getNewTodoItem"]),
    // vuex와 v-model 동시 사용 시 setter 설정 필요
    newTodoItem: {
      get () {
        return this.getNewTodoItem
      },
      set (value) {
        this.$store.commit('syncNewTodoItem', value)
      }
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  vertical-align: middle;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
