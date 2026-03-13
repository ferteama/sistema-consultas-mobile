import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.xpto}>2CCA</Text>
      <Text style={styles.subtitulo}>Aplicativo Marcação de Consultas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#470461',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpto : {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  }
});
