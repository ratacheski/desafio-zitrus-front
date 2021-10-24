<template>
  <v-dialog :value='exibir' @input="$emit('closeDialog')" max-width='500px'>
    <v-card>
      <v-card-title class='text-h5'>Atenção</v-card-title>
      <v-card-text>Confirma a exclusão do Produto {{ produto.descricao }}?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color='blue darken-1' text @click="$emit('closeDialog')">Cancel</v-btn>
        <v-btn color='blue darken-1' text @click='deleteProduto'>OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogDeleteProduto',
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
    deleteProduto() {
      this.$axios.delete(`/produtos/${this.produto.codigo}`).then(() => this.$emit('produtoExcluido'))
    }
  }
}
</script>

<style scoped>

</style>
