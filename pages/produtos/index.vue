<template>
  <v-row class='mt-6'>
    <v-col class="text-center">
      <TabelaProdutos/>
    </v-col>
  </v-row>
</template>

<script>
import TabelaProdutos from '~/components/produtos/TabelaProdutos'
export default {
  components: { TabelaProdutos },
}
</script>
