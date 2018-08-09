<template>
  <div class="tasks">
    <ul id="example-1">
      <li v-for="task in tasks">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TasksIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tasks: [
        { id: 1, title: 'task 1' },
        { id: 2, title: 'task 2' },
        { id: 3, title: 'task 3' },
        { id: 4, title: 'task 4' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
