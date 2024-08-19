<template>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn text to="/">Home</v-btn>
            <v-btn text to="/portfolio">Portfolio</v-btn>
            <v-btn text to="/stocks">Stocks</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text @click="endDay">Ending Day</v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                        Save & Load
                    </v-btn>
                </template>
                <template>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Save Data</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Load Data</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
            </v-menu>
            <v-layout align-center>
                <span class="text-uppercase grey--text text--darken-2">
                    Balance: {{ funds | currency }}
                </span>
            </v-layout>
        </v-toolbar-items>

    </v-app-bar>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'Header',
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },
        methods: {
            ...mapActions(['randomizeStocks']),
            endDay() {
                this.randomizeStocks()
            }
        }
    }
</script>

<style scoped>

</style>