# E-commerce Product Management Application

This project is a simplified e-commerce product management application built using **React 18**. The application features product listing, filtering, a shopping cart, and user authentication. It includes several additional functionalities, animations, and an admin dashboard for managing products and categories.

## Features Covered

### 1. Product Listing Page
- **Grid Layout**: Products are displayed in a responsive grid layout.
- **Axios for Data Fetching**: Used Axios to efficiently fetch product data from a mock API.
- **Loading State**: Implemented loading indicators using **React Spinners** while data is being fetched.
- **Add to Cart**: Each product includes an "Add to Cart" button to add products to the shopping cart.

### 2. Shopping Cart
- **Cart Section**: Created a shopping cart to display products added, manage quantities, and calculate the total price.
- **State Management**: Used **Redux** with **Redux-Toolkit** and **Redux Persist** to manage cart state and maintain persistence across sessions.

### 3. Transitions and Animations
- **Framer Motion**: Implemented smooth transitions for adding and removing items from the cart.
- **React Spring**: Enhanced user interaction with additional animations during transitions.

### 4. Data Fetching with Suspense
- **React 18 Suspense**: Used React's Suspense for handling loading states and lazy loading product data.

### 5. Responsive Design
- **Tailwind CSS**: The app is styled using **Tailwind CSS** to ensure responsive design across devices.
- **Material-UI (MUI)**: Integrated MUI components for styling and layouts.
  
### 6. Search Functionality
- **Search Bar with Debouncing**: Implemented a search bar that filters products in real-time using **lodash.debounce** for performance optimization.

### 7. User Authentication
- **Firebase Authentication**: Used **Firebase Auth** to implement login and register functionality for user sessions.

### 8. Persistent Cart
- **Redux Persist**: Shopping cart state is saved using Redux Persist, ensuring cart data persists across sessions.

### 9. Notifications
- **React-Toastify**: Implemented notifications to enhance user experience for actions like adding products to the cart or handling errors.

### 10. Review System (Bonus Challenge)
- **Review Modal**: Users can leave ratings and comments on products via a review modal.
- **Admin Pannel**: Admins can add new Products and add new Category.
- **Formik and Yup**: Used **Formik** for managing form states and **Yup** for form validation in the review modal.
- **Firestore**: Stored reviews using Firebase Firestore (or a similar database solution).

### 11. Admin Dashboard (Bonus Challenge)
- **Admin Page**: Admins can manage products, including adding, editing, and deleting items. 
- **MUI Data Table**: Used **MUI Data Table** for displaying products in the admin panel.
- **Add Product & Category Forms**: Included forms for adding products and categories, with form validation using **Formik** and **Yup**.

## Libraries Used

- **React 18**
- **Axios**: For fetching product data.
- **React Query**: For state management and caching product data.
- **Redux, Redux-Toolkit, Redux Persist**: For state management and persistence.
- **Framer Motion**: For transitions and animations.
- **React Spring**: For additional animations.
- **Tailwind CSS**: For responsive design.
- **Material-UI (MUI)**: For styling and layout.
- **React Toastify**: For notifications.
- **Firebase Authentication**: For user login and registration.
- **Formik & Yup**: For form management and validation.
- **lodash.debounce**: For optimizing the search functionality.
- **React Spinners**: For displaying loading indicators.
- **Fireworks.js**: For displaying Fireworks at the time of placing order in Cart.

## How to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/25mohit/rapid-supplies.git
   cd rapid-supplies
   ```
   ```bash
   npm install
   ```
   ```bash
   npm start
   ```
