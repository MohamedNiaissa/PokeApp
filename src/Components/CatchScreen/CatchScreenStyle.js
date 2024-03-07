import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  pokemon: {
    // maybe find a way to switch to %
    width: 340,
    height: 340,
  },
  flex: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  pkText: {
    textAlign: 'center',
    fontFamily: 'PressStart2P-Regular',
    color: 'black',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 2,
    padding: 9,
    fontSize: 19,
    marginBottom: 20,
  },
  pkTextBottom: {
    textAlign: 'center',
    fontFamily: 'PressStart2P-Regular',
    color: 'black',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 2,
    padding: 9,
    fontSize: 19,
    marginBottom: 30,
  },
  pokeView: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    fontSize: 19,
    marginBottom: 20,
  },
  pokeViewText: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'PressStart2P-Regular',
  },
  choiceDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    fontFamily: 'PressStart2P-Regular',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d099d9',
    textDecorationColor: 'black',
    padding: 3,
    width: '43%',
    height: 58,
  },
  buttonText: {
    fontFamily: 'PressStart2P-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  soundImg: {
    height: 50,
    width: 50,
    opacity: 0.5,
  },
});

export default style;