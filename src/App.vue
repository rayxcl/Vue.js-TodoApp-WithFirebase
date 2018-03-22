<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodo="addTodoApp"></TodoInput>
    <TodoList :propsdata="todoItems" @removeTodo="removeTodoApp"></TodoList>
    <TodoFooter @removeAll="removeAllApp"></TodoFooter>
  </div>
</template>

<script>
import Vue from "vue";
import VueFire from "vuefire";
import Firebase from "firebase";

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

Vue.use(VueFire);

let config = {
  apiKey: "AIzaSyAhAIs6LzdDsfxD03cjbEfdQSZsjfO81Xk",
  authDomain: "doitnow-53d8d.firebaseapp.com",
  databaseURL: "https://doitnow-53d8d.firebaseio.com",
  projectId: "doitnow-53d8d",
  storageBucket: "doitnow-53d8d.appspot.com",
  messagingSenderId: "541258045028"
};

let app = Firebase.initializeApp(config); // Firebase 초기화
let db = app.database(); // 실시간 데이터베이스 사용 준비 완료
let ItemsRef = db.ref("todoItems"); // 데이터베이스 참조 검색

export default {
  name: "app",
  firebase: function() {
    return {
      todoItems: ItemsRef
    };
  },
  methods: {
    addTodoApp(todoItemApp) {
      ItemsRef.push(todoItemApp);
    },
    removeTodoApp(todoItem) {
      ItemsRef.child(todoItem[".key"]).remove();
    },
    removeAllApp() {
      ItemsRef.remove();
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
