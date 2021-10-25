<template>
  <v-navigation-drawer
    :value='drawer'
    :mini-variant='miniVariant'
    clipped
    app
    @input="emitToggleDrawer"
  >
    <v-list>
      <v-list-item
        v-for='(item, i) in items'
        :key='i'
        :to='item.to'
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text='item.title' />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TheSideBar',
  props: {
    miniVariant: {
      type: Boolean,
      default: false
    },
    drawer: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-package-variant',
          title: 'Produtos',
          to: '/produtos'
        },
        {
          icon: 'mdi-cash',
          title: 'Relatório de Venda',
          to: '/relatorio-venda'
        }
      ],
    }
  },
  methods: {
    emitToggleDrawer(value) {
      this.$emit('toggleDrawer', value)
    }
  }
}
</script>

<style scoped>

</style>
