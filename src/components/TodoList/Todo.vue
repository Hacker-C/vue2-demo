<template>
  <ul>
    <li v-for="todo of todos" :key="todo.is">
      <span v-if="!todo.editing" :style="{ textDecoration: todo.isComplete ? 'line-through' : '' }">
        {{ todo.text }}
      </span>
      <input
        v-else
        type="text"
        ref="todoInput"
        :value="todo.text"
        @blur="updateTodo($event, todo.id)"
      />
      <input
        @click="toggleComplete(todo.id)"
        type="checkbox"
        id="complete"
        v-model="todo.isComplete"
      />
      <input @click="removeTodo(todo.id)" type="button" value="delete" />
      <input type="button" value="edit" @click="editTodo(todo.id)" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todos: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    toggleComplete(id) {
      this.$emit('toggle', id)
    },
    removeTodo(id) {
      this.$emit('remove', id)
    },
    editTodo(id) {
      this.$emit('edit', id)
      this.$nextTick(() => {
        this.$refs.todoInput?.[0].focus()
      })
    },
    updateTodo(event, id) {
      this.$emit('update', id, event.target.value)
    }
  }
}
</script>

<style scoped></style>
