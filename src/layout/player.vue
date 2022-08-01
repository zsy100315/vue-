<template>
  <div class="player">
    <div class="player_item">
      <StepBackwardOutlined :style="{ fontSize: '30px' }" @click="up" />
    </div>
    <div class="player_item">
      <PlayCircleOutlined :style="{ fontSize: '30px' }" @click="play" />
    </div>
    <div class="player_item">
      <StepForwardOutlined :style="{ fontSize: '30px' }" @click="down" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  StepBackwardOutlined,
  PlayCircleOutlined,
  StepForwardOutlined
} from '@ant-design/icons-vue';
import emitter from '@/utils/mitt';

export default defineComponent({
  components: {
    StepBackwardOutlined,
    PlayCircleOutlined,
    StepForwardOutlined
  },
  setup() {
    const ctrl = ref<boolean>(true);

    //播放暂停
    const play = () => {
      ctrl.value = !ctrl.value;
      emitter.emit('onOff', ctrl.value);
    };
    //上一首
    const up = () => {
      emitter.emit('up');
    };
    //下一首
    const down = () => {
      emitter.emit('down');
    };
    return {
      play,
      up,
      down
    };
  }
});
</script>

<style scoped lang="scss">
.player {
  //width: 20px;
  //height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid #c1c1c1;
  //box-shadow: 10px 10px 10px #c1c1c1 , -10px -10px 10px #c1c1c1;
  //box-shadow: 0 10px 10px #000, 0 -10px 10px #000, -10px 0 10px #000;
  background-color: #ffffff;

  & .player_item {
    padding: 5px;
  }
}
</style>