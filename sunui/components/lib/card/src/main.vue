<template>
    <div class="s-card">
      <div class="s-card-img" >
        <img :src="imgSrc" alt="">
        <slot></slot>
      </div>

      <div class="s-card-summary" >
       {{summary}}
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
            default:require("../../../assets/dogs.jpg"),
        },
        imgHeight:{//图片宽度
            type:Number,
            defalut:0,
        },
        summary:{//卡片概要
            type:String,
            default:'summary'
        }
    }
}
</script>

