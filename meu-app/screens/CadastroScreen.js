import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function CadastroScreen({ navigation, adicionarTarefa }) {
  const [titulo, setTitulo] = useState("");

  function salvar() {
    if (!titulo.trim()) {
      Alert.alert("Erro", "O campo tarefa é obrigatório.");
      return;
    }

    adicionarTarefa({ titulo });
    setTitulo("");
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite a tarefa"
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
});