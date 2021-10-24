<template>
  <v-navigation-drawer
    :value='drawer'
    :mini-variant='miniVariant'
    fixed
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
          icon: 'mdi-pencil',
          title: 'Produtos',
          to: '/produtos'
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
