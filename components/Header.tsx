import { Text, View, StyleSheet, TextInput } from 'react-native'
export default function Header() {
  return (
    <View style={styles.box}>
      <Text style={styles.txt}>微信</Text>
      <TextInput style={styles.input} placeholder='搜索' editable={false} />
    </View>
  )
}
const styles = StyleSheet.create({
  box: {
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    rowGap: 10,
    backgroundColor: '#ddd',
  },
  txt: {
    fontSize: 18,
  },
  input: {
    width: '100%',
    height: 35,
    margin: 12,
    borderWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
})