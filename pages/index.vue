<template>
  <v-app>
    <v-container>
      <Submitted/>
      <Owned/>
    </v-container>
  </v-app>
</template>

<script>
import Submitted from '~/components/Submitted.vue'
import Owned from '~/components/Owned.vue'
export default {
  name: 'IndexPage',
  components: { Submitted, Owned },
}
</script>
