<template>
    <div class="s-button-container">
   <div :class="['s-button',type,size]" >
    <div :class="['s-button-text',size]" @click="clikAlert">
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
       clikAlert() {
        console.log('okkkk');
          alert("222");
       }

    }
}
</script>

