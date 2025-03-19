# Vincelette_Brian_UI_Garden

A React-based web application containerized with Docker for managing a UI garden project. This project is part of Assignment 13.

## Project Structure

```
vincelette_brian_ui_garden/
├── src/                # React application source code
│   ├── components/     # Reusable React components
│   ├── pages/          # Page-level components
│   ├── styles/         # CSS/SCSS styles
│   └── App.js          # Main application entry point
├── public/             # Static assets
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bvincelette-rrc-poly/A12-Brian.git
   cd vincelette_brian_ui_garden
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Using Node.js
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

### Using Docker
1. Build the Docker image:
   ```bash
   docker build -t ui-garden .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 ui-garden
   ```

3. Open your browser and navigate to `http://localhost:3000`.

### Using Docker Compose
1. Start the application:
   ```bash
   docker-compose up
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm test`: Runs the test suite.
- `npm run lint`: Lints the codebase.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.