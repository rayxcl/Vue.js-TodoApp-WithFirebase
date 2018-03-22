import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    state_showModal: false,
    state_flagFocus: false,
    state_newTodoItem: ""
  },
  getters: {
    getShowModal(state) {
      return state.state_showModal;
    },
    getFlagFocus(state) {
      return state.state_flagFocus;
    },
    getNewTodoItem(state) {
      return state.state_newTodoItem;
    }
  },
  mutations: {
    // Modal 컨트롤 Begin ----------------------------
    setContorlModal(state, payload) {
      if (payload.type === "toggle") {
        state.state_showModal = !state.state_showModal;
      } else if (payload.type === "nToggle") {
        state.state_showModal = payload.value;
      }
    },
    // Input Focus
    setInputFocus(state, payload) {
      state.state_flagFocus = payload;
    },
    // sync newTodoItem
    syncNewTodoItem(state, payload) {
      state.state_newTodoItem = payload;
    }
  }
});
