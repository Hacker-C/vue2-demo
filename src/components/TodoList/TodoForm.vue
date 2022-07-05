<template>
  <div>
    <form v-on:submit.prevent="addTodo">
      <label for="todo">add a todo:</label>
      <input type="text" id="todo" v-model="todoText" />
      <input type="submit" value="add" />
    </form>
    <div v-show="isShowWarning" :style="warning">Please input ligal text!</div>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todoText: '',
      isShowWarning: false,
      warning: {
        color: 'red'
      }
    }
  },
  methods: {
    addTodo() {
      let text = this.todoText.trim()
      if (text.length === 0) {
        this.isShowWarning = true
      } else {
        this.isShowWarning = false
        this.$emit('add', { id: Date.now(), text, isComplete: false, editing: false })
        this.todoText = ''
      }
    }
  }
}
</script>
