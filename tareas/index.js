const fs = require('fs') 
const tareas = JSON.parse(fs.readFileSync('./data/tareas.json','utf-8'))

module.exports =  {
    verCartel : function(mensaje) {
        console.log('------------------------------------');
        console.log(mensaje);
        console.log('-------------------------------------');
    },
    
agregarTarea : function(titulo,estado) {
    let nuevaTarea = {     
        titulo, 
        estado  
    }
     
    tareas.push(nuevaTarea) 
    this.guardarJson(tareas);
    this.verCartel('TAREA AGREGADA');
    this.listarTareas();
}, 
    listarTareas : function(){
        
        tareas.forEach(tarea => {  
            console.log(tarea);
        });
    },
    filtrarTareas : function(filtro){
        
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro)); 
        
        return console.log(tareasFiltradas); 
    },
    deshacer : function(){
        tareas.pop()
        this.guardarJson(tareas)
        this.verCartel('LA TAREA HA SIDO BORRADA')
        this.listarTareas()
    },
    guardarJson : function(tareas){ 
        fs.writeFileSync('./data/tareas.json',JSON.stringify(tareas), 'utf-8')
    },
} 
