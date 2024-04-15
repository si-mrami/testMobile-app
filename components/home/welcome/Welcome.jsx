import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobTypes = ["full-time", "part-time", "freelancer"]

const Welcome = () => {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState("full-time");
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Mrami</Text>
				<Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput style={styles.searchInput} placeholder='Search for Jobs' value='' onChange={() => { }} />
				</View>
				<TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
					<Image source={icons.search} style={styles.searchBtnImage} resizeMode='contain' />
				</TouchableOpacity>
			</View>
			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => { setActiveJobType(item) }}
						>
							<Text>{item}</Text>
						</TouchableOpacity>

					)}
					horizontal
				/>
			</View>
		</View>
	)
}

export default Welcome
