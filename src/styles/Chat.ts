import {StyleSheet} from 'react-native';
import {
  backgroundColor,
  gray100,
  gray50,
  lightText,
  primaryColor,
  secondaryColor,
} from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  msgContainer: {
    display: 'flex',
    gap: 20,
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 15,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
  },
  senderTxt: {
    backgroundColor: secondaryColor,
    fontSize: 14,
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#000',
    borderTopRightRadius: 50,
  },
  senderTxtRidder: {
    backgroundColor: primaryColor,
    fontSize: 14,
    padding: 20,
    color: backgroundColor,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#000',
    borderTopRightRadius: 50,
  },
  receiverTxt: {
    backgroundColor: gray50,
    fontSize: 14,
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  time: {
    fontSize: 12,
    color: lightText,
  },
  msg: {
    fontSize: 14,
    color: lightText,
    fontWeight: '400',
    textAlign: 'center',
  },
  messageForm: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: backgroundColor,
    borderTopColor: gray50,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 15,
  },
  msgInput: {
    width: '83%',
  },
  sendBtn: {
    backgroundColor: gray100,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
  },
});
