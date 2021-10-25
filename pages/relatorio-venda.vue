<template>
  <v-row class="mt-6">
    <v-col class="text-center">
      <v-card>
        <FiltroRelatorio @filtrar="filtrar" />
        <TabelaRelatorio :produtos="produtos" @visualizar="visualizar" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import FiltroRelatorio from '~/components/relatorio/FiltroRelatorio'
import TabelaRelatorio from '~/components/relatorio/TabelaRelatorio'

export default {
  components: { TabelaRelatorio, FiltroRelatorio },
  data() {
    return {
      produtos: [],
      produtoDetalhado: {},
    }
  },
  methods: {
    async filtrar(tipo) {
      this.produtos = await this.$axios.$get(`produtos/tipo/${tipo}`)
    },
    async visualizar(codigo) {
      this.produtoDetalhado = await this.$axios.$get(
        `/produtos/${codigo}/lucro`
      )
    },
  },
}
</script>

<style scoped></style>
