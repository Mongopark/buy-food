import {StyleSheet} from 'react-native';
import {lightBackground, lightText, textColor} from '../constants/colors';

export const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
  },
  image: {
    height: 150,
    borderRadius: 8,
    width: '100%',
  },
  dotContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 2,
    height: 24,
  },
  dot: {
    fontSize: 14,
    fontWeight: 'bold',
    color: lightText,
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
  },
  infoLabel: {
    color: lightText,
    fontWeight: '500',
    fontSize: 13,
  },
  ratingContainer: {
    backgroundColor: lightBackground,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: textColor,
  },
  rating: {
    fontSize: 11,
  },
  icon: {
    marginRight: 4,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});
