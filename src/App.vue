<template>
  <header>
    <div class="logo-wrapper">
      <router-link :to="{name: 'home'}">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />
        <h1>Country API</h1>
      </router-link>
    </div>
    <nav>
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
      <RouterLink :to="{name: 'about'}">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9000;
  background-color: white;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.222);
}
header nav{
  display: flex;
}

header nav a{
  margin-left: 10px;
  color: gray;
}
header nav .router-link-active{
  color: hsla(160, 100%, 37%, 1);
}

.logo-wrapper a{
  display: flex;
  align-items: center;
}
</style>
