<template>
    <div class="container" :style="'width:'+width">
        <div :class="['s-avatar',shape]" >
        <img :src="imgSrc" />
        </div>
    </div>
   


</template>

<script>
export default{
    name:"s-avatar",
    props:{
        imgSrc:{
            type:String,
            default:require('../../../assets/dog.png'),
        },

        shape:{
            type:String,
            default:"",
        },
        width:{
            type:String,
            default:'100px',
        }

    }
}
</script>