# React Native Expo App

تطبيق React Native مع Expo للهواتف الذكية

## التثبيت والتشغيل

### المتطلبات
- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn
- تطبيق Expo Go على هاتفك

### خطوات التثبيت

1. **تثبيت التبعيات:**
   ```bash
   npm install
   ```

2. **تشغيل التطبيق:**
   ```bash
   npm start
   ```

3. **التثبيت على iPhone:**
   - قم بتحميل تطبيق "Expo Go" من App Store
   - افتح التطبيق وامسح QR code الذي يظهر في Terminal
   - أو شارك الرابط مع نفسك وافتحه في Expo Go

### البدائل لتشغيل التطبيق

```bash
# لتشغيل التطبيق على iOS simulator
npm run ios

# لتشغيل التطبيق على Android emulator
npm run android

# لتشغيل التطبيق على المتصفح
npm run web
```

## الميزات

- ✅ إعداد Expo الكامل
- ✅ متوافق مع iOS و Android
- ✅ دعم اللغة العربية
- ✅ تطبيق بسيط وسريع

## التطوير

يمكنك تحرير الملف `App.js` لتعديل التطبيق. التطبيق سيتم إعادة تحميله تلقائياً عند حفظ التغييرات.

## الانتشار

لنشر التطبيق، يمكنك استخدام:
```bash
expo build:ios
expo build:android
```

أو استخدام EAS Build للحصول على تجربة أفضل:
```bash
eas build --platform all
```