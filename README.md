# Project Management Web Application

Welcome to the Project Management Web Application. This application allows users to efficiently manage their projects and tasks. It includes basic features such as adding, viewing, marking tasks as completed, and deleting tasks.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Running the Application Locally](#running-the-application-locally)
- [Containerization with Docker](#containerization-with-docker)

## Features

- Ability to add new tasks
- View the list of tasks
- Mark tasks as completed
- Delete tasks

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for running a simple HTTP server locally)
- [Docker](https://www.docker.com/) (for containerization and deployment)

## Running the Application Locally

To run the application locally, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/PMayala/ProjectManager.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ProjectManager
    ```

3. Start a simple HTTP server using Node.js:

    ```bash
    node server.js
    ```

4. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Containerization with Docker

To containerize the application using Docker, follow these steps:

1. Ensure Docker is installed on your machine and running properly.

2. Clone this repository to your local machine (if you haven't already):

    ```bash
    git clone https://github.com/PMayala/ProjectManager.git
    ```

3. Navigate to the project directory:

    ```bash
    cd ProjectManager
    ```

4. Build the Docker image using the provided Dockerfile:

    ```bash
    docker build -t app_image .
    ```

5. Once the image is built successfully, run a Docker container:

    ```bash
    docker run -d -p 8080:3000 app_image
    ```

6. Access the application in your web browser at `http://localhost:8080`.


