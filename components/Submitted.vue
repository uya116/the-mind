<template>
  <div>
  <v-list three-line>
    <template v-for="(comment, index) in submitted_cards">
      <v-list-item
          :key="index"
      >
      <v-avatar
        color="teal"
        size="56"
      ></v-avatar>
      </v-list-item>
    </template>
  </v-list>
  </div>
</template>

<script>
import {query, collection, where, getDocs} from "firebase/firestore";
import {db} from '../plugins/firebase';

export default {
  name: 'SubmittedCards',
  data: () => ({
    submitted_cards: [],
  }),

  mounted() {
    this.getCards();
  },

  methods: {
    async getCards() {
      const submittedCards = [];
      const q = query(collection(db, 'rooms', 'dLgQh5FaRocuKWu0S9Ej', 'cards'), where("submitted", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}, ${doc.data().id}`);
        submittedCards.push(doc.data().id);
      });
      this.submitted_cards = submittedCards;
    },
  },
}
</script>
