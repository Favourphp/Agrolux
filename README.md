# Agrolux Backend

Agrolux Backend is the backend component of the Agrolux application. It provides the necessary APIs for user authentication, weather api, and user profiles.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [User Authentication](#user-authentication)
  - [User Profile](#user-profile)
- [API Documentation](#api-documentation)


## Getting Started

### Prerequisites

- Node.js
- MongoDB
- SMTP Server (for sending emails)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Favourphp/Agrolux.git


### Configuration
1. Create a .env file in the root directory and add the following variables:

- PORT=5000
- MONGODB_URI=your_mongodb_uri
- JWT_SECRET=your_secret_key
- EMAIL_ADDRESS=your_email_address
- EMAIL_PASSWORD=your_email_password
- SECRET=SESSION


Adjust other configuration files, if needed, to match your setup. For example, check the `config/cloudinary.js` file for Cloudinary setup.

## Usage

### User Authentication

- Register a new user: POST /api/user/register
- Log in: POST /api/user/login
- Verify user account: POST /api/user/confirm/:userID
- Forget password: POST /api/user/forget-password
- Reset password: POST /api/user/reset-password/:token
- Log out: GET /api/user/logout



### weather API
- call weather api: http://api.openweathermap.org/data/2.5/weather
- call forecast api: http://api.openweathermap.org/data/2.5/forecast

### User Profile
- Get user profile: GET /api/user/profile


