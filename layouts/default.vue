<template>
  <v-app>
    <TheSnackbar/>
    <TheSideBar :mini-variant='miniVariant'
                :drawer='drawer'
                @toggleDrawer='handleToggleDrawer' />
    <TheAppBar
      :mini-variant='miniVariant'
      @toggleDrawer='drawer = !drawer'
      @toggleMiniVariant='miniVariant = !miniVariant'
    />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheSideBar from '~/components/TheSideBar'
import TheAppBar from '~/components/TheAppBar'
import TheFooter from '~/components/TheFooter'
import TheSnackbar from '~/components/TheSnackbar'

export default {
  components: { TheSnackbar, TheSideBar, TheFooter, TheAppBar },
  data() {
    return {
      drawer: false,
      miniVariant: false
    }
  },
  methods: {
    handleToggleDrawer(value) {
      this.drawer = value
    }
  }
}
</script>
