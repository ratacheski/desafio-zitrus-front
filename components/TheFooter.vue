<template>
  <v-footer
    absolute
    app
    dark
    color='footer'
  >
    <span class='font-weight-bold'>&copy; {{ new Date().getFullYear() }}</span>
    <v-spacer />
    <span>Desenvolvido por Rafael Ratacheski</span>
    <v-spacer />
    <div class='mx-2'>
      <a href='https://github.com/ratacheski' class='text-decoration-none' target='_blank'>
        <v-icon>mdi-github</v-icon>
      </a>
      <a href='https://www.linkedin.com/in/ratacheski/' target='_blank' class='text-decoration-none'>
        <v-icon>mdi-linkedin</v-icon>
      </a>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>

</style>
