# 💳 Interactive Card Details Form

## A dynamic React application for collecting, displaying, and validating credit card input data in real time. Built with **React**, **TypeScript**, and **Tailwind CSS**, featuring live card preview, animated transitions, and robust form validation.

## 📸 Preview

![Interactive Card Form Screenshot](/screenshot.jpg)
Live: https://dzik0.github.io/interactive-card-details-form

---

## 🚀 Features

- **Live Card Preview**  
  Instantly see your entered data reflected on animated credit card graphics.

- **Form Validation**  
  Cardholder, number, expiry, and CVC fields validated for format and length.

- **Error Handling**  
  Clear, user-friendly error highlights and messages for invalid input.

- **Submission & Confirmation**  
  “Confirm” validates input and shows a thank-you message on success.

- **Responsive Layout**  
  Fully responsive—works on all screen sizes.

- **Smooth Animations**  
  Enhanced with `motion/react` for engaging card and UI transitions.

---

## 🛠️ Tech Stack

- React (with Context API & hooks)
- TypeScript
- Tailwind CSS
- motion/react (animations)
- Vite

---

## 📁 File Structure

```
src/
├── comps/
│   ├── FrontCard.tsx
│   ├── BackCard.tsx
│   ├── CardsContainer.tsx
│   ├── FormComponent.tsx
│   └── CompleteMessage.tsx
├── App.tsx
├── index.css
public/
├── bg-card-front.png
├── card-logo.svg
├── screenshot.jpg
└── ...
```

---

## 🧠 How It Works

- Type card details into the form and watch them reflect live on the card images.
- Input validation for every field and instant feedback on errors.
- Submitting a valid form displays a friendly completion message.

---

## 📦 Getting Started

1. **Clone this repo:**

   ```bash
   git clone https://github.com/Dzik0/interactive-card-details-form.git
   cd interactive-card-details-form
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

---

## ✅ To Do / Improvements

- [ ] Persist entered data with localStorage
- [ ] Improve accessibility (better ARIA and keyboard support)
- [ ] Detect/validate card brands
- [ ] Add tests for form logic

---

## 👨‍💻 Author

**Dzik0**  
GitHub: [https://github.com/Dzik0](https://github.com/Dzik0)

---

## 📝 License

Open-source under the [MIT License](LICENSE).

---
