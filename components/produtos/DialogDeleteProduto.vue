<template>
  <v-dialog :value="exibir" max-width="500px" @input="$emit('closeDialog')">
    <v-card>
      <v-card-title class="text-h5">Atenção</v-card-title>
      <v-card-text
        >Confirma a exclusão do Produto {{ produto.descricao }}?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="info" text @click="$emit('closeDialog')">Cancelar</v-btn>
        <v-btn color="error" text @click="deleteProduto">Excluir</v-btn>
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
      default: () => {},
    },
    exibir: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    deleteProduto() {
      this.$axios.$delete(`/produtos/${this.produto.codigo}`).then(() => {
        this.$notifier.showSuccess({
          content:
            `Produto ${this.produto.descricao} removido com sucesso`,
        })
        this.$emit('produtoExcluido')
      }).catch(error => {
        this.$notifier.showError({
          content:
            error.response.data.message
        })
        this.$emit('closeDialog')
      })
    },
  },
}
</script>

<style scoped></style>
