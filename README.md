# Rental Management System

A web application for managing apartments, houses, tenants, and payments efficiently. This project allows landlords and property managers to track occupancy, manage payments, and generate receipts all in one place.

---

## Table of Contents

- [Features](#features)  
- [Demo](#demo)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API](#api)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **Apartment & House Management:** Add, edit, and remove apartments and houses.  
- **Payment Tracking:** Record tenant payments with date, amount, and associated unit.  
- **Receipts:** Generate and view payment receipts for tenants.  
- **Search & Filter:** Quickly find apartments, houses, or tenants.  
- **Responsive UI:** Works on desktop and mobile devices.  

---

## Demo

*(Optional: Add a screenshot or GIF of your application here)*  

---

## Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS  
- **Backend:** JSON Server (`db.json`)  
- **State Management:** React Hooks (`useState`, `useEffect`, `useMemo`)  
- **Others:** Vite (for bundling), Axios (for API calls)  

---

## Project Structure

rental-management/
│
├── public/ # Public assets
├── src/
│ ├── components/ # React components (ApartmentList, ApartmentForm, ReceiptPanel, etc.)
│ ├── hooks/ # Custom React hooks (useApartments, useHouses, usePayments)
│ ├── types/ # TypeScript types (if used)
│ ├── App.jsx # Main application
│ └── index.jsx # Entry point
├── db.json # JSON server database
├── package.json # Project configuration
└── README.md # Project documentation


---

## Installation

1. **Clone the repository**  
```bash
git clone rodneyswaji-hue
cd rental-management

```
2. **Install dependencies**
```bash
npm install
```

3. **Start JSON server**
```bash
npx json-server --watch db.json --port 3000
```

4. **Start the frontend**
```bash
npm run dev
```
The application should now be running at http://localhost:5173 (or the port shown in your terminal).

## Usage

Add new apartments and houses via the form.

Record tenant payments and generate receipts.

Use the search bar to quickly find tenants or units.

Monitor all payment histories and outstanding balances.

## API Endpoints

(Based on JSON Server structure in db.json)

GET /apartments – List all apartments

POST /apartments – Add a new apartment

GET /houses – List all houses

POST /houses – Add a new house

GET /payments – List all payments

POST /payments – Record a new payment

## Contributing

Contributions are welcome!

Fork the repository.

Create a new branch: git checkout -b feature/your-feature

Commit your changes: git commit -m "Add some feature"

Push to the branch: git push origin feature/your-feature

Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE

file for details.

Made with ❤️ by Rodney Swaji
