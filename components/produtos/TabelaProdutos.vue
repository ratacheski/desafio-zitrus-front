<template>
  <div>
    <v-data-table :headers="headers" :items="produtos" class="elevation-1">
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>Produtos</v-toolbar-title>
          <v-spacer />
          <v-tooltip bottom open-delay="300">
            <template #activator="{ on }">
              <v-btn fab absolute top right color="primary" @click="criar" v-on='on'>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Cadastrar Produto</span>
          </v-tooltip>

        </v-toolbar>
      </template>
      <template #[`item.valorFornecedor`]="{ item }">
        <span>{{ item.valorFornecedor | currency }}</span>
      </template>
      <template #[`item.acoes`]="{ item }">
        <v-tooltip top open-delay="300">
          <template #activator="{ on }">
            <v-icon
              class="mr-2"
              color="info"
              @click="registrarSaida(item)"
              v-on="on"
            >
              mdi-package-up
            </v-icon>
          </template>
          <span>Registrar Saída</span>
        </v-tooltip>
        <v-tooltip top open-delay="300">
          <template #activator="{ on }">
            <v-icon
              class="mr-2"
              color="info"
              @click="registrarEntrada(item)"
              v-on="on"
            >
              mdi-package-down
            </v-icon>
          </template>
          <span>Registrar Entrada</span>
        </v-tooltip>
        <v-tooltip top open-delay="300">
          <template #activator="{ on }">
            <v-icon
              class="mr-2"
              color="secondary"
              @click="editar(item)"
              v-on="on"
            >
              mdi-pencil
            </v-icon>
          </template>
          <span>Editar</span>
        </v-tooltip>
        <v-tooltip top open-delay="300">
          <template #activator="{ on }">
            <v-icon color="error" @click="excluir(item)" v-on="on">
              mdi-delete</v-icon
            >
          </template>
          <span>Remover</span>
        </v-tooltip>
      </template>
    </v-data-table>
    <DialogDeleteProduto
      :exibir="exibirDialogExclusao"
      :produto="produtoParaExcluir"
      @closeDialog="exibirDialogExclusao = false"
      @produtoExcluido="handleProdutoExcluido"
    />
    <DialogEntradaProduto
      v-if="exibirDialogEntradaProduto"
      :exibir="exibirDialogEntradaProduto"
      :produto="produtoParaMovimentar"
      @closeDialog="exibirDialogEntradaProduto = false"
      @movimentacaoFinalizada="handleMovimentacaoFinalizada"
    />
    <DialogSaidaProduto
      v-if="exibirDialogSaidaProduto"
      :exibir="exibirDialogSaidaProduto"
      :produto="produtoParaMovimentar"
      @closeDialog="exibirDialogSaidaProduto = false"
      @movimentacaoFinalizada="handleMovimentacaoFinalizada"
    />
  </div>
</template>

<script>
import DialogDeleteProduto from '~/components/produtos/DialogDeleteProduto'
import DialogEntradaProduto from '~/components/produtos/DialogEntradaProduto'
import DialogSaidaProduto from '~/components/produtos/DialogSaidaProduto'

export default {
  name: 'TabelaProdutos',
  components: { DialogSaidaProduto, DialogEntradaProduto, DialogDeleteProduto },
  data() {
    return {
      produtos: [],
      exibirDialogExclusao: false,
      exibirDialogEntradaProduto: false,
      exibirDialogSaidaProduto: false,
      produtoParaExcluir: {},
      produtoParaMovimentar: {},
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
  async fetch() {
    await this.obterProdutos()
  },
  methods: {
    registrarSaida(item) {
      this.produtoParaMovimentar = item
      this.exibirDialogSaidaProduto = true
    },
    registrarEntrada(item) {
      this.produtoParaMovimentar = item
      this.exibirDialogEntradaProduto = true
    },
    criar() {
      this.$router.push('/produtos/novo')
    },
    editar(item) {
      this.$router.push(`/produtos/${item.codigo}`)
    },
    excluir(item) {
      this.produtoParaExcluir = item
      this.exibirDialogExclusao = true
    },
    handleProdutoExcluido() {
      this.produtoParaExcluir = {}
      this.exibirDialogExclusao = false
      this.obterProdutos()
    },
    handleMovimentacaoFinalizada() {
      this.produtoParaMovimentar = {}
      this.exibirDialogEntradaProduto = false
      this.exibirDialogSaidaProduto = false
      this.obterProdutos()
    },
    async obterProdutos() {
      this.produtos = await this.$axios.$get('/produtos')
    },
  },
}
</script>

<style scoped></style>
