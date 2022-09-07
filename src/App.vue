<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>


<script>
import mockData from './mockData';
export default {
  name: 'App',
  methods: {
    parseMockDataToData() {
      const parsedData = [];
      mockData.data.forEach((item) => {
        const parsedItem = {
          name: item[0],
          company: item[1],
          email: item[2],
          date: item[3],
          country: item[4],
          city: item[5],
        };
        parsedData.push(parsedItem);
      });
      this.$store.commit('setData', parsedData);
    }
  },
  created() {
    this.$store.commit('setMockData', mockData);
    this.parseMockDataToData();
    console.log(this.$store.getters.getData);
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
