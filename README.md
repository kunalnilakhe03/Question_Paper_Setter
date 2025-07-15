# 📝 Question Paper Setter (v1.0)

A lightweight, browser-based Question Paper Setter designed for teachers and educators to add, manage, and generate question papers easily. Built using HTML, CSS, and JavaScript, this project aims to simplify the manual effort of creating question sets for exams.

---

## 📌 Features

* ➕ Add new questions with metadata (e.g., marks, unit, subject, difficulty)
* 👁️ View all added questions in a structured format
* 🧾 Generate a question paper using selected questions
* 🔐 Login and Signup interface (UI only)
* 🖼️ Organized and responsive UI using custom CSS

---

## 🗂️ Project Structure

```
question-paper-setter/
├── images/                  # Image assets used in the app
├── add_question.html        # Add new questions page
├── add_question copy.html   # Backup of add question page
├── view_question.html       # View all questions page
├── generate_paper.html      # Page to generate question paper
├── login.html               # Login page (UI only)
├── signup.html              # Signup page (UI only)
├── index.html               # Landing/home page
├── style.css                # Main stylesheet
├── index.css                # Styles specific to index.html
├── add_question.css         # Styles for add_question.html
├── check.js                 # JavaScript logic (validation, alerts, etc.)
└── .gitattributes           # Git metadata config
```

---

## ⚙️ How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/question-paper-setter.git
   cd question-paper-setter
   ```

2. **Open `index.html`**

   * You can double-click `index.html` or open it in your browser.
   * Use the navigation or links to access other pages like `add_question.html`, `view_question.html`, etc.

---

## 🚧 Limitations

* ❌ No backend integration — data is not stored permanently.
* ❌ Questions are not saved across sessions (unless extended with localStorage or a database).
* ❌ Authentication pages are UI-only and do not perform real login/signup.

---

## 🔮 Future Enhancements

* ✅ Integrate backend with localStorage, Firebase, or Node.js + MongoDB
* ✅ Implement PDF export for generated papers
* ✅ Add filters for units, difficulty, and tags
* ✅ Real authentication with user roles (Admin, Teacher)
* ✅ Upload bulk questions via CSV/Excel

---

## 🤝 Contributing

Contributions are welcome!

### Steps:

1. Fork the repository
2. Create your feature branch

   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes

   ```bash
   git commit -m "Added new feature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a Pull Request


---
