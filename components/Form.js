import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"

export default function Form({ addHandler }) {
  const [value, setValue] = useState("")
  const onChange = (text) => {
    setValue(text)
  }
  return (
    <View>
      {/* обработчик события onChangeText - будет срабатывать каждый раз, когда мы будем что то вводить в поле */}
      <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите планируемую задачу" />
      <Button color="green" title="Добавить задачу" onPress={() => addHandler(value)} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,

    //отступы по вертикали: сверху и снизу:
    marginVertical: 30,
    //отступы по бокам:
    marginHorizontal: "20%",
    width: "60%",
  },
})
