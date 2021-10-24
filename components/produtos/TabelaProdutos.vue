<template>
  <v-data-table :headers="headers" :items="produtos" class="elevation-1">
    <template #top>
      <v-toolbar flat>
        <v-toolbar-title>Produtos</v-toolbar-title>
        <v-spacer/>
        <v-btn fab absolute top right color="primary" @click='criar(item)'>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
    </template>
    <template #[`item.valorFornecedor`]="{ item }">
      <span>{{ item.valorFornecedor | currency }}</span>
    </template>
    <template #[`item.acoes`]="{ item }">
      <v-icon small class="mr-2" color="info" @click="registrarSaida(item)">
        mdi-package-up
      </v-icon>
      <v-icon small class="mr-2" color="info" @click="registrarEntrada(item)">
        mdi-package-down
      </v-icon>
      <v-icon small class="mr-2" color="secondary" @click="editar(item)">
        mdi-pencil
      </v-icon>
      <v-icon small color="error" @click="excluir(item)"> mdi-delete </v-icon>
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
        {
          text: 'Ações',
          value: 'acoes',
          align: 'right',
          sortable: false,
        },
      ],
    }
  },
  methods: {
    registrarSaida(item) {
      // TODO - abrir dialog de movimentação de estoque de saída
    },
    registrarEntrada(item) {
      // TODO - abrir dialog de movimentação de estoque de saída
    },
    criar(item) {
      // TODO - direcionar para tela de criação de produto
    },
    editar(item) {
      // TODO - direcionar para tela de edição de produto
    },
    excluir(item) {
      // TODO - abrir dialog de exclusão de produto
    },
  },
}
</script>

<style scoped></style>
