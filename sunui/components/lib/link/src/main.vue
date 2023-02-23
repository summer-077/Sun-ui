<template>
    <div class="s-link-container">
        <div :class="['s-link',type]">
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default{
    name:"s-link",
    props:{
        type:{
            type:String,
            default:"primary",
        }
        
    }
}
</script>
<style link="../components/css/link.scss"></style>