<template>
    <div class="s-button-container">
   <div :class="['s-button',type,size]" >
    <div :class="['s-button-text',size]" >
       <slot></slot>
    </div>
   </div>
</div>
</template>

<script>
export default{
    name: "s-button",
    props:{
        type:{
            type:String,
            defalut:'',
        },
        disabled:{
            type:Boolean,
            default:false,
        },
        size:{
            type:String,
            defalut:'medium',
        }

    },
        methods:{
      
    }
}
</script>

