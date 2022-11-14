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

     toDoEliminate(){     
         this.toDo.splice(this.description, 1)
     },

     toDoDone(index){  
          this.toDo[index].done = true
          
     },

     
  },
  
});
