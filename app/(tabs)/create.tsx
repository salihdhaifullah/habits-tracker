import { ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import db from "../db";
import HabitForm from "./habitForm";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <HabitForm onSave={(h) => {
        db.transaction((tx) => {
          h.create(tx)
        })
      }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  }
});