import {StyleSheet} from 'react-native';
import {grey200, grey300, grey500, secondaryColor} from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 68,
    paddingLeft: 20,
    paddingRight: 16,
    paddingBottom: 32,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32.4,
  },
  date: {
    marginTop: 8,
    color: grey200,
    fontSize: 14,
    fontWeight: '400',
  },
  body: {
    marginTop: 35,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 25.6,
    color: grey300,
    maxWidth: '100%',
    flex: 1,
  },
  bodyTextList: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 25.6,
    color: grey300,
  },
  section: {
    marginTop: 25.6,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 25.6,
    color: grey300,
  },
  orderedList: {
    flexDirection: 'row',
    flex: 1,
    gap: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondaryColor,
    height: 58,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonCTA: {
    color: grey500,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.015,
  },
});
