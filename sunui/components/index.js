import Card from "../components/lib/card/index.js";
import Button from "../components/lib/button/index.js";
import Link from "../components/lib/link/index.js";
import Avatar from "../components/lib/avatar/index.js";

const install=function(Vue){
    Vue.component(Card.name,Card);

    Vue.component(Button.name,Button);
    Vue.component(Link.name,Link);
    Vue.component(Avatar.name,Avatar);
}

export default{
    install
}
