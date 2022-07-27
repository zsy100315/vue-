<template>
  <a-layout class="layout">
    <!-- 侧边栏 -->
    <a-layout-sider width="180" collapsible :trigger="null" v-model:collapsed="collapsed">
      <Side :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <!-- 头部 -->
      <a-layout-header class="header">
        <Header v-model:collapsed="collapsed" />
      </a-layout-header>
      <!-- 内容 -->
      <a-layout-content class="container">
        <Container />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Side from './side.vue';
import Header from './header.vue';
import Container from './container.vue';

export default defineComponent({
  components: {
    Side,
    Header,
    Container
  },
  setup() {
    const collapsed = ref<boolean>(false);
    return {
      collapsed
    };
  }
});
</script>
<style lang="scss" scoped>
.ant-layout-header {
  padding: 0;
}

.layout {
  overflow: hidden;
  height: 100vh;

  & .header {
    height: 50px;
    background-color: #fff;
  }

  & .container {
    margin: 5px 0;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  & .container::-webkit-scrollbar {
    width: 6px;
  }

  & .container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #c1c1c1;
  }

  & .container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d8d8d8;
    background: #ededed;
  }
}
</style>
