# Joshua's Webfolio

Welcome to Joshua's Webfolio! This project showcases my programming skills, work experience, and leadership experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This web application is built using React for the frontend and Flask for the backend. It features multiple sections including projects, skills, work experience, and a contact form.

## Features

- Display projects with descriptions and technologies used
- List of skills
- Work experience details
- Contact form to send messages
- Responsive design with Bootstrap
- Multi-page navigation using React Router

## Technologies Used

- React
- React Router
- Bootstrap
- Flask
- Axios

## Setup

### Prerequisites

- Node.js and npm
- Python 3.x
- Flask
- Git (optional, for version control)

### Frontend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/webfolio.git
    cd webfolio/frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Install Bootstrap, React Router, and Axios:
    ```sh
    npm install bootstrap react-router-dom axios
    ```

4. Start the frontend server:
    ```sh
    npm start
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```sh
    cd ../backend
    ```

2. Create and activate a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

4. Start the backend server:
    ```sh
    python app.py
    ```

## Usage

Once both the frontend and backend servers are running, open your web browser and navigate to `http://localhost:3000` to view the application.

## Routes

### Frontend Routes

- `/` - Home page
- `/projects` - Projects page
- `/about` - About page
- `/skills` - Skills page
- `/work-experience` - Work Experience page
- `/contact` - Contact page

### Backend Endpoints

- `GET /api/projects` - Fetch projects data
- `POST /api/contact` - Submit a contact form

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes you would like to make.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out:

- Name: Joshua Panchana Cedeño
- Email: jp286@uakron.edu

