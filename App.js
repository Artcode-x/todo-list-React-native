import { StatusBar } from "expo-status-bar"
import { FlatList, StyleSheet, Text, View } from "react-native"
import Header from "./components/Header"
import { useState } from "react"
import ListItem from "./components/ListItem"
import Form from "./components/Form"

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", key: "1" },
    { text: "Помыть машину", key: "2" },
    { text: "Проверить биржу", key: "3" },
    { text: "Проверить кошелек", key: "4" },
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [{ text: text, key: Math.random().toString(36).substring(7) }, ...list]
    })
  }
  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((items) => items.key != key)
    })
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem el={item} deleteHandler={deleteHandler} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
