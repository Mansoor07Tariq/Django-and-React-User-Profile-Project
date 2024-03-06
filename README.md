# Django and React User Profile Project

This project is a proof of concept developed using Django and ReactJS with Django Rest Framework APIs. It allows users to create profiles and save basic information such as first name, surname, email address, and phone number. The application includes validation checks to ensure correct input formats and prevents duplicate entries for email addresses and phone numbers.

## Features

- User profile creation with fields for first name, surname, email, and phone number.
- Validation checks for the correct format of the email address.
- Prevention of duplicate email addresses and phone numbers.
- Clean and responsive UI for an improved user experience.

## Setup and Installation

### Backend (Django)

Clone the repository:

```
git clone https://github.com/Mansoor07Tariq/Django-and-React-User-Profile-Project.git
```

Navigate to the backend directory:

```
cd backend
```

Create a virtual environment:

```
python -m venv venv
```

Activate the virtual environment:

On macOS/Linux:

```
source venv/bin/activate
```

On Windows:

```
.\venv\Scripts\activate
```

Install dependencies:

```
pip install -r requirements.txt
```

Apply database migrations:

```
python manage.py makemigrations
python manage.py migrate
```

Run the development server:

```
python manage.py runserver
```

### Frontend (ReactJS)

Navigate to the frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm start
```

## Run Test Cases

To run test cases for the backend:

```
python manage.py test
```

## Project Structure

### Backend (Django)

- `backend/`: Django project folder.
  - `user_profile/`: Django app folder.
    - `models.py`: Defines the data model for user profiles.
    - `forms.py`: Contains the form for user input.
    - `views.py`: Implements views for profile creation and success page.
    - `urls.py`: Defines URL patterns for the app.
  - `templates/`: Contains HTML templates.
    - `user_profile/`: Templates specific to the user_profile app.
  - `UserProfileProject/`: Django app folder.
    - `asgi.py`: Manages asynchronous deployment for Django.
    - `settings.py`: Central configuration file for Django settings.
    - `urls.py`: Defines URL patterns for the Django project.
  - `wsgi/`: Configures Django for deployment with web servers.
- `manage.py`: Command-line utility for Django tasks.

### Frontend (ReactJS)

- `frontend/`: ReactJS project folder.
  - ReactJS project files and folders.

## Dependencies

### Backend

- Django: Web framework for building the application.
- Django Rest Framework: Toolkit for building Web APIs in Django.
- SQLite: Default database for development purposes.

### Frontend

- ReactJS: JavaScript library for building user interfaces.
