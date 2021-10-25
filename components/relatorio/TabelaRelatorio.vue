<template>
  <v-data-table :headers="headers" :items="produtos" class="elevation-1">
    <template #[`item.acoes`]="{ item }">
      <v-icon :disabled='item.quantidadeSaida === 0' class="mr-2" color="secondary" @click="$emit('visualizar',item.codigo)">
        mdi-eye
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'TabelaRelatorio',
  props: {
    produtos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'Descrição',
          align: 'left',
          value: 'descricao',
        },
        {
          text: 'Qtd. Estoque',
          align: 'right',
          value: 'quantidadeDisponivel',
        },
        {
          text: 'Qtd. Saída',
          align: 'right',
          value: 'quantidadeSaida',
        },
        {
          text: 'Ações',
          value: 'acoes',
          align: 'right',
          sortable: false,
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
