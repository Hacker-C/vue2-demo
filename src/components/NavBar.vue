<template>
  <ul class="navbar">
    <li v-for="item of list" :key="item.id">
      <router-link :to="item.link" class="default">{{ item.text }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      list: [
        { id: 1, text: 'TodoList', link: '/todolist' },
        { id: 2, text: '可编辑表格', link: '/editable' }
      ]
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
.navbar {
  display: flex;
}
.navbar li {
  margin-left: 10px;
}
.default {
  color: #333;
  text-decoration: none;
}
.active-link {
  color: red;
}
</style>
