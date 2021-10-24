<template>
  <v-dialog :value='exibir' @input="$emit('closeDialog')" max-width='500px'>
    <v-card>
      <v-card-title class='text-h5'>Registro de Entrada - {{produto.descricao}}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color='blue darken-1' text @click="$emit('closeDialog')">Cancelar</v-btn>
        <v-btn color='blue darken-1' text @click='movimentarProduto'>Salvar</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogEntradaProduto',
  props: {
    produto: {
      type: Object,
      default: () => {
      }
    },
    exibir: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    movimentarProduto() {
      this.$axios.delete(`/produtos/${this.produto.codigo}`).then(() => this.$emit('movimentacaoFinalizada'))
    }
  }
}
</script>

<style scoped>

</style>
