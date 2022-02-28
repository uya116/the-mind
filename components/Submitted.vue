<template>
  <div>
  <v-list three-line>
    <template v-for="(comment, index) in rooms">
      <v-list-item
          :key="index"
      >
      <v-avatar
        color="teal"
        rounded
        size="56"
        tile
      ></v-avatar>
      </v-list-item>
    </template>
  </v-list>
  <v-btn rounded color="primary" dark @click="logoutRoom">退室する</v-btn>
  </div>
</template>

<script>
export default {
  name: 'SubmittedCards',
  data: () => ({
    submitted_cards: [],
  }),

  mounted() {
    // const room_id = this.$route.params.id;
    const roomId = 'dLgQh5FaRocuKWu0S9Ej';
    db.collection('rooms').doc(roomId).collection('cards')
      .onSnapshot(() => {
        this.getCards();
      });
  },

  methods: {
    getCards() {
      db.collection('rooms').doc(room_id).collection('cards')
        .where('submitted', '==', true)
        .orderBy('id', 'desc')
        .get()
        .then(querySnapshot => {
          const submittedCards = [];
          querySnapshot.forEach(doc => {
            const data = doc.data();
            submittedCards.push(data);
          });
          this.submitted_cards = submittedCards;
        })
        .catch(error => {
          process.stdout(error);
        });
    },
  },
}
</script>
