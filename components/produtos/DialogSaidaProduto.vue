<template>
  <v-dialog :value='exibir' max-width='500px' @input="closeDialog">
    <v-card>
      <v-card-title class='text-h5'>Movimento de Saída</v-card-title>
      <v-card-text class='mt-8'>
        <v-row>
          <v-col cols='12' md='6'>
            <v-row dense class='mb-8'>
              <v-col class='font-weight-bold' cols='12'> Produto: {{produto.descricao}}</v-col>
              <v-col class='font-weight-bold' cols='12'> Tipo: {{produto.tipo.descricao}}</v-col>
              <v-col cols='12'> Valor de Compra Atual: {{produto.valorFornecedor | currency}}</v-col>
              <v-col cols='12'> Quantidade em Estoque: {{produto.quantidadeEstoque}}</v-col>
            </v-row>
          </v-col>
          <v-divider vertical/>
          <v-col cols='12' md='6'>
            <v-form ref='form' v-model='valid' lazy-validation>
              <v-row>
                <v-col cols=12>
                  <v-text-field
                    v-model.number="quantidade"
                    :rules='rules.quantidade'
                    label='Qtd. para Vender'
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col cols=12>
                  <v-text-field
                    v-model.number="valor"
                    prefix='R$'
                    :rules="rules.valor"
                    label="Valor de Venda"
                    type='number'
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>


      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color='info' text @click="closeDialog">Cancelar</v-btn>
        <v-btn color='primary' text @click='movimentarProduto'>Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogSaidaProduto',
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
  data() {
    return {
      valid: true,
      quantidade: null,
      valor: null,
      rules: {
        valor: [
          v => !!v || 'Valor é obrigatório',
          v => (v && v > 0) || 'Valor deve ser positivo',
        ],
        quantidade: [
          v => !!v || 'Quantidade é obrigatório',
          v => (v && v > 0) || 'Quantidade deve ser positiva',
          v => (v && v < this.produto.quantidadeEstoque) || 'Quantidade deve ser menor que a em estoque',
        ],
      }
    }
  },
  methods: {
    async movimentarProduto() {
      await this.$refs.form.validate();
      if (this.valid){
        this.$axios.$post(`/produtos/${this.produto.codigo}/estoque`, {
          valor: this.valor,
          quantidade: this.quantidade,
          tipoMovimentacao: {
            codigo: 2
          }
        }).then(() => this.$emit('movimentacaoFinalizada'))
      }
    },
    closeDialog() {
      this.$refs.form.reset();
      this.quantidade = null;
      this.valor = null;
      this.valid = true;
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>

</style>
