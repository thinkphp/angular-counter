# Angular Counter

A simple counter application built with **Angular**.
This project was created as a learning exercise while transitioning from React to Angular.

## 🚀 Live Demo

[View the live application](https://USERNAME.github.io/angular-counter/)

> Replace `USERNAME` with your GitHub username.

## 📋 Features

* Increase the counter
* Decrease the counter
* Reset the counter to `0`
* Counter color changes based on its value:

  * 🟢 Green when the value is positive
  * 🔴 Red when the value is negative
  * ⚫ Black when the value is `0`
* Responsive and simple UI

## 🛠️ Built With

* Angular
* TypeScript
* HTML
* CSS
* Angular Signals

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/USERNAME/angular-counter.git
```

Navigate to the project directory:

```bash
cd angular-counter
```

Install dependencies:

```bash
npm install
```

## 💻 Development Server

Run the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200/
```

The application will automatically reload when you modify the source files.

## 🏗️ Build

To create a production build:

```bash
ng build
```

For GitHub Pages deployment:

```bash
ng build --base-href /angular-counter/
```

## 🚀 Deploy to GitHub Pages

The project uses `angular-cli-ghpages` for deployment.

Install it:

```bash
npm install --save-dev angular-cli-ghpages
```

Build the application:

```bash
ng build --base-href /angular-counter/
```

Deploy:

```bash
npx angular-cli-ghpages --dir=dist/angular-counter/browser
```

## 📚 What I Learned

This project helped me understand the main differences between React and Angular, including:

* Angular components
* Angular templates
* Event binding with `(click)`
* Property/style binding
* Angular Signals with `signal()`
* Derived state with `computed()`
* TypeScript in Angular
* Angular CLI
* Production builds
* Deploying an Angular application to GitHub Pages

## 📁 Project Structure

```text
angular-counter/
├── src/
│   └── app/
│       ├── app.ts
│       ├── app.html
│       └── app.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 👨‍💻 Author

Built as part of my journey learning Angular and comparing it with React.
