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

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/300x150/4CAF50/ffffff?text=About+Us',
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>حول موقعنا</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>من نحن</Text>
          <Text style={styles.sectionText}>
            نحن شركة متخصصة في تطوير التطبيقات والمواقع الإلكترونية. نقدم حلولاً
            تقنية مبتكرة تساعد عملائنا على تحقيق أهدافهم الرقمية. فريقنا من
            المطورين المحترفين يعمل على تقديم أفضل الخدمات باستخدام أحدث
            التقنيات.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>رؤيتنا</Text>
          <Text style={styles.sectionText}>
            أن نكون الشركة الرائدة في مجال التطوير التقني في المنطقة، ونقدم
            حلولاً مبتكرة تلبي احتياجات عملائنا وتساهم في نموهم وتطورهم.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>رسالتنا</Text>
          <Text style={styles.sectionText}>
            نحن ملتزمون بتقديم خدمات تقنية عالية الجودة، وبناء شراكات طويلة
            الأمد مع عملائنا، والمساهمة في التحول الرقمي للشركات والمؤسسات.
          </Text>
        </View>

        <View style={styles.valuesContainer}>
          <Text style={styles.valuesTitle}>قيمنا</Text>
          <View style={styles.valueItem}>
            <Text style={styles.valueTitle}>الجودة</Text>
            <Text style={styles.valueText}>
              نحرص على تقديم أعلى مستوى من الجودة في جميع خدماتنا
            </Text>
          </View>
          <View style={styles.valueItem}>
            <Text style={styles.valueTitle}>الابتكار</Text>
            <Text style={styles.valueText}>
              نسعى دائماً لتقديم حلول مبتكرة وحديثة تواكب التطور التقني
            </Text>
          </View>
          <View style={styles.valueItem}>
            <Text style={styles.valueTitle}>الشفافية</Text>
            <Text style={styles.valueText}>
              نؤمن بأهمية الشفافية والوضوح في جميع تعاملاتنا مع العملاء
            </Text>
          </View>
          <View style={styles.valueItem}>
            <Text style={styles.valueTitle}>الالتزام</Text>
            <Text style={styles.valueText}>
              نلتزم بالمواعيد المحددة ونحافظ على ثقة عملائنا
            </Text>
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
    backgroundColor: '#4CAF50',
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
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
  },
  valuesContainer: {
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
  valuesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  valueItem: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  valueText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default AboutScreen;
