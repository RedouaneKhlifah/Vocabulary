import { COLORS } from "@constants/themes";
import { TouchableOpacity, StyleSheet ,Text } from "react-native";

interface SkipProps {
    title?: string;
    onPress: () => void;
}
const Skip: React.FC<SkipProps> = ({title =  'تخطي', onPress}) => {
    return (
        <TouchableOpacity style = {styles.container} onPress={onPress}>
            <Text style = {{color : COLORS.black}}> {title}</Text>
            
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container :{
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: "5%",
        paddingLeft: "3%",
    }
})

export default Skip;