import Vue from 'vue';
import Vuex, { Payload } from 'vuex';

Vue.use(Vuex);

export interface RoutePayload extends Partial<Payload> {
  newRoute: string;
}

export default new Vuex.Store({
  state: {
    cur_route: window.location.pathname,
  },
  mutations: {
    updateRoute(state, payload: RoutePayload) {
      state.cur_route = payload.newRoute;
    },
  },
  actions: {

  },
});
