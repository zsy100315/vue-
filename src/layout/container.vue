<template>
  <div class="container">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route" />
    </router-view>
    <Player class="player"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Player from "./player.vue";

export default defineComponent({
  name: 'Container',
  components:{
    Player
  }
});
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
}
.player{
  position: fixed;
  top:50%;
  right: 0;
  transform: translateY(-50%);
  z-index:1000;
}
</style>
