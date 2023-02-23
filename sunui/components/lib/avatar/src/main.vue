<template>
    <div :class="['s-avatar',shape]" >
        <img src="../../../assets/dog.png" :style="'width:'+width+'px;'">
    </div>


</template>

<script>
export default{
    name:"s-avatar",
    props:{
       
        shape:{
            type:String,
            default:"",
        },
        width:{
            type:Number,
            default:200,
        }

    }
}
</script>