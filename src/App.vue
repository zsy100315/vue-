<template>
  <router-view />
  <!--背景音乐-->
  <audio autoplay :src="music" @ended="autoNext" ref="audioPlayer" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { basename, join } from 'path';
import emitter from '@/utils/mitt';

export default defineComponent({
  setup() {
    const musicIndex = ref<number>(0); //记录音乐下标
    const musicList = ref<string[]>([]); //音乐列表
    const files = require.context('/public/music', false);
    files.keys().forEach((key) => {
      const name = join('/music/', basename(key));
      musicList.value.push(name);
    });

    //当前播放的音乐
    const music = computed(() => {
      return musicList.value[musicIndex.value];
    });
    //自动切换下一首
    const autoNext = () => {
      musicIndex.value = musicIndex.value < musicList.value.length - 1 ? musicIndex.value + 1 : 0;
    };

    const audioPlayer = ref<any>(null);
    //监听操作按钮的事件
    //播放暂停
    emitter.on('onOff', (value) => {
      value && audioPlayer.value.play(); //播放
      !value && audioPlayer.value.pause(); //暂停
    });
    //上一首
    emitter.on('up', () => {
      musicIndex.value = musicIndex.value != 0 ? musicIndex.value - 1 : musicList.value.length - 1;
    });
    //下一首
    emitter.on('down', () => {
      musicIndex.value = musicIndex.value != musicList.value.length - 1 ? musicIndex.value + 1 : 0;
    });
    return {
      audioPlayer,
      music,
      autoNext
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
