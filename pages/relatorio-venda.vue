<template>
  <v-row class="mt-6">
    <v-col class="text-center">
      <v-card>
        <FiltroRelatorio @filtrar="filtrar" />
        <TabelaRelatorio :produtos="produtos" @visualizar="visualizar" />
      </v-card>
      <DialogDetalheLucro
        v-if="exibirDialog"
        :exibir="exibirDialog"
        :produto="produtoDetalhado"
        @closeDialog="exibirDialog = false"
      />
    </v-col>
  </v-row>
</template>

<script>
import FiltroRelatorio from '~/components/relatorio/FiltroRelatorio'
import TabelaRelatorio from '~/components/relatorio/TabelaRelatorio'
import DialogDetalheLucro from '~/components/relatorio/DialogDetalheLucro'

export default {
  components: { DialogDetalheLucro, TabelaRelatorio, FiltroRelatorio },
  data() {
    return {
      produtos: [],
      produtoDetalhado: {},
      exibirDialog: false,
    }
  },
  methods: {
    async filtrar(tipo) {
      this.produtos = await this.$axios.$get(`produtos/tipo/${tipo}`)
    },
    visualizar(produto) {
      this.$axios.$get(`/produtos/${produto.codigo}/lucro`).then((result) => {
        this.produtoDetalhado = { ...produto, ...result }
        this.$nextTick(() => {
          this.exibirDialog = true
        })
      })
    },
  },
}
</script>

<style scoped></style>
