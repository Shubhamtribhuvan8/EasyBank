# EasyBank
## [Deployment Link](https://easybank-rouge.vercel.app)
## [Implementation  Video](https://drive.google.com/file/d/1g5gyY7FDS1hF1Ya_o1Beieie38-hOOJx/view?usp=sharing)

## What it is ?
![1](https://github.com/Shubhamtribhuvan8/EasyBank/assets/106821254/405fc625-ed28-419b-8180-e69bed8c37ff)
![2](https://github.com/Shubhamtribhuvan8/EasyBank/assets/106821254/54706f43-8102-42dd-8c4f-a72d09e55ca1)
# How it Works?
# 1) Customer Login:-
In Easy Bank, there are two login tabs: one for customers and one for bankers. For customer login, you need to create an account and then login. The email ID should end with `@gmail.com`.

# 2) Banker Login:--
In the second tab, banker login, you need to create an account with an email ID that ends with `@yahoo.com`. Once created, you can access all the transactions of the customers. For trial purposes, 
you can use the following banker login credentials: ID: `johndoe@yahoo.com` and password: `12345`.

![3](https://github.com/Shubhamtribhuvan8/EasyBank/assets/106821254/3c0127ed-ec27-4bb0-8f69-5145aab81890)
![4](https://github.com/Shubhamtribhuvan8/EasyBank/assets/106821254/a54f07df-124b-4643-a145-2696b43f7c34)
![5](https://github.com/Shubhamtribhuvan8/EasyBank/assets/106821254/bc151047-9d86-435c-8751-ceb9ca27852a)

# 3) MangoDB Database Users and Accounts
![6](https://github.com/Shubhamtribhuvan8/EasyBank/assets/106821254/7379326d-138c-4974-95b0-4d67df596a3d)
![7](https://github.com/Shubhamtribhuvan8/EasyBank/assets/106821254/a2adf2e9-805c-479e-9d54-4e3b496c9353)
![8](https://github.com/Shubhamtribhuvan8/EasyBank/assets/106821254/3deb16c3-ef47-4fe4-bd86-3ec24ee98778)


# Easy Bank (Banking Application)
# Description
The Bank Database consists of two tables, namely Users and Accounts. It is designed to handle customer and banker interactions for a banking system. The Users table stores information about all users, including bankers and customers, while the Accounts table keeps track of cash deposits and withdrawals.

# Features

The Bank Database provides the following features:
# 1)Customer Login

-Login Page: Users can log in using their username/email and password.

-Access Token: An access token is generated upon login, which is used for authorization in subsequent API requests.

# 2)Transactions Page

-View Transactions: Customers can view their transaction records.

-Deposit and Withdraw: Customers can deposit or withdraw cash from their accounts.

-Available Balance: The popup shows the available balance before making a deposit or withdrawal.

-Validation: If the withdrawal amount exceeds the available balance, an "Insufficient Funds" message is displayed.

# 3)Banker Login

-Accounts Page: Bankers can view all customer accounts.

-Transaction Details: Bankers can click on a specific user to view their transaction history.

# Technology Used
The Bank Database is built using the MVC (Model-View-Controller) architecture. The technology stack includes:

-Database: `MangoDB database management system`.

-Backend Framework: `Node.js` with `Express.js` for handling API requests.

-Frontend Framework: `React` for building the user interface.

-UI Library: `Material-UI` and `React-Boostrap` for designing responsive and intuitive UI components.

-Authentication: `JSON Web Tokens (JWT)` for secure user authentication and authorization.

-API Testing: Tools like `Postman` can be used to test the API endpoints.```

# Setup Instructions
To set up and run the Bank Database application, follow these steps:

-Install Node.js: Make sure you have Node.js installed on your system. You can download it from the official website: 
https://nodejs.org/

# Set up the Backend:
Clone the repository `https://github.com/Shubhamtribhuvan8/EasyBank.git` containing the backend code.

Navigate to the backend directory in your terminal `cd backend`.

Install the dependencies by running the command: `npm install`

Configure the database connection by updating the database credentials in the configuration file.

Start the backend server by running the command: `npm start or nodemon`

# Set up the Frontend:
Clone the repository `https://github.com/Shubhamtribhuvan8/EasyBank.git` containing the frontend code.

Navigate to the frontend directory in your terminal `cd frontend`.

Install the dependencies by running the command: `npm install`

Update the API endpoint in the frontend code to match the backend server's URL.

Start the frontend development server by running the command: `npm start`

# Access the Application:
Open a web browser and visit the specified URL (usually `http://localhost:3000`) to access the Bank Database application.

The login page will be displayed, allowing users to log in and access the available features.

Please note that the setup instructions may vary depending on your specific environment and requirements.

