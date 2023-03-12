<template>
    <div class="container">
       <div class="alert">
        <div class="alert-title">消息提示</div>
        <div class="alert-context">我是弹窗</div>
       </div>
    </div>
   


</template>

<script>
export default{
    name:"s-alert",
    props:{
        type:{
            type:String,
            default:"",
        },

    }
}
</script>