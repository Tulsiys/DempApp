import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';

export default function TextInputFiled(props) {
	const { labelName, defaultValue, control, rules, error, name } = props;

	return (
		<View>
			<Text style={styles.label}>{labelName}</Text>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						{...props}
						style={styles.input}
						onBlur={onBlur}
						value={value}
						onChangeText={e => onChange(e)}
					/>
				)}
				defaultValue={defaultValue}
				rules={rules}
			/>
			{error && (<Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>)}
		</View>
	);
}

const styles = StyleSheet.create({
	label: {
		color: 'white',
		margin: 20,
		marginLeft: 0,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: 20,
		padding: 8,
		backgroundColor: '#0e101c',
	},
	input: {
		backgroundColor: 'white',
		borderColor: 'none',
		height: 40,
		padding: 10,
		borderRadius: 4,
	},
})  