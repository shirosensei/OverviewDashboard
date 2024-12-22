# Sales Overview Dashboard

## Overview

The Sales Dashboard is an intuitive web application designed to help businesses monitor and optimize their sales performance. It combines data visualization, historical tracking, and AI-powered assistance to provide actionable insights. The dashboard includes features like a chatbot AI assistant, order history, sales and profit/loss charts, and sales forecasts.

### Features

#### Home Page

A clean and user-friendly landing page with an overview of sales metrics.

Quick navigation links to key sections of the dashboard.

#### Order History

Displays a list of all past orders with filters for date, product, or customer.

Includes details such as order ID, customer name, product(s), total amount, and status.

#### Charts of Sales, Profits, and Loss

Interactive charts to track:

Total Sales over a specified period.

Profit margins and loss trends.

Options to customize date ranges and export data.

#### Forecasts

Predict future sales trends based on historical data.

Utilize machine learning algorithms to suggest optimal inventory levels and potential growth areas.

#### Chatbot AI Assistant

An AI-powered virtual assistant for:

Answering common queries.

Providing sales summaries.

Offering recommendations based on data.

Available 24/7 with natural language processing capabilities.

### Technical Stack

Frontend: Vite.js, Tailwind CSS for styling.

Backend: Node.js (Express.js) for API management.

Database: MongoDB for storing order history and sales data.

AI: OpenAI API integration for the chatbot.

Charting Library: Chart.js or D3.js for dynamic visualizations.

### Installation

#### Clone the Repository

git clone https://github.com/shirosensei/OverviewDashboard.git
cd sales-dashboard

#### Install Dependencies

npm install

Set Up Environment Variables
Create a .env file in the root directory and add:

VITE_APP_OPENAI_API_KEY=your_openai_api_key
MONGO_URI=your_mongodb_connection_string
PORT=your_port_number

Run the Application

npm run dev

The application will be accessible at http://localhost:5173.