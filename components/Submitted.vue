<template>
  <div>
  <v-list three-line>
    <template v-for="(comment, index) in submitted_cards">
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
  </div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
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
      const querySnapshot = await getDocs(collection(db, 'rooms'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
      // const querySnapshot = await getDocs(collection(db, "rooms").doc(room_id).collection('cards')
      //   // .where('submitted', '==', true)
      //   // .orderBy('id', 'desc')
      // );
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      //   const data = doc.data();
      //   submittedCards.push(data);
      // });
      // this.submitted_cards = submittedCards;
    },
  },
}
</script>
