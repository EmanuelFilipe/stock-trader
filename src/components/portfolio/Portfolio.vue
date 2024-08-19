<template>
  <div>      
      <!-- a linha pode quebrar, usando o wrap -->
      <v-layout row wrap>
          <Stock v-for="stock in stocks" :key="stock.id"
              :stock="stock" />
      </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";
export default {
  name: "Portfolio",
  components: { Stock },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
};
</script>