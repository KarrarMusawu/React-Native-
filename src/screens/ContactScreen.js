import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  Linking,
} from 'react-native';

const {width} = Dimensions.get('window');

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('تنبيه', 'يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('تنبيه', 'يرجى إدخال بريد إلكتروني صحيح');
      return;
    }

    Alert.alert('تم الإرسال', 'تم إرسال رسالتك بنجاح، سنتواصل معك قريباً', [
      {text: 'حسناً', onPress: () => clearForm()},
    ]);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleCall = () => {
    Linking.openURL('tel:+96412345678');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@example.com');
  };

  const handleWebsite = () => {
    Linking.openURL('https://www.example.com');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/300x150/9C27B0/ffffff?text=Contact+Us',
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>تواصل معنا</Text>
        <Text style={styles.headerSubtitle}>نحن هنا لمساعدتك وتقديم الدعم</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>معلومات التواصل</Text>

          <TouchableOpacity style={styles.contactItem} onPress={handleCall}>
            <Text style={styles.contactLabel}>📞 الهاتف</Text>
            <Text style={styles.contactValue}>+964 12 345 678</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
            <Text style={styles.contactLabel}>📧 البريد الإلكتروني</Text>
            <Text style={styles.contactValue}>info@example.com</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleWebsite}>
            <Text style={styles.contactLabel}>🌐 الموقع الإلكتروني</Text>
            <Text style={styles.contactValue}>www.example.com</Text>
          </TouchableOpacity>

          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>📍 العنوان</Text>
            <Text style={styles.contactValue}>
              شارع الجامعة، المنصور{'\n'}بغداد، العراق
            </Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>أرسل لنا رسالة</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>الاسم الكامل *</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="أدخل اسمك الكامل"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>البريد الإلكتروني *</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="أدخل بريدك الإلكتروني"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>رقم الهاتف</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="أدخل رقم هاتفك"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>الرسالة *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={message}
              onChangeText={setMessage}
              placeholder="أدخل رسالتك هنا..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>إرسال الرسالة</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.workingHours}>
          <Text style={styles.workingHoursTitle}>ساعات العمل</Text>
          <Text style={styles.workingHoursText}>
            الأحد - الخميس: 9:00 ص - 6:00 م{'\n'}
            الجمعة: 9:00 ص - 1:00 م{'\n'}
            السبت: مغلق
          </Text>
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
    backgroundColor: '#9C27B0',
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
  contactInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  contactItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9C27B0',
    marginBottom: 5,
  },
  contactValue: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#9C27B0',
    padding: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  workingHours: {
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
  workingHoursTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  workingHoursText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default ContactScreen;
