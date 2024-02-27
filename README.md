<script setup>
import axios from 'axios';
import { ref } from 'vue';

const apiComarcas = 'https://analisi.transparenciacatalunya.cat/resource/2gws-ubmt.json'

const comarcas = ref([''])

axios.get(apiComarcas).then((resp)=>{
  comarcas.value = resp.data
})

</script>

<template>
  <h1>axios</h1>

  <ul>
    <li v-for="comarca in comarcas" :key="comarca.codi_comarca">{{ comarca.comarca }}</li>
  </ul>

</template>
