import { View, Text, StyleSheet } from "react-native";

export default function CardTarefa({ titulo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
  },
});