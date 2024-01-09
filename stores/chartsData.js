export const useChartsData = defineStore("useChartsData", {
  state: () => {
    return {
      loading: false,
      market_size_1: {},
    };
  },

  actions: {
    async getData(slug) {
      this.loading = slug;
      const { data, pending, error, refresh } = await useFetch(
        `/sectors/${useGlobalStore().activeSector}/chart?slug=${slug}`
      ).catch((err) => {
        console.log(err);
      });
      this[slug] = data;
      console.log("this", this.state);
      this.loading = false;
      return { data, pending, error, refresh };
    },
  },
});
