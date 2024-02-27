<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const volver = () => router.push("/");

const codi_comarca = ref(route.params.codi_comarca);

const detalleComarca = ref([]);

const fetchDetalle = async () => {
  const response = await fetch(
    `https://analisi.transparenciacatalunya.cat/resource/2gws-ubmt.json?codi_comarca=${codi_comarca.value}`
  );
  const data = await response.json();
  detalleComarca.value = data;
};

onMounted(fetchDetalle);
</script>

<template>
  <h1>{{ detalleComarca[0]?.comarca }}</h1>

  <div
    class="detalle-comarca"
    v-for="comarca in detalleComarca"
    :key="comarca.codi_comarca"
  >
<h2>Any: {{ comarca.any }}</h2>

    <ul>
      <li>Poblacio: {{ comarca.poblaci }}</li>
      <li>Consum domèstic:{{ Number((comarca.dom_stic_xarxa)/Number(comarca.total)*100).toFixed(2)}}%</li>
        <li>Consum activitats econòmiques:{{ Number((comarca.activitats_econ_miques_i)/Number(comarca.total)*100).toFixed(2) }}</li>
        <li>Total: {{ comarca.total }}</li>
    </ul>
  </div>

  <button @click="volver">Tornar</button>

</template>
