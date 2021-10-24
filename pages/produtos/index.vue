<template>
  <v-row class='mt-6'>
    <v-col class="text-center">
      <TabelaProdutos :produtos='produtos'/>
    </v-col>
  </v-row>
</template>

<script>
import TabelaProdutos from '~/components/produtos/TabelaProdutos'
export default {
  components: { TabelaProdutos },
  data() {
    return {
      produtos: []
    }
  },
  async fetch() {
    this.produtos = await this.$axios.$get('/produtos')
  }

}
</script>
