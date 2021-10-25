<template>
  <v-row justify="center" align="center" class='mt-16'>
    <v-col cols="12" sm="8" md="6">
      <github-api/>
      <github-front/>
    </v-col>
  </v-row>
</template>
<script>
import GithubApi from '~/components/GithubApi'
import GithubFront from '~/components/GithubFront'
export default {
  components: { GithubFront, GithubApi }
}
</script>
