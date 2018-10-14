import Vue from "vue";
import Vuex from "vuex";
import state from "./state.js";
import action from "./action.js";
import mutations from "./mutation.js";

Vue.use(Vuex);


export default new Vuex.Store({
    state:state,
    actions:action,
    mutations:mutations,
});