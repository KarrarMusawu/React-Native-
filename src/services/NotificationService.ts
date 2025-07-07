import messaging from '@react-native-firebase/messaging';
import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class NotificationService {
  constructor() {
    this.requestPermission();
    this.setupNotificationListener();
  }

  async requestPermission() {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        this.getFCMToken();
      } else {
        console.log('Notification permission denied');
      }
    } catch (error) {
      console.log('Notification permission error:', error);
    }
  }

  async getFCMToken() {
    try {
      const token = await messaging().getToken();
      if (token) {
        console.log('FCM Token:', token);
        await AsyncStorage.setItem('fcmToken', token);
        // You can send this token to your backend server
        this.sendTokenToServer(token);
      }
    } catch (error) {
      console.log('Error getting FCM token:', error);
    }
  }

  async sendTokenToServer(token: string) {
    try {
      // Send token to BookHub server for push notifications
      // This would typically be sent to your backend API
      console.log('Sending token to server:', token);
    } catch (error) {
      console.log('Error sending token to server:', error);
    }
  }

  setupNotificationListener() {
    // Listen for foreground notifications
    messaging().onMessage(async remoteMessage => {
      console.log('Foreground notification received:', remoteMessage);
      
      if (Platform.OS === 'android') {
        Alert.alert(
          remoteMessage.notification?.title || 'BookHub',
          remoteMessage.notification?.body || 'New notification',
          [{ text: 'OK' }]
        );
      }
    });

    // Listen for background notifications
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Background notification received:', remoteMessage);
    });

    // Listen for notification taps
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification opened app:', remoteMessage);
      // Handle notification tap here
    });

    // Check if app was opened from a notification
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('App opened from notification:', remoteMessage);
          // Handle initial notification here
        }
      });
  }

  // Subscribe to topic (optional)
  async subscribeToTopic(topic: string) {
    try {
      await messaging().subscribeToTopic(topic);
      console.log(`Subscribed to topic: ${topic}`);
    } catch (error) {
      console.log(`Error subscribing to topic ${topic}:`, error);
    }
  }

  // Unsubscribe from topic (optional)
  async unsubscribeFromTopic(topic: string) {
    try {
      await messaging().unsubscribeFromTopic(topic);
      console.log(`Unsubscribed from topic: ${topic}`);
    } catch (error) {
      console.log(`Error unsubscribing from topic ${topic}:`, error);
    }
  }
}

export default new NotificationService();