<template>
  <form class="space-y-4" @submit.prevent="submitLogin">
    <img src="@/assets/login.jpg" class="max-w-xs mx-auto rounded-lg" alt="" />
    <div>
      <label for="username" class="block text-gray-700">Username</label>
      <input
        type="text"
        id="username"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        placeholder="Enter your username"
        v-model="form.username"
      />
    </div>
    <div>
      <label for="password" class="block text-gray-700">Password</label>
      <input
        type="password"
        id="password"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
        placeholder="Enter your password"
        v-model="form.password"
      />
    </div>
    <button
      type="submit"
      class="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Login
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    };
  },

  methods: {
    submitLogin() {
      // $fetch("/login", {
      //   // $fetch(this.$config.public.baseURL + "auth/login", {
      //   method: "POST",
      //   body: {
      //     username: "mor_2314",
      //     password: "83r5^_",
      //   },
      // }).then((res) => console.log(res));
    },
  },
};
</script>

<style></style>
