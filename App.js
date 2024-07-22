import { StatusBar } from "expo-status-bar"
import { FlatList, StyleSheet, Text, View } from "react-native"
import Header from "./components/Header"
import { useState } from "react"
import ListItem from "./components/ListItem"
import Form from "./components/Form"

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", index: 1 },
    { text: "Помыть машину", index: 2 },
    { text: "Проверить биржу", index: 3 },
    { text: "Проверить кошелек", index: 4 },
  ])

  const addHandler = (text) => {
    // list - это весь список, что выше
    setListOfItems((list) => {
      // Будем возвращать новый список,
      return [
        { text: text, index: 5 },
        // передаем также тот список который есть на данный момент с пом-ю оператора spread:
        ...list,
      ]
    })
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => <ListItem el={item} />} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
