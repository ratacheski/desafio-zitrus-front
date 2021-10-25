<template>
  <v-toolbar flat extended extension-height="100">
    <v-toolbar-title>Filtro</v-toolbar-title>
    <v-spacer />
    <v-tooltip bottom open-delay="300">
      <template #activator="{ on }">
        <v-btn fab absolute top right color="primary" @click="filtrar" v-on='on'>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </template>
      <span>Pesquisar</span>
    </v-tooltip>

    <template #extension>
      <v-row class="mt-2">
        <v-col cols="12" md="6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-select
              v-model="tipo"
              :items="tiposProduto"
              item-text="descricao"
              item-value="codigo"
              label="Tipo"
              :rules="[(v) => !!v || 'Selecione um filtro']"
              placeholder="Selecione um tipo para filtrar"
            />
          </v-form>
        </v-col>
      </v-row>
    </template>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FiltroRelatorio',
  data() {
    return {
      tipo: null,
      valid: true,
    }
  },
  computed: {
    ...mapGetters(['tiposProduto']),
  },
  methods: {
    async filtrar() {
      await this.$refs.form.validate()
      if (this.valid) this.$emit('filtrar', this.tipo)
    },
  },
}
</script>

<style scoped></style>
