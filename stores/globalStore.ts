export const useGlobalStore = defineStore("myStore", {
  state: () => {
    return {
      variable1: "value1",
      variable2: "value2",
      activeSideTab: { id: 1 },
    };
  },

  getters: {
    getter1: (state) => state.variable1.toUpperCase(),
  },

  actions: {
    action1() {
      // logic for action1
    },
  },
});
