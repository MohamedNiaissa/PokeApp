import {Text} from "react-native";
import style from "../CatchScreen/CatchScreenStyle";


const FlavorText = ({mode}) =>{
    let text;
    if(mode === "catch"){
        text= "A wild pokemon appeared !"
    }else if(mode === "failed"){
        text= "The wild pokemon ran away..."
    }else if(mode === "success"){
        text= "You captured the wild pokemon"
    }

    return(
        <Text style={style.pkTextBottom}>{text}</Text>
    )
}

export default FlavorText