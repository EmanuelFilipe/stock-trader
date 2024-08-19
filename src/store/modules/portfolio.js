/* eslint-disable */
export default {
    state: {
        stocks: [],
        funds: 10000
    },
    getters: {
        // getters: tem acesso a todos os getters do sistema
        stockPortfolio(state, getters){
            return state.stocks.map(stock =>{
                const record = getters.stocks.find(el => el.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    },  
    actions: {
        sellStock({commit}, order) {
            commit('sellStock', order)
        }
    },
    mutations:{
        buyStock(state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(el => el.id == stockId)

            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }

            //make a purchase 
            state.funds -= stockPrice * quantity
        },
        sellStock(state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(el => el.id == stockId)

            if (record && record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                const index = state.stocks.indexOf(record)
                state.stocks.splice(index, 1)
            }

            //sum
            state.funds += stockPrice * quantity
        }
    }
}