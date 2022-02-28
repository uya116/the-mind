<template>
  <v-app>
    <v-container>
      <Submitted/>
    </v-container>
  </v-app>
</template>

<script>
import Submitted from '~/components/Submitted.vue'
export default {
  name: 'IndexPage',
  components: { Submitted },
}
</script>
