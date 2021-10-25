<template>
  <v-dialog :value='exibir' max-width='600px' @input="closeDialog">
    <v-card>
      <v-card-title class='text-h4 justify-center'>Lucro de Produto</v-card-title>
      <v-card-text class='mt-8'>
        <v-row align='center'>
          <v-col cols='12' md='6'>
            <v-row dense class='mb-8 text-center' >
              <v-col class='font-weight-bold' cols='12'> Produto: {{produto.descricao}}</v-col>
              <v-col cols='12'> Quantidade em Estoque: {{produto.quantidadeDisponivel}}</v-col>
              <v-col cols='12'> Quantidade Vendida: {{produto.quantidadeSaida}}</v-col>
            </v-row>
          </v-col>
          <v-divider v-if='$vuetify.breakpoint.mdAndUp' vertical/>
          <v-col cols='12' md='6'>
            <div class='text-center'>
             <v-icon size='150' style='height: 100px' color='primary'>mdi-cash</v-icon>
            <span class='font-weight-bold info--text text-h6'>{{produto.totalLucro | currency}}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color='info' text @click="closeDialog">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogDetalheLucro',
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
    closeDialog() {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>

</style>
