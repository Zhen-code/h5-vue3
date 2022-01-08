<template>
  <div class="home" ref="child">
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model:show="show" @confirm="onConfirm" /> 
    <van-button @click="handleClick">提交</van-button>
  </div>
</template>

<script setup> // 在 <script setup> 中可以直接使用 Vant 组件，不需要进行组件注册。
// import { Button } from 'vant';

import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
  msg: {
    type: String,
    default: 'Welcome to Your Vue.js App'
  }
})
const emits = defineEmits(['confirm'])
const date = ref('')
const show = ref(false)
const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
const child = ref(null)
const onConfirm = (value) => {
      show.value = false
      date.value = formatDate(value)
}
const handleClick = () => {
  emits('confirm', {
    val: 'hello word'
  })
}
</script>

<style lang="scss" scoped>
  
</style>
