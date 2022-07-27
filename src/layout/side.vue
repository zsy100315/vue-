<template>
  <div class="menu__logo">
    <div class="menu__logo-icon">
      <img src="@/assets/logo.webp" alt=""/>
    </div>
    <span v-if="!collapsed">Daisy</span>
  </div>
  <a-menu
    mode="inline"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    theme="dark"
  >
    <a-menu-item key="home">
      <template #icon>
        <HomeOutlined />
      </template>
      <router-link to="/home">首页</router-link>
    </a-menu-item>
    <a-sub-menu key="echarts" title="图表">
      <template #icon>
        <BarChartOutlined />
      </template>
      <a-menu-item key="map">
        <router-link to="/echarts/map">地图</router-link>
      </a-menu-item>
      <a-menu-item key="viewMap">
        <router-link to="/echarts/viewMap">视图映射</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { HomeOutlined, BarChartOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    HomeOutlined,
    BarChartOutlined
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const openKeys = ref<string[]>([]);
    const selectedKeys = ref<string[]>([]);
    return {
      openKeys,
      selectedKeys
    };
  }
});
</script>
<style lang="scss" scoped>
.menu__logo {
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  & .menu__logo-icon {
    width: 40px;
    margin-right: 8px;

    img {
      display: block;
      width: 100%;
    }
  }

  & span {
    display: inline-block;
    font-size: 20px;
    color: #fff;
  }
}
</style>
