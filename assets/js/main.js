var app = new Vue({
  el: "#root",
  data: {
    toDo: [
      {
        description: "comprare il pane",
        done: false,
      },
      {
        description: "comprare la pasta",
        done: false,
      },
    ],
  },

  methods: {
    toDoTasks(){
        
    },

    toDoCompleted(){
        this.toDo.splice(this.description, 1)
    }
  },
});
