# 👥 KeenKeeper — Keep Your Friendships Alive

## 📌 Project Overview

**KeenKeeper** is a modern friendship management web application built with **Next.js**. It helps users maintain meaningful relationships by tracking interactions, reminding when to reconnect, and visualizing communication patterns.

This project demonstrates real-world frontend development skills including dynamic routing, global state management, responsive UI design, and interactive user experiences.

---

## 🚀 Live Links

* 🌐 Live Site: https://batch-13-assignment-07.vercel.app/
* 💻 GitHub Repo: https://github.com/aburayhankobir013-stack/batch-13-assignment-07

---

## 🛠️ Technologies Used

* **Next.js (App Router)**
* **React.js**
* **Tailwind CSS**
* **DaisyUI / Component Library**
* **Recharts (for analytics)**
* **React Toast (for notifications)**

---

## ✨ Key Features

### 🔹 1. Responsive Navbar

* Fully responsive navigation bar
* Includes **Home**, **Timeline**, and **Stats** pages
* Active route highlighting
* Icons included with each navigation link

---

### 🔹 2. Hero Banner & Summary

* Centered **title and subtitle**
* CTA button (e.g., *Add a Friend*)
* 4 summary cards showing key friendship stats

---

### 🔹 3. Friend Management System

* Data stored in a local **JSON file**
* Each friend includes:

  * Profile image, name, email
  * Contact frequency tracking
  * Tags, bio, and relationship goal

---

### 🔹 4. Friends Grid (Home Page)

* Displays all friends in a **responsive grid layout**
* Each card shows:

  * Profile picture
  * Name & tags
  * Days since last contact
  * Status indicator (Overdue / Almost Due / On Track)
* Clicking a card navigates to the **Friend Details Page**

---

### 🔹 5. Friend Details Page

#### 📌 Left Section:

* Profile information (image, name, email, bio)
* Status with color indicator
* Action buttons:

  * Snooze
  * Archive
  * Delete *(UI only)*

#### 📌 Right Section:

* 📊 Stats Cards (Days, Goal, Next Due Date)
* 🎯 Relationship Goal Card with edit option
* ⚡ Quick Check-In:

  * Call 📞
  * Text 💬
  * Video 🎥

✅ Clicking these buttons:

* Adds a new entry to the timeline
* Shows a **toast notification**

---

### 🔹 6. Timeline Page

* Displays all interaction history
* Each entry includes:

  * Date
  * Interaction type icon
  * Title (e.g., *Call with John*)

#### 🔍 Filtering (Challenge Feature)

* Filter timeline by:

  * Call
  * Text
  * Video

---

### 🔹 7. Friendship Analytics (Stats Page)

* Visual representation using **Pie Chart**
* Shows distribution of:

  * Calls
  * Texts
  * Video interactions

---

### 🔹 8. Error Handling & UX Enhancements

* ✅ Custom **404 Not Found Page**
* ⏳ Loading animation during data fetch
* 🔔 Toast notifications for user actions
* 🔄 Page reload works without breaking (important for deployment)

---

### 🔹 9. Fully Responsive Design

* Mobile 📱
* Tablet 📲
* Desktop 💻
  Ensures smooth experience across all devices

---

## 📂 Project Structure

```bash
/app
  /components
  /context
  /timeline
  /stats
  /friends
  /not-found
/public
  /assets
/database
  friends.json
```

## 📊 Challenge Features Implemented

* ✅ Timeline filtering system
* ✅ Friendship analytics with charts
* ✅ Clean and structured README

---

## 🌟 Future Improvements

* 🔐 Add authentication system
* ☁️ Connect to a real database (MongoDB/Firebase)
* 🔍 Add search functionality
* 🔄 Sort timeline entries (newest/oldest)

---

## 👨‍💻 Author

Abu Rayhan Kobir

---

## 📄 License

This project is created for academic and learning purposes.

---

## 💡 Final Note

KeenKeeper is designed to encourage meaningful human connections in a digital world. It combines productivity with emotional intelligence — helping users never lose touch with the people who matter most.

---
