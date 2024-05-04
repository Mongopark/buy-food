import {StyleSheet} from 'react-native';
import {backgroundColor} from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },

  screenContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    marginLeft: 10,
  },
});
