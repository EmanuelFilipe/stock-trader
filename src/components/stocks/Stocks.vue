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
import Stock from './Stock.vue';
    export default {
        name: 'Stocks',
        components: { Stock },
        computed: {
            stocks(){
                return this.$store.getters.stocks
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>