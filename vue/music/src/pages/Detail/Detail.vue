<template>
  <div class='detail'>
    <span @click='back'>back</span>
    <h3>{{name}}</h3>
    <div class='img' :style='{"background-image":`url(${img})`}' ref='img'>
      <div class='filter'></div>
    </div>
    <!-- 歌曲列表滚动层 -->
    <div class='wrapper' ref='wrapper'>
      <ul class='content'>
        <li v-for='(item,index) in list' :key='index'
            @click="goPlay(index)"
        >
          <p>{{item.songname}}</p>
          <p>
            <span v-for='(sItem,sIndex) in item.singer' :key='sIndex'>{{sItem.name}}</span>
            {{item.albumname}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getSongListByMid,getSongPurl} from 'api/singer.js'
import {getAvator,getAlbum} from 'pages/Singer/singer.js'
import {mapMutations} from 'vuex'
import BS from 'better-scroll'
export default {
  data(){
    return {
      name:'',
      img:'',
      list:[]
    }
  },
  methods:{
    ...mapMutations(['addSongList','changeCurrentSongIndex','changeFullScreen']),
    initBs(){
      let wrapper = this.$refs.wrapper
      let img = this.$refs.img
      let imgHeight=img.clientHeight
      this.bs=new BS(wrapper,{probeType:3})
      this.bs.on('scroll',({y})=>{
        if(y>0){
           //向下拉动
           let precent=1+y/imgHeight
           img.style.zIndex=1
           img.style.transform=`scale(${precent})`

        }else{
           //向上
            img.style.zIndex=0
           //  距离顶部40px
           if(Math.abs(y)>imgHeight-40){
             img.style.zIndex=9
             img.style.padding=0
             img.style.height='40px'
           }else{
             img.style.height='0px'
             img.style.paddingTop='70%'
           }
        }
      })
    },
    goPlay(index){
      // 将当前的歌单信息添加到vuex里
      this.addSongList(this.list)
      this.changeCurrentSongIndex(index)
      this.changeFullScreen(true)
    },
    back(){
      this.$router.go(-1)
    },
    getSongData(list){
      console.log(list)
      let arr=list.map((item,index)=>{
        let {albumdesc,albummid,albumname,singer,songmid,songname,interval}=item.musicData
        let albumUrl=getAlbum(albummid)
        // 根据id 获取图片
        return  {albumdesc,albummid,albumname,singer,songmid,songname,albumUrl,interval}
      })
      return arr
    }
  },
  created(){
    let {mid}=this.$route.params
    console.log(this.$route.params)
    getSongListByMid(mid).then((res)=>{
      console.log(res)
      
      this.name=res.data.singer_name
      this.img=getAvator(res.data.singer_mid)
      let list=this.getSongData(res.data.list)
      // 获取真实的url
      getSongPurl(list).then((res)=>{
        this.list=res
        // 初始化bs
        this.$nextTick(()=>{
          this.initBs()
        })
      })
    })
  }
}
</script>
<style lang="less" scoped>
  @import '~style/index.less';
  .detail{
    .fixed(0,0,0,0);
    background: #222;
    .img{
      position: relative;
      .w(375);
      height: 0px;
      padding-top:70%; 
      background-size:cover; 
      transform-origin: top;
      .filter{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(7,17,27,.3);
      }
    }
    .wrapper{
      position: fixed;
      top:270px;
      bottom: 0px;
      .content{
        background: #222;
      }; 
      .w(375);
      background: red;
    }
  }
</style>