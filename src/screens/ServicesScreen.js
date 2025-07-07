import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const ServicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/300x150/FF9800/ffffff?text=Our+Services',
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>خدماتنا</Text>
        <Text style={styles.headerSubtitle}>
          نقدم مجموعة شاملة من الخدمات التقنية
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>تطوير تطبيقات الهاتف</Text>
          <Text style={styles.serviceDescription}>
            نقوم بتطوير تطبيقات الهاتف المحمول لأنظمة Android و iOS باستخدام
            أحدث التقنيات مثل React Native و Flutter
          </Text>
          <View style={styles.serviceFeatures}>
            <Text style={styles.featureItem}>• تطبيقات iOS و Android</Text>
            <Text style={styles.featureItem}>• واجهات مستخدم احترافية</Text>
            <Text style={styles.featureItem}>• تحديثات دورية</Text>
            <Text style={styles.featureItem}>• دعم فني مستمر</Text>
          </View>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>تطوير المواقع الإلكترونية</Text>
          <Text style={styles.serviceDescription}>
            نصمم وننفذ مواقع إلكترونية احترافية ومتجاوبة مع جميع الأجهزة
          </Text>
          <View style={styles.serviceFeatures}>
            <Text style={styles.featureItem}>• مواقع متجاوبة</Text>
            <Text style={styles.featureItem}>• تصميم حديث وجذاب</Text>
            <Text style={styles.featureItem}>• تحسين محركات البحث</Text>
            <Text style={styles.featureItem}>• أمان عالي</Text>
          </View>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>تصميم واجهات المستخدم</Text>
          <Text style={styles.serviceDescription}>
            نقدم خدمات تصميم UI/UX احترافية لضمان تجربة مستخدم مميزة
          </Text>
          <View style={styles.serviceFeatures}>
            <Text style={styles.featureItem}>• تصميم إبداعي</Text>
            <Text style={styles.featureItem}>• تجربة مستخدم سلسة</Text>
            <Text style={styles.featureItem}>• اختبار قابلية الاستخدام</Text>
            <Text style={styles.featureItem}>• تصميم متجاوب</Text>
          </View>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>الاستشارات التقنية</Text>
          <Text style={styles.serviceDescription}>
            نقدم استشارات تقنية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة
          </Text>
          <View style={styles.serviceFeatures}>
            <Text style={styles.featureItem}>• تحليل المتطلبات</Text>
            <Text style={styles.featureItem}>• اختيار التقنيات المناسبة</Text>
            <Text style={styles.featureItem}>• تخطيط المشاريع</Text>
            <Text style={styles.featureItem}>• مراجعة الكود</Text>
          </View>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>الدعم والصيانة</Text>
          <Text style={styles.serviceDescription}>
            نوفر خدمات دعم وصيانة مستمرة لضمان عمل تطبيقاتك بكفاءة
          </Text>
          <View style={styles.serviceFeatures}>
            <Text style={styles.featureItem}>• دعم فني على مدار الساعة</Text>
            <Text style={styles.featureItem}>• تحديثات أمنية</Text>
            <Text style={styles.featureItem}>• حل المشاكل الفنية</Text>
            <Text style={styles.featureItem}>• تحسين الأداء</Text>
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
    backgroundColor: '#FF9800',
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
  serviceCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
  },
  serviceFeatures: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
  },
  featureItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    lineHeight: 20,
  },
});

export default ServicesScreen;
