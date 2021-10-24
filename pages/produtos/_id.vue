<template>
  <v-row class='mt-6'>
    <v-col class='text-center'>
      <v-card>
          <v-toolbar flat>
            <v-toolbar-title>{{novo?'Novo': 'Edição de'}} Produto</v-toolbar-title>
            <v-spacer />
            <v-btn fab absolute top right color='info' class='mr-16' @click="$router.push('/produtos')">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn fab absolute top right color='primary' @click='salvar'>
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
          </v-toolbar>
        <v-card-text>
          <v-form ref='form' v-model='valid' lazy-validation>
            <v-row>
              <v-col cols='12'>
                <v-text-field
                  v-model="produto.descricao"
                  :rules="rules.descricao"
                  label="Descrição"
                ></v-text-field>
              </v-col>
              <v-col cols=12>
                <v-select
                  v-model="produto.tipo"
                  return-object
                  item-text='descricao'
                  :items="tiposProduto"
                  :rules="rules.tipo"
                  label="Tipo"
                ></v-select>
              </v-col>
              <v-col cols='12' md=6>
                <v-text-field
                  v-model.number="produto.quantidadeEstoque"
                  :rules="rules.qtdEstoque"
                  :disabled='!novo'
                  label="Quantidade em Estoque"
                  type='number'
                ></v-text-field>
              </v-col>
              <v-col cols='12' md=6>
                <v-text-field
                  v-model.number="produto.valorFornecedor"
                  prefix='R$'
                  :disabled='!novo'
                  :rules="rules.valorFornecedor"
                  label="Valor no Fornecedor"
                  type='number'
                ></v-text-field>
              </v-col>

            </v-row>

          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, $axios }) {
    let novo = false
    let produto = {}
    if (params.id !== 'novo') {
      produto = await $axios.$get(`/produtos/${params.id}`)
    } else {
      novo = true
    }
    return { novo, produto }
  },
  computed: {
    ...mapGetters(['tiposProduto'])
  },
  // eslint-disable-next-line vue/order-in-components
  data() {
    return {
      valid: true,
      rules: {
        descricao: [
          v => !!v || 'Descrição é obrigatório',
          v => (v && v.length <= 255) || 'Descrição deve possuir menos de 255 caracteres',
        ],
        tipo: [
          v => !!v || 'Tipo é obrigatório'
        ],
        qtdEstoque: [
          v => !!v || 'Quantidade em Estoque é obrigatório',
          v => (v && v > 0) || 'Quantidade deve ser positiva',
        ],
        valorFornecedor: [
          v => !!v || 'Valor no Fornecedor é obrigatório',
          v => (v && v > 0) || 'Valor deve ser positivo',
        ]
      }
    }
  },
  methods: {
    salvar() {
      if (this.novo) {
        this.$axios.$post('/produtos',this.produto).then(() => {
          this.$router.push('/produtos')
        })
      } else {
        this.$axios.$put(`/produtos/${this.produto.codigo}`, this.produto).then(() => {
          this.$router.push('/produtos')
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
