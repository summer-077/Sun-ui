import Card from "./src/main.vue"
import "../../css/card.scss"

Card.install =function(Vue){
    Vue.component(Card.name,Card);
}

export default Card