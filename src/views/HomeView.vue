<template>
  <main>
    <!-- <country-listing /> -->
    <div class="wrapper">
      <router-link 
        v-for="country in countries" :key="country.name.official"
        :to="{name: 'countryDetail', params: {id: country.cca2} }">{{ country.name.official }}
      </router-link>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      countries: null
    }
  },
  async created() {
    try {
      await axios.get('https://restcountries.com/v3.1/all').then(res => (this.countries = res.data))
    } catch (error) {
      console.log(error);
    }
  }
}

</script>

<style scoped>
  .wrapper{
    padding: 0;
  }
  .wrapper a{
    display: block;
    padding: 1rem;
    background-color: rgba(128, 128, 128, 0.126);
    border-radius: 8px;
    cursor: pointer;
  }
  .wrapper a:nth-child(odd){
    background-color: white;
  }
  .wrapper a:hover{
    background-color: rgba(128, 128, 128, 0.301);;
  }
  .wrapper a{
    color: inherit;
  }
</style>
