<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field readonly value="Owned Cards"></v-text-field>
      </v-col>
    </v-row>
    <!-- そのうち複数 row で出すようにする -->
    <!-- 参考: https://qiita.com/taki_tflare/items/015fd98c83c5e5ac511e -->
    <v-row v-for="(row, key) in 1" :key="key">
      <div v-for="(comment, key2) in owned_cards" :key="key2">
        <v-col><v-avatar color="teal" size="56">{{comment}}</v-avatar></v-col>
        <v-divider/>
      </div>
    </v-row>
    <v-btn elevation="2" @click="submit">Submit!</v-btn>
  </div>
</template>

<script>
import {query, collection, doc, where, orderBy, getDocs, updateDoc} from "firebase/firestore";
import {db} from '../plugins/firebase';

export default {
  name: 'SubmittedCards',
  data: () => ({
    owned_cards: [],
  }),

  mounted() {
    this.getCards();
  },

  methods: {
    async getCards() {
      // TODO: 決め打ちやめる
      const roomId = 'dLgQh5FaRocuKWu0S9Ej';
      const userId = 'BJVttCWPkndVyhDaZciG';
      const ownedCards = [];
      // TODO: DB index の整理
      const q = query(collection(db, 'rooms', roomId, 'cards'), where("user", "==", userId), where("submitted", "==", false));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}, ${doc.data().id}`);
        ownedCards.push(doc.id);
      });
      this.owned_cards = ownedCards;
    },
    async submit() {
      const roomId = 'dLgQh5FaRocuKWu0S9Ej';
      const id = 46;
      const d = doc(db, 'rooms', roomId, 'cards', id);
      await updateDoc(d, {submitted: true});
    }
},
}
</script>
