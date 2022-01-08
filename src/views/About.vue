<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <p>{{ props.msg }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'About',
    emits: ['confirm'], // 使用父组件传递的函数
    props: {
      msg: {
        type: String,
        default: 'Welcome to Your Vue.js App'
      }
    },
    setup(props, contex){
      const title = ref('About')
      const handleConfirm = () => {
        contex.emit('confirm', contex) // 发送事件
      }
      contex.expose({ // 向父组件ref提供指定的数据
        title,
        handleConfirm
      })
      return{
        title,
        props
      }
    }
  }
)
</script>
