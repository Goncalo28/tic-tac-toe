import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcomeText: { paddingBottom: 20, fontSize: 30 },
  gameText: { paddingBottom: 50, fontSize: 30 },
  startButton: {
    width: 270,
    height: 60,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  startText: { fontSize: 20, fontWeight: '500', color: 'white' },
});

export default styles;
