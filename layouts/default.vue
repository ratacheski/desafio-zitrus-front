<template>
  <v-app dark>
    <v-navigation-drawer
      v-model='drawer'
      :mini-variant='miniVariant'
      fixed
      app
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
    <TheAppBar @toggleDrawer='drawer = !drawer'
               @toggleMiniVariant='miniVariant = !miniVariant'
               :miniVariant='miniVariant' />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
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
      miniVariant: false
    }
  }
}
</script>
