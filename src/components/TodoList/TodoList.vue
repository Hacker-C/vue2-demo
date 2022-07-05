<template>
  <div>
    <TodoForm @add="addTodo" />
    <Todo
      :todos="todos"
      @toggle="toggleComplete"
      @remove="removeTodo"
      @edit="editTodo"
      @update="updateTodo"
    />
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import Todo from './Todo.vue'

export default {
  name: 'TodoList',
  components: {
    TodoForm,
    Todo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    toggleComplete(id) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    editTodo(id) {
      this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, editing: true } : todo))
    },
    updateTodo(id, value) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { ...todo, text: value, editing: false } : todo
      )
    }
  }
}
</script>
