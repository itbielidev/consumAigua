<script setup>
// ------------Con props------------//
const props = defineProps({
  tareas: {
   /* coando la prop es un objeto o array el default tiene que ser una funcion */

    type: Array,
    default: () => ["no hay tareas"],
  },
});
// ---------------------------------//

//--------provide e inject---------//

/* 
import {inject} from 'vue'
 const tareas = inject('listadoTareas')
*/

// ---------------------------------//
</script>

<template>
  <div>
    <ul>
      <li v-for="tarea in props.tareas" :key="tarea" >{{ tarea }}</li>
    </ul>
  </div>
</template>
