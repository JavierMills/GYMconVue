const app = new Vue({

    el : '#app',
    data :{
        titulo : 'GYM con Vue',
        tareas: [],
        nuevaTarea:''
        
    }, 

    methods :{
        AgregarTarea: function(){
           // console.log('click', this.nuevaTarea);
           this.tareas.push({
               nombre: this.nuevaTarea,
               estado: false
           })
        //    console.log(this.tareas);
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },

        editarTarea : function(index){

            this.tareas[index].estado= true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));

        },

        Eliminar : function(index){

            this.tareas.splice(index, 1)= false;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },

    created: function(){
        let DatosDB = JSON.parse(localStorage.getItem('gym-vue'));
       if(DatosDB === null){
           this.tareas =[];

       }else{
           this.tareas = DatosDB;
       }
    }


});
