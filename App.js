import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CadastroScreen from "./screens/CadastroScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(tarefa) {
    setTarefas([...tarefas, tarefa]);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} tarefas={tarefas} />}
        </Stack.Screen>

        <Stack.Screen name="Cadastro">
          {(props) => (
            <CadastroScreen {...props} adicionarTarefa={adicionarTarefa} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}