# Udemy Clone

A full-featured Udemy Clone application built with React, TypeScript, and Tailwind CSS on the frontend and .NET on the backend. This app replicates core functionality of Udemy, providing a platform for users to enroll in, manage, and create courses. 

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Sign up, log in, and log out functionality with support for different user roles (e.g., students, instructors, admins).
- **Role-Based Authorization**: Customizable access control for different roles.
- **Course Management**: Instructors can create and manage courses, including setting categories and course descriptions.
- **Lesson Management**: Courses contain lessons, which can include PDFs, videos, and other resources.
- **Course Participation**: Students can enroll in courses, track progress, and receive certifications upon completion.
- **Course Engagement**: Users can like and rate courses.
- **Learning Path Tracking**: Users can monitor ongoing courses and track learning progress.
- **Request Instructor Access**: Users can request permissions to become instructors.
- **Category Management**: Admins can manage course categories.
- **File Uploads**: Instructors can upload PDFs, videos, and images for course content.
- **Swagger API Documentation**: Comprehensive API documentation using Swagger.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: .NET Core (ASP.NET)
- **Database**: SQL Server (or any preferred SQL database)
- **API Documentation**: Swagger

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js and npm
- .NET SDK
- SQL Server or other supported SQL database

### Frontend Setup

1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone https://github.com/Abdelkader-G2/udemy-clone.git
   cd udemy-clone/frontend

2. Install dependencies:
   ```bash
   npm install
  
3. Run the frontend:
   ```bash
   npm start dev

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd ../backend

2. Install dependencies and build the project:
   ```bash
   dotnet restore
   dotnet build

3. Set up your database and update the connection string in appsettings.json.

4. Run migrations:

   ```bash
   dotnet ef database update

5. Start the backend Server:

   ```bash
   dotnet run 
   ```


## Environment Variables

Ensure you have the following environment variables set up:

- **Frontend**:
  * ``REACT_APP_API_URL``: URL to the backend API
- **Backend**:
  * Database connection strings
  * API keys if required for file uploads (e.g., AWS S3 or cloud storage)

## API Documentation

API documentation is available via Swagger. Once the backend server is running, navigate to:

``http://localhost:<backend-port>/swagger``

Here, you’ll find all available API endpoints and detailed request/response formats.

## Usage

1. **Sign up** as a new user or log in as an existing user.

2. **Enroll in courses** and track progress.

3. **Request instructor access** if you'd like to create your own courses..

4. **Explore categories**, like courses, and receive certifications upon course completion.