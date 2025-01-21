import { View } from "react-native";

interface DividerProps {
    size? : number;
    color? : string;
    }
const Divider:React.FC<DividerProps>  = ({size  = 1, color  ='black'} ) => {
  return <View style={{width: '100%' ,height:size , backgroundColor : color}}></View>;
}

export default Divider;