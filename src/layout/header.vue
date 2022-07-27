<template>
  <div class="header">
    <div class="header_left">
      <MenuFoldOutlined
        v-if="collapsed"
        @click="$emit('update:collapsed', !collapsed)"
        :style="{ fontSize: '20px' }"
      />
      <MenuUnfoldOutlined
        v-else
        @click="$emit('update:collapsed', !collapsed)"
        :style="{ fontSize: '20px' }"
      />
      <!-- 面包屑 -->
      <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item v-for="item in breadList" :key="item.path">
          {{ item.meta.title }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="header_right">
      <a-dropdown :trigger="['click', 'hover']">
        <div class="avatar">
          <a-avatar :size="30">
            <template #icon>
              <img src="@/assets/logo.webp" />
            </template>
          </a-avatar>
          <span class="avatar_name">正经人</span>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <template #icon>
                <PoweroffOutlined />
              </template>
              退出登录
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PoweroffOutlined
  },
  emits: ['update:collapsed'],
  props: {
    collapsed: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  setup() {
    const route = useRoute();
    const breadList = ref<any>([]);
    const getBreadList = () => {
      breadList.value = route.matched.filter((item) => {
        return item.meta && item.meta.title;
      });
    };
    getBreadList();
    watch(route, () => {
      getBreadList();
    });
    return { breadList };
  }
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  & .header_left {
    display: flex;
    align-items: center;
    flex-grow: 1;

    & .breadcrumb {
      font-size: 14px;
      margin-left: 10px;
    }
  }

  & .header_right {
    display: flex;
    align-items: center;

    & .avatar {
      display: flex;
      align-items: center;
      cursor: pointer;

      & .avatar_name {
        margin-left: 6px;
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
}
</style>
