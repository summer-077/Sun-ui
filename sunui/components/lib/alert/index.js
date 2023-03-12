import Alert from"../alert/src/main.vue"
import "../../css/alert.scss"

Alert.install=function(Vue){
    Vue.component(Alert.name,Alert);
}

export default Alert