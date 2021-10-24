<template>
<span>Edicao</span>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    let novo = false
    let produto = {}
    if (params.id !== 'novo') {
      produto = await $axios.$get(`/produtos/${params.id}`)
    } else {
      novo = true;
    }
    return {novo, produto}
  }
}
</script>

<style scoped>

</style>
