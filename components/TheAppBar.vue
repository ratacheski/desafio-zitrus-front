<template>
  <v-app-bar
    fixed
    app
  >
    <v-app-bar-nav-icon @click.stop="$emit('toggleDrawer')" />
    <v-btn
      icon
      @click.stop="$emit('toggleMiniVariant')"
    >
      <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheAppBar',
  props: {
    miniVariant: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>

</style>
