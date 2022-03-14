<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field readonly value="Submitted Cards"></v-text-field>
      </v-col>
    </v-row>
    <!-- そのうち複数 row で出すようにする -->
    <!-- 参考: https://qiita.com/taki_tflare/items/015fd98c83c5e5ac511e -->
    <v-row v-for="(row, key) in 1" :key="key">
      <div v-for="(comment, key2) in submitted_cards" :key="key2">
        <v-col><v-avatar color="teal" size="56">{{comment}}</v-avatar></v-col>
        <v-divider/>
      </div>
    </v-row>
  </div>
</template>

<script>
import {query, collection, where, orderBy, getDocs, documentId} from "firebase/firestore";
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
      const q = query(collection(db, 'rooms', 'dLgQh5FaRocuKWu0S9Ej', 'cards'), where("submitted", "==", true), orderBy("number"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}, ${doc.data().id}`);
        submittedCards.push(doc.id);
      });
      this.submitted_cards = submittedCards;
    },
  },
}
</script>
