---
title: Intro
description: In this course, we will cover the basics of the Flutter framework!
tags:
  - mobile-development
  - flutter
  - dart
published: true
lang: dart
course: flutter-101
order: 0
---

## Flutter
Flutter is an open-source UI framework developed by Google for building natively compiled applications for **mobile (iOS & Android), web, desktop, and embedded devices** from a **single codebase**. It uses the **Dart** programming language and provides a rich set of pre-designed widgets for fast development.

---

### Why is Flutter Useful?
Flutter is widely used because it allows developers to write code **once** and deploy it across multiple platforms, reducing development time and effort. Its fast rendering engine, **Flutter Engine**, enables highly customizable and performant UIs.

---

### Pros of Flutter
✅ **Single Codebase** – Write once, run on multiple platforms (iOS, Android, Web, Desktop).  
✅ **Fast Development** – **Hot Reload** allows real-time UI updates without restarting the app.  
✅ **Beautiful UI** – Comes with a rich set of customizable widgets that follow **Material Design** and **Cupertino (iOS style)**.  
✅ **High Performance** – Uses **Skia** graphics engine for smooth rendering at 60fps or more.  
✅ **Strong Community & Backing** – Supported by Google, with a growing developer community.  
✅ **Good Integration** – Works well with Firebase, REST APIs, GraphQL, and third-party plugins.  

---

### Cons of Flutter
❌ **Larger App Size** – Flutter apps tend to be larger compared to native apps.  
❌ **Dart Language** – While Dart is powerful, it's not as widely adopted as JavaScript or Swift/Kotlin.  
❌ **Limited Native Features** – While most features can be accessed via plugins, some platform-specific functionalities may require writing native code.  
❌ **iOS Performance & Look** – iOS development can sometimes feel secondary to Android, as Flutter is developed by Google.  

---

### Who Uses Flutter?  
Popular apps built with Flutter include **Google Ads, eBay Motors, BMW, and Alibaba**. It's great for startups, MVPs, and companies that need to support multiple platforms with a single team.

---

## Dart  

Developed by Google, **Dart** is a **general-purpose, type-safe programming language** best known for its role in the **Flutter** framework (also developed by Google).  

One of Dart’s greatest strengths is its ability to **compile to multiple targets**:  
1. **ARM64 & x64 machine code** – for mobile applications (iOS & Android).  
2. **JavaScript** – for web applications.  
3. **x86_64 executables** – for desktop applications on macOS, Windows, and Linux.  

Dart also features **just-in-time (JIT) compilation**, which compiles source code to machine code on the fly. This enables features like **hot reload** when developing apps with Flutter, allowing for near-instant UI updates.  

Dart code runs inside an **isolate**, which is a separate chunk of memory executing a **single event loop**—allowing for efficient **asynchronous** programming. Additionally, multiple isolates can run in parallel, enabling true **concurrent execution** for performance-intensive tasks.  

Dart has a strong developer community, with **thousands of open-source packages** available on [pub.dev](https://pub.dev/)

---

## Installation  

To get started, download the [Flutter SDK](https://docs.flutter.dev/get-started/install), which includes the **Dart SDK**.  

Be sure to update your path after installation is complete (check out the official docs)

Flutter has several system requirements that must be met to ensure proper installation. To verify your setup, run:  

```sh
flutter doctor
```

If everything is correctly installed, you should see output similar to:  

```sh
[✓] Flutter (Channel stable, 3.27.1, on macOS 15.3.2 24D81 darwin-arm64, locale en-US)
[✓] Android toolchain - develop for Android devices (Android SDK version 35.0.0)
[✓] Xcode - develop for iOS and macOS (Xcode 16.2)
[✓] Chrome - develop for the web
[✓] Android Studio (version 2024.2)
[✓] VS Code (version 1.95.3)
[✓] Connected device (3 available)
[✓] Network resources
• No issues found!
```

If any dependencies are missing, `flutter doctor` will provide instructions on how to resolve them.  

Download XCode (MacOS only) and Android Studio to get started!
