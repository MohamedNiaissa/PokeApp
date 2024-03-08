import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabBtn: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    fontFamily: 'PressStart2p-Regular',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  library: {
    flex: 1,
    flexDirection: 'column',
  },
  tabView: {
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  pokeList: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    maxHeight: '80%',
  },
  pokeItem: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  pokeItemImg: {
    height: 50,
    width: 50,
  },
  pokePoket: {},
});

export default styles;
