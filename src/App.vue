<script>
import { RouterView } from "vue-router";
import CabecalhoComp from "@/components/CabecalhoComp.vue";
import RodapeComp from "@/components/RodapeComp.vue";
export default {
  components: { CabecalhoComp, RodapeComp, RouterView },
};

</script>
<template>
  <CabecalhoComp />
  <RodapeComp />
  <RouterView />
</template>
<style>
.teste {
  border: 5px black;
  margin: 0 black;
}
.card-img-top {
  width: 93%;
}
</style>
