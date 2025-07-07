/**
 * BookHub React Native App
 * WebView App for https://store.bookhubiq.com
 *
 * @format
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ActivityIndicator,
  Alert,
  BackHandler,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// import NotificationService from './src/services/NotificationService';

const WEBSITE_URL = 'https://store.bookhubiq.com';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setIsLoading] = useState(true);
  const [webViewRef, setWebViewRef] = useState<WebView | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const requestPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        // Request internet and storage permissions
        const permissions = [
          PERMISSIONS.ANDROID.ACCESS_NETWORK_STATE,
          PERMISSIONS.ANDROID.INTERNET,
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ];

        for (const permission of permissions) {
          const result = await check(permission);
          if (result === RESULTS.DENIED) {
            await request(permission);
          }
        }
      }
    } catch (error) {
      console.log('Permission request error:', error);
    }
  };

  const handleBackPress = useCallback(() => {
    if (webViewRef && canGoBack) {
      webViewRef.goBack();
      return true;
    }
    return false;
  }, [webViewRef, canGoBack]);

  useEffect(() => {
    // Request permissions on app start
    requestPermissions();
    
    // Initialize notification service
    // NotificationService can be initialized here when Firebase is configured
    
    // Handle back button for Android
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    
    return () => backHandler.remove();
  }, [handleBackPress]);

  const handleNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const handleError = (error: any) => {
    console.log('WebView error:', error);
    setIsLoading(false);
    Alert.alert(
      'خطأ في الاتصال',
      'فشل في تحميل الموقع. يرجى التحقق من الاتصال بالإنترنت والمحاولة مرة أخرى.',
      [{ text: 'موافق' }]
    );
  };

  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      // Handle messages from WebView if needed
      console.log('Message from WebView:', data);
    } catch (error) {
      console.log('WebView message error:', error);
    }
  };

  // JavaScript to inject into the WebView
  const injectedJavaScript = `
    // Add any custom JavaScript here if needed
    // For example, to handle file downloads or special navigation
    true;
  `;

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor="#2c3e50"
      />
      
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={styles.loadingText}>جاري تحميل BookHub...</Text>
        </View>
      )}
      
      <WebView
        ref={ref => setWebViewRef(ref)}
        source={{ uri: WEBSITE_URL }}
        style={styles.webView}
        onNavigationStateChange={handleNavigationStateChange}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        onMessage={handleMessage}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        allowsBackForwardNavigationGestures={true}
        // Security settings
        mixedContentMode="compatibility"
        allowsLinkPreview={false}
        // File access settings
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        // User agent
        userAgent="BookHubApp/1.0 (React Native WebView)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  webView: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    zIndex: 1000,
  },
  loadingText: {
    color: '#ecf0f1',
    fontSize: 16,
    marginTop: 10,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
});

export default App;
