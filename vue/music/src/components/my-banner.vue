<template>
<div class='m-banner'>
   <mt-swipe :auto="4000">
    <mt-swipe-item v-for='(item,index) in slides' :key='index'>
      <img :src="item.picUrl" alt="">
    </mt-swipe-item>

  </mt-swipe>
</div>

</template>
<script>
export default {
  props:{
    // 创建轮播的数据
    slides:{
      default:[],
      type:Array
    }
  },
}
</script>

<style scoped lang="less">
@import  '~style/index.less';
.m-banner{
  background: #fff;
  .w(375);
  height: 150px;
}
</style>
