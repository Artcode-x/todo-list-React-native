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
    // list - это весь список, что выше
    setListOfItems((list) => {
      // Будем возвращать новый список,
      return [
        // уст-ем уникальное зн-ие ключа:

        // обр-ся к ф-ии рандом, получаем случайное число, затем приводим к формату строки и в конце обрезаем чтобы пол-тьб набор из 7 случайных символов.
        // теперь при доб-ии каждого сл-ого эл-та к нему будет доб-ся случ-ый ключ
        { text: text, key: Math.random().toString(36).substring(7) },
        // передаем также тот список который есть на данный момент с пом-ю оператора spread:
        ...list,
      ]
    })
  }

  // получаем ключ того эл-та на который нажали
  const deleteHandler = (key) => {
    setListOfItems((list) => {
      //  с пом-ю метода filter возвращаем новый список, будет возвращать все эл-ты,  но без эл-та с полученным ключом
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
