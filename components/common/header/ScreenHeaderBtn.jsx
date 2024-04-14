import { Image, TouchableOpacity } from "react-native";

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handelPress }) => {
	return (
		<TouchableOpacity style={styles.btnContainer} onPress={handelPress}>
			<Image
				source={iconUrl}
				resizeMode="cover"
				style={styles.btnImg(dimension)}
			/>
		</TouchableOpacity>
	)
}
// 34:37

export default ScreenHeaderBtn
