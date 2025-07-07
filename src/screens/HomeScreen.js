import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/300x150/2196F3/ffffff?text=Welcome+to+Our+Website',
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>مرحباً بكم في موقعنا</Text>
        <Text style={styles.headerSubtitle}>
          نقدم لكم أفضل الخدمات والحلول التقنية
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>خدماتنا</Text>
          <Text style={styles.sectionText}>
            نحن نقدم مجموعة واسعة من الخدمات التقنية المتطورة لتلبية احتياجاتكم
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('About')}>
            <Text style={styles.buttonText}>حول الموقع</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Services')}>
            <Text style={styles.buttonText}>الخدمات</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.tertiaryButton]}
            onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.buttonText}>تواصل معنا</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>مميزاتنا</Text>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>• جودة عالية</Text>
            <Text style={styles.featureText}>نقدم خدمات عالية الجودة</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>• سرعة في التنفيذ</Text>
            <Text style={styles.featureText}>نلتزم بالمواعيد المحددة</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>• دعم فني متميز</Text>
            <Text style={styles.featureText}>دعم فني على مدار الساعة</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerImage: {
    width: width - 40,
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  primaryButton: {
    backgroundColor: '#2196F3',
  },
  secondaryButton: {
    backgroundColor: '#4CAF50',
  },
  tertiaryButton: {
    backgroundColor: '#FF9800',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  featuresContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  featureItem: {
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default HomeScreen;
