import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {primaryColor} from '../../constants/colors';
import {Send} from 'iconsax-react-native';
import MainTextInput from '../../components/inputs/MainTextInput';
import {styles} from '../../styles/Chat';
import CancelHeader from '../../components/header/CancelHeader';

const ChatWithRidder = () => {
  const chatAvaiable = true;
  const chatMessage = [
    {
      person: 'user1',
      msg: 'Hello, how are you?',
      time: '23:43pm',
    },
    {
      person: 'user2',
      msg: 'Fine, but let this app breathe',
      time: '23:44pm',
    },
    {
      person: 'user1',
      msg: 'How was the exam?',
      time: '23:45pm',
    },
  ];
  return (
    <View style={styles.container}>
      <CancelHeader title="Harry Johnson" />
      {chatAvaiable ? (
        <ScrollView style={styles.msgContainer}>
          {chatMessage.map((item, index) => (
            <View
              key={index}
              style={
                item.person === 'user1'
                  ? styles.senderMessage
                  : styles.receiverMessage
              }>
              <Text
                style={
                  item.person === 'user1'
                    ? styles.senderTxtRidder
                    : styles.receiverTxt
                }>
                {item.msg}
              </Text>

              <Text style={styles.time}>{item.time}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.screenContainer}>
          <Text style={styles.msg}>
            Need to get in touch with your rider? Send them a message here.
          </Text>
        </View>
      )}

      <View style={styles.messageForm}>
        <View style={styles.msgInput}>
          <MainTextInput placeholder="Type a message..." />
        </View>
        <View style={styles.sendBtn}>
          <Send size="24" color={primaryColor} variant="Bold" />
        </View>
      </View>
    </View>
  );
};

export default ChatWithRidder;
