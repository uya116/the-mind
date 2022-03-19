<template>
  <v-app>
    <v-container>
      <Cards/>
    </v-container>
  </v-app>
</template>

<script>
import Cards from '~/components/Cards.vue'
export default {
  name: 'IndexPage',
  components: { Cards },
}
</script>
