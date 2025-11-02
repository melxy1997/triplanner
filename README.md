# Triplanner

## Project Background

Triplanner is a collaborative trip planning application designed to streamline the process of organizing travel with friends. The core idea is to eliminate the need for switching between multiple tools (like screen sharing, documents, and various travel websites) by providing a single, interactive platform. This application integrates a real-time collaborative whiteboard with travel search functionalities (from Trip.com), allowing users to brainstorm, plan, and structure their itineraries in one place.

## Features (MVP)

This initial version (MVP) of the Triplanner application includes the foundational features to demonstrate the core concept:

-   **Core Layout**: A responsive, modern UI based on the design reference, featuring a main header, a left sidebar for Trip.com integrations, and a central whiteboard canvas.
-   **Custom Whiteboard**: A dynamic and interactive whiteboard built from scratch using `fabric.js` for robust canvas rendering and manipulation.
-   **Interactive Toolbar**: An essential toolbar with a functioning **Pan Tool**, allowing users to easily navigate the infinite canvas.
-   **Mock Data Integration**: The sidebar is populated with sample "Attractions" using mock data, simulating the results of a search.
-   **Drag-and-Drop Functionality**: Users can drag travel cards (e.g., attractions) from the sidebar and drop them directly onto the whiteboard to create visual elements for their plan.
-   **Static Timeline UI**: The right-hand panel for the "Trip Timeline" has been implemented as a static UI component, ready for future functionality.

## Code Architecture

The project is built on a modern frontend stack using Next.js, React, and TypeScript, with styling handled by Tailwind CSS. The code is organized to be modular and scalable.

-   `src/app/page.tsx`: This is the main entry point of the application. It manages the overall layout and handles the global state, such as tracking the currently active tool (`activeTool`).
-   `src/components/`: This directory contains all the reusable React components.
    -   `Canvas.tsx`: The core of the application. This component wraps the `fabric.js` canvas, handling its initialization, event listeners (e.g., for panning and drag-and-drop), and rendering of objects.
    -   `Toolbar.tsx`: The floating toolbar on the left of the canvas. It displays the available tools and communicates the selected tool back to the main page.
    -   `TripCard.tsx`: Represents the draggable cards in the sidebar, containing information about flights, hotels, or attractions.
    -   `Timeline.tsx`: The UI component for the collapsible timeline panel on the right.
-   `src/lib/`: This directory is intended for library code, utilities, and data.
    -   `mock-data.ts`: Contains the sample data used to populate the sidebar in this MVP.
