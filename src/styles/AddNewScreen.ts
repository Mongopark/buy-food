import {StyleSheet} from 'react-native';
import {backgroundColor} from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  detailsColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    width: '48%',
  },

  btn: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingHorizontal: 15,
  },
});
