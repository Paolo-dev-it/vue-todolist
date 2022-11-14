var app = new Vue({
  el: "#root",
  data: {
    toDo: [
      {
        description: "Comprare il pane",
        done: false,
      },
      {
        description: "Comprare la pasta",
        done: false,
      },
    ],
    text: "", //Variabile che prende l'input della nuova task
  },

  methods: {
    //Funzione che elimina la task quando premo l'icona 'x'
     toDoEliminate( index ){     
         this.toDo.splice(index, 1)
     },

     //Funzione che mi permette di barrare e sbarrare la task quando l'ho completata
     toDoDone( index ){  
          
          if( this.toDo[index].done == true ){
            return this.toDo[index].done = false
          } else {
            return this.toDo[index].done = true
          }
          
     },

     //Funzione che aggiunge la nuova task dall'input all'array di oggetti e la aggiungo alla lista
     addTask(){
        
            this.toDo.push({
                description: this.text,
                done: false,
            })
     },
  },
});
