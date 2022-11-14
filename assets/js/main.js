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
    text: "",
  },

  methods: {

    toDoTasks(){
        
    },

     toDoEliminate(){     
         this.toDo.splice(this.description, 1)
     },

     toDoDone(index){  
          this.toDo[index].done = true
        //   if(this.toDo[index].done = true){
        //     return this.toDo[index].done = false
        //   } else {
        //     return this.toDo[index].done = true
        //   }
          
     },

     addTask(){
        
            this.toDo.push({
                description: this.text,
                done: false,
            })
        
     },

     
  },
  
});
