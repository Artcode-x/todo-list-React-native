import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableHighlight } from "react-native"

export default function ListItem({ el }) {
  return (
    <TouchableHighlight>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({})
