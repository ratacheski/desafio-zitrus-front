<template>
  <v-data-table :headers="headers" :items="produtos" class="elevation-1">
    <template #top>
      <v-toolbar flat>
        <v-toolbar-title>Produtos</v-toolbar-title>
      </v-toolbar>
    </template>
    <template #[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template #[`item.valorFornecedor`]="{ item }">
      <span>{{item.valorFornecedor | currency}}</span>
    </template>
    <template #no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'TabelaProdutos',
  props: {
    produtos: {
      type: Array,
      default: () => [],
    },
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
          text: 'Tipo',
          align: 'left',
          value: 'tipo.descricao',
        },
        {
          text: 'Valor Fornecedor',
          align: 'right',
          value: 'valorFornecedor',
        },
        {
          text: 'Qtd. Estoque',
          align: 'right',
          value: 'quantidadeEstoque',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
