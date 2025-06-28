# React TypeScript Advanced App

A **scalable, maintainable React + TypeScript application** using **Vite**, designed with:

- 🚀 **Advanced folder structure** for large projects
- 🎨 **Multiple theme support (light, dark, multi color)**
- ⚡ **Fast builds with Vite**
- 🛠️ **TypeScript for type-safe development**
- 🧩 Ready for **Redux Toolkit / Zustand** for global state
- 🧪 Testing ready with **Jest + React Testing Library**

---

## 📂 Folder Structure

Your project structure is designed for **clarity, scalability, and clean separation of concerns**:

\`\`\`
src/
│
├── @types/         # Global TypeScript type declarations
├── apis/           # API service modules (Axios/Fetch)
├── app/            # App-level config, providers, routing setup
├── assets/         # Images, fonts, and static assets
├── components/     # Reusable, generic UI components
├── constants/      # Application-wide constants, enums
├── guards/         # Route guards for protected routes
├── helpers/        # Utility functions and reusable helpers
├── hooks/          # Custom React hooks
├── layouts/        # Layout components (e.g., SidebarLayout, AuthLayout)
├── pages/          # Page components mapped to routes
├── reducer/        # Redux/Context reducers for state slices
├── store/          # Global state store configuration
│
├── main.tsx        # Application entry point
├── serviceWorker.ts
├── setupTests.ts   # Test setup
└── vite-env.d.ts   # Vite environment types
\`\`\`

---

## 🎨 Theme Handling

The app supports:

- Light, dark, and system themes
- \`localStorage\` persistence for user preferences
- System \`prefers-color-scheme\` detection on first load
- Easily extendable with **Tailwind dark mode** or **SCSS variables**

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

\`\`\`bash
git clone https://github.com/imdhanifa/react-ts-advanced.git
cd react-ts-advanced
\`\`\`

### 2️⃣ Install dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3️⃣ Run the development server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

---

## 🧪 Running Tests

Run unit tests using:

\`\`\`bash
npm run test
# or
yarn test
\`\`\`

Tests are configured using **Jest** and **React Testing Library** for a smooth testing workflow.

---

## 🛠️ Available Scripts

- \`dev\` – Run the development server
- \`build\` – Build the app for production
- \`preview\` – Preview the production build locally
- \`test\` – Run unit tests

---

## 🌟 Features

✅ Advanced, scalable folder structure  
✅ Light, dark, and system theme support  
✅ Type-safe with TypeScript  
✅ API service structure for organized endpoints  
✅ Reusable UI component library  
✅ Ready for Redux Toolkit/Zustand integration  
✅ Vite for fast development and builds  
✅ Testing setup ready for TDD workflows

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a feature branch: \`git checkout -b feature/YourFeature\`
3. Commit your changes: \`git commit -m 'Add YourFeature'\`
4. Push to the branch: \`git push origin feature/YourFeature\`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Maintained by [imdhanifa](https://github.com/imdhanifa).

---

## ✨ Final Note

This project provides a **clean, scalable React TypeScript boilerplate with theming support**, enabling you to build professional, enterprise-ready applications with:

- Fast development cycles
- Clean, organized architecture
- Flexible theming for modern UX needs

---

> **Start building maintainable React applications with a strong architectural foundation today!**
