<script setup>
import ListadoTareas from '@/components/ListadoTareas.vue';

// ------------Con props-------------//
import {ref} from 'vue'
const listadoTareas = ref([])
const tarea = ref('')

const guardarTarea = ()=>{
    listadoTareas.value.push(tarea.value)
    tarea.value=""
}

//-----------------------------------//

//--------provide e inject---------//

/* 
provide('listadoTareas', listaTareas)
*/

// ---------------------------------//


</script>


<template>
    <h1>Llista de tasques</h1>
    <hr>
    <form @submit.prevent="guardarTarea">
        <input v-model="tarea" type="text" placeholder="Afegir tasca...">
        <button>Afegir</button>
    </form>

    <div class="tareas-box">
        <ListadoTareas :tareas="listadoTareas"></ListadoTareas>
    </div>
</template>