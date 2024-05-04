import {StyleSheet} from 'react-native';
import {lightText} from '../constants/colors';

export const styles = StyleSheet.create({
  itemContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  indicator: {
    width: 50,
    height: 4,
    borderRadius: 40,
    backgroundColor: lightText,
    alignSelf: 'center',
    marginBottom: 15,
  },
  modalCOntent: {
    paddingTop: 15,
    paddingHorizontal: 16,
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    paddingBottom: 45,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB80E',
    height: 58,
    borderRadius: 8,
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.17,
    borderBottomColor: lightText,
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
  },
  checkbox: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
});
