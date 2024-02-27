<script setup>

import { RouterLink } from 'vue-router';

// llamada a la api en el archivo directamente sin usar el composable
/* import { ref } from 'vue' */
/* const listaComarcas = ref([])
const comarcasApi = 'https://analisi.transparenciacatalunya.cat/resource/2gws-ubmt.json'

fetch(comarcasApi)
  .then((resp) => {
    return (resp = resp.json())
  })
  .then((data) => {
    listaComarcas.value = data
  }) */

  // usando el composable

import  {useFetch}  from '/src/composables/useFetch';

const comarcasApi = 'https://analisi.transparenciacatalunya.cat/resource/2gws-ubmt.json'

const listaComarcas = useFetch(comarcasApi)

</script>

<template>

    <h1>Comarques</h1>

    <ul>
        <li v-for="comarca in listaComarcas" :key="comarca.codi_comarca"><RouterLink :to="`/detalleComarca/${comarca.codi_comarca}`">{{ comarca.comarca }}</RouterLink></li>
    </ul>

</template>