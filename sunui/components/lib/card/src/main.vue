<template>
    <div class="s-card">
      <div :class="s-card-img" >
        <img :src="imgSrc" alt="">
        图片
      </div>

      <div class="s-card-summary">
     summary
      </div>
    </div>
</template>

<script>
export default {
    name:'s-card',
    props:{
        width:{
            type:Number,
            defalut:0,
            
        },
        imgSrc:{//图片资源地址
            type:String,
            default:'../../../assets/dogs.png',
        },
        imgHeight:{//图片宽度
            type:Number,
            defalut:0,
        },
        summary:{//卡片概要
            type:String,
            default:'',
        }
    }
}
</script>

