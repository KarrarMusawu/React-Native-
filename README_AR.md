# BookHub React Native App

تطبيق BookHub المحمول - تطبيق للوصول إلى متجر BookHub الإلكتروني

## الميزات

- ✅ عرض موقع BookHub من خلال WebView
- ✅ دعم الاتجاهات الأساسية (Portrait/Landscape)
- ✅ معالجة الأذونات للملفات والكاميرا
- ✅ دعم الإشعارات Push Notifications
- ✅ تعامل مع زر الرجوع في Android
- ✅ واجهة تحميل مخصصة
- ✅ معالجة الأخطاء والاتصال
- ✅ دعم الأمان والشبكة
- ✅ توافق مع متاجر التطبيقات (Google Play & App Store)

## المتطلبات

- Node.js (>= 18)
- React Native CLI
- Android Studio (للتطوير على Android)
- Xcode (للتطوير على iOS)

## التثبيت

```bash
# تثبيت المكتبات المطلوبة
npm install

# تثبيت مكتبات iOS (على macOS فقط)
cd ios && pod install && cd ..
```

## التشغيل

### Android
```bash
npx react-native run-android
```

### iOS
```bash
npx react-native run-ios
```

## الاختبار

```bash
# تشغيل الاختبارات
npm test

# فحص جودة الكود
npm run lint
```

## البنية

```
/
├── App.tsx                 # المكون الرئيسي
├── src/
│   └── services/
│       └── NotificationService.ts  # خدمة الإشعارات
├── android/                # إعدادات Android
│   └── app/src/main/
│       ├── AndroidManifest.xml
│       └── res/xml/
│           ├── network_security_config.xml
│           └── file_paths.xml
├── ios/                    # إعدادات iOS
│   └── BookHubApp/
│       └── Info.plist
└── jest.setup.js          # إعداد الاختبارات
```

## الأذونات

### Android
- الإنترنت والشبكة
- الوصول للملفات الخارجية
- الكاميرا والميكروفون
- الإشعارات
- إدارة التحميل

### iOS
- الكاميرا
- مكتبة الصور
- الميكروفون
- الموقع (عند الحاجة)
- الوصول للملفات

## الإعدادات

### عنوان الموقع
يمكنك تغيير عنوان الموقع في `App.tsx`:
```typescript
const WEBSITE_URL = 'https://store.bookhubiq.com';
```

### إعدادات الأمان
تم إعداد الأمان للسماح بالوصول لـ:
- `store.bookhubiq.com`
- `localhost` (للتطوير)

### Firebase (الإشعارات)
لتفعيل الإشعارات:
1. أضف ملف `google-services.json` لـ Android
2. أضف ملف `GoogleService-Info.plist` لـ iOS
3. قم بتفعيل `NotificationService` في `App.tsx`

## الإصدار والنشر

### Android
```bash
cd android
./gradlew assembleRelease
```

### iOS
استخدم Xcode لإنشاء Archive للنشر

## المساهمة

1. Fork المشروع
2. إنشاء فرع جديد للميزة
3. Commit التغييرات
4. Push للفرع
5. إنشاء Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT

## الدعم

للمساعدة أو الاستفسارات، يرجى فتح Issue جديدة في المشروع.

---

# React Native Setup Guide

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

#### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.