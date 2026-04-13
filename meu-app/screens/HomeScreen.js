import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import CardTarefa from "../components/CardTarefa";

export default function HomeScreen({ navigation, tarefas }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardTarefa titulo={item.titulo} />}
      />

      <Button
        title="Cadastrar nova tarefa"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});