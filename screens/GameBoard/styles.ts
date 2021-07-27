import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    width: 270,
    borderRadius: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  boardContainer: {
    width: 270,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 50,
  },
  restartButton: {
    width: 270,
    borderRadius: 20,
    height: 60,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  restartButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});

export default styles;
