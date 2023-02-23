import Link from"./src/main.vue"
import "../../css/link.scss"

Link.install=function(Vue)
{
    Vue.component(Link.name,Link);
}

export default Link