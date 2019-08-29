const app = new Vue({
  el: '#app',
  data: {
    title: 'Vuejs GYM',
    tasks: [],
    newTaskName: '',
    newTaskState: false,
    taskIndex: ''
  },
  methods: {
    createTask() {
      if (this.newTaskName != '')
        this.tasks.push({
          name: this.newTaskName,
          state: this.newTaskState
        });
      this.newTaskName = '';
      this.newTaskState = false;
    },
    deleteTask(taskIndex, event){
      event.preventDefault();
      this.tasks.splice(taskIndex, 1);
    }
  }
})