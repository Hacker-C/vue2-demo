<template>
  <div>
    <p>双击可编辑表格内容，单击无效</p>
    <p>点击表格外则表示编辑完毕，此时可发送请求</p>
    <div style="float: left">
      <table
        ref="table"
        border="1"
        bordercolor="#ccc"
        cellspacing="0"
        cellpadding="0"
        align="center"
        style="text-align: center"
      >
        <thead>
          <td v-for="item in list.header" :key="item">{{ item }}</td>
        </thead>
        <tbody>
          <tr v-for="(obj, i) of list.data" :key="obj.id">
            <td v-for="(v, k, j) of obj" @dblclick="change(4 * i + j, $event)" :key="k">
              <span v-if="isTd">
                {{ v }}
              </span>
              <input
                v-else
                @input="update(obj.id, k, $event)"
                class="input"
                type="text"
                :value="v"
                ref="input"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <pre style="display: inline-block">{{ list.data }}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isTd: true,
      currentTd: null,
      // prettier-ignore
      list: {
        header: ['学号', '姓名', '年龄', '年级'],
        data: [
          {  id: '1001', name: '小明', age: 20, grade: '七年级'},
          {  id: '1002', name: '小明', age: 20, grade: '七年级'},
          {  id: '1003', name: '小明', age: 20, grade: '七年级'},
          {  id: '1004', name: '小明', age: 20, grade: '七年级'},
        ]
      }
    }
  },
  mounted() {
    document.addEventListener('click', e => {
      let table = this.$refs.table
      // 检测是否点击了表格之外，若点击了外面，则让单元格的输入框消失
      if (e.target.contains(table)) {
        this.isTd = true
      }
    })
  },
  methods: {
    change(index, e) {
      this.isTd = false
      this.currentTd = e.target
      this.$nextTick(() => {
        this.$refs.input[index].focus()
      })
    },
    update(id, k, e) {
      this.list.data.forEach(obj => {
        if (obj.id === id) {
          obj[k] = e.target.value
        }
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #333;
  font-family: '苹方';
}
td {
  font-size: 18px;
  height: 50px !important;
  width: 100px !important;
}
.input {
  height: 48px;
  width: 96px;
  /* outline: none; */
  font-weight: 400;
  font-size: 18px;
  resize: none;
  border: none;
  text-align: center;
}
pre {
  font-size: 16px;
  color: red;
}
.active {
  width: 70px;
  height: 40px;
}
</style>
