# Giphy Gallery

This project is a Giphy Gallery application built with React, TypeScript, and Vite. It allows users to search for and view trending GIFs from the Giphy API.

## Table of Contents

- [Setup and Run](#setup-and-run)
- [Technical Decisions](#technical-decisions)
- [Improvements](#improvements)

## Setup and Run

### Installation

1. Clone this repository

```sh
git clone https://github.com/victorhsantiago/gif-gallery.git
cd gif-gallery
```

2. Install dependecies

```sh
npm install
```

### Running the Project

1. Start the development server:

```sh
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173/`

### Running Tests

```sh
npm run test
```

## Technical Decisions

### Project Structure

The project is organized into the following main directories:

- `components`: Contains reusable UI components.
- `hooks`: Contains custom hooks for data fetching and state management.
- `models`: Contains TypeScript interfaces and types.
- `pages`: Contains page components.
- `services`: Contains API service functions.
- `utils`: Contains utility functions.
- `tests`: Contains test utilities.

### Styling

The project uses `styled-components` for styling. The global styles and themes are defined in `GlobalStyles.tsx`.

### Testing

The project uses `vitest` for unit testing and `@testing-library/react` for testing React components.

## Improvements

- **Error Handling**: Improve error handling in API calls and display user-friendly error messages.
- **Search Suggestions**: Implement search suggestions to enhance the search functionality.
- **Pagination**: Add pagination or infinite scrolling for better user experience.
- **Theme Selection**: Add a toggle for selecting between light and dark themes.
