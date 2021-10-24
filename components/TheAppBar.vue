<template>
  <v-app-bar clipped-left app dark color="secondary">
    <v-app-bar-nav-icon @click.stop="$emit('toggleDrawer')" />
    <v-btn icon @click.stop="$emit('toggleMiniVariant')">
      <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>
    <v-toolbar-title class="font-weight-bold" v-text="title" />
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheAppBar',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: 'Controle de Estoque Zitrus',
    }
  },
}
</script>

<style scoped></style>
