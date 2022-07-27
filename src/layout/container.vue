<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Container'
});
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
}
</style>
