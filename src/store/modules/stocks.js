import stocks from "@/data/stocks"

export default {
    state: {
        stocks: [],
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    },
    actions: {
        buyStock({commit}, order) {
            commit('buyStock', order)
        },
        initStocks({commit}) {
            commit('setStocks', stocks)
        },
        randomizeStocks({commit}) {
            commit('randomizeStocks')
        }
    },
    mutations:{
        setStocks(state, payload) {
            state.stocks = payload
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.42))
            });
        }
    },
    
}