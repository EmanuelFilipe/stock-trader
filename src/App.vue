<template>
  <v-app>
    <Header />
    <v-main>
      <v-container class="mt-8">
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: "App",
  components: { Header },
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch('initStocks')
  }
};
</script>

<style scoped>
@keyframes slide-in {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0px); opacity: 1; }
}

@keyframes slide-out {
  from { transform: translateY(0px); opacity: 1; }
  to { transform: translateY(-30px); opacity: 0; }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
