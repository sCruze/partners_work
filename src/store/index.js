import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import request from "@/hooks/request";

export default new Vuex.Store({
  actions: {
    async fetchPartners(ctx) {
      const response = await request("partners/", "GET");

      ctx.commit("updatePartners", response);
    },
    async blockPartner(ctx, idPartner) {
      await request(`partner/${idPartner}/block`, "GET");
      console.log("block", idPartner);
      ctx.dispatch("fetchPartners");
    },
    async unblockPartner(ctx, idPartner) {
      console.log("id", idPartner);
      await request(`partner/${idPartner}/unblock`, "GET");

      ctx.dispatch("fetchPartners");
    },
  },
  mutations: {
    updatePartners(state, partners) {
      state.partners = partners;
      state.counterPartners = partners.length;

      state.lengthPage =
        state.counterPartners % 10 > state.counterPartners / 10
          ? Math.floor(state.counterPartners / 10 + 1)
          : Math.floor(state.counterPartners / 10);
    },
    changeEndPoint(state, num) {
      state.endPoint = state.endPoint + num;
      state.lengthPage = state.lengthPage - 1;
    },
    selectSlide(state, num) {
      if (num !== state.counterSlide) {
        if (num === 1) {
          state.counterSlide = 1;
          state.startingPoint = 0;
          state.endPoint = 10;
        } else if (
          num > state.counterSlide &&
          num !== 1 &&
          num !== state.lengthPage
        ) {
          state.counterSlide = state.counterSlide + 1;
          state.startingPoint = state.endPoint;
          state.endPoint = state.endPoint + 10;
        } else if (
          num < state.counterSlide &&
          num !== 1 &&
          num !== state.lengthPage
        ) {
          state.counterSlide = state.counterSlide - 1;
          state.endPoint = state.startingPoint;
          state.startingPoint = state.startingPoint - 10;
        } else if (num === state.lengthPage) {
          state.counterSlide = num;
          state.startingPoint = Math.floor((num - 1) * 10);
          state.endPoint = Math.floor(num * 10);
        }
      }
    },
  },
  state: {
    partners: [],
    startingPoint: 0,
    endPoint: 10,
    counterPartners: 0,
    counterSlide: 1,
    lengthPage: 0,
  },
  getters: {
    allPartners(state) {
      return state.partners;
    },
    lengthPartners(state) {
      return state.counterPartners;
    },
    points(state) {
      return { start: state.startingPoint, end: state.endPoint };
    },
    counterSlide(state) {
      return state.counterSlide;
    },
    lengthPage(state) {
      return state.lengthPage;
    },
  },
});
