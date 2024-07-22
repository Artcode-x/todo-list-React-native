import { StatusBar } from "expo-status-bar"
import { FlatList, StyleSheet, Text, View } from "react-native"
import Header from "./components/Header"
import { useState } from "react"
import ListItem from "./components/ListItem"

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", index: 1 },
    { text: "Помыть машину", index: 2 },
    { text: "Проверить биржу", index: 3 },
    { text: "Проверить кошелек", index: 4 },
  ])
  return (
    <View>
      <Header />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => <ListItem el={item} />} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
