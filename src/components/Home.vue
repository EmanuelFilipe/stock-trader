<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negotiate and Consult your stocks</h1>
        <v-sheet :elevation="6" class="pa-2 primary">
            <v-icon class="white--text mr-3"></v-icon>
            <span class="headline white--text font-weight-light">
                You can Save & Load the data</span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 success mt-3">
            <v-icon class="white--text mr-3"></v-icon>
            <span class="headline white--text font-weight-light">
                Click in "End day" to start a new day</span>
        </v-sheet>
        <v-divider class="my-4"></v-divider>
        <p class="display-1"><strong>Your Balance:</strong> {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>

<style scoped>

</style>