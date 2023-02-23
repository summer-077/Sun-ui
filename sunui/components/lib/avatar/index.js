import Avatar from"../avatar/src/main.vue"
import "../../css/avatar.scss"
Avatar.install=function(Vue){
    Vue.component(Avatar.name,Avatar);
}

export default Avatar