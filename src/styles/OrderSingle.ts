import {StyleSheet} from 'react-native';
import {gray100, primaryColor} from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 5,
    marginVertical: 14,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  txtContainer: {
    marginLeft: 10,
    flex: 1,
  },
  price: {
    fontSize: 14,
  },
  orderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  reOrderBtn: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: gray100,
    borderRadius: 18,
  },
  reOrderText: {
    color: primaryColor,
  },
  detailsSeparator: {
    backgroundColor: primaryColor,
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
