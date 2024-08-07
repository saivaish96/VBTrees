# VB Trees

VB Trees is a mobile application designed/developed as a personal project for the City of Virginia Beach that allows users to search and view detailed information about various tree species found in the city. The application provides an intuitive interface for users to explore tree data and learn more about the city's tree diversity.

## Features

- **Search Functionality**: Users can search for trees by name using the search bar.
- **Tree List**: Displays a list of trees with their common names, scientific names, genus, and species using a flat list with infinite scrolling (lazy loading).
- **Detailed View**: Provides detailed information about a selected tree, including an image, scientific name, genus, species, family name, creation and edit dates, and other metadata.
- **Data Source**: Tree data is fetched from the [Virginia Beach Open Data API](https://data.virginiabeach.gov/datasets/VBgov::tree-data/explore).

## Screenshots

### Main Page
<img width="1728" alt="Screenshot 2024-07-02 at 11 56 06 AM" src="https://github.com/saivaish96/VBTrees/assets/13002463/b4472bee-0a1b-427c-8d9a-e09adf45925b">
<img width="418" alt="Screenshot 2024-07-04 at 6 23 55 PM" src="https://github.com/saivaish96/VBTrees/assets/13002463/2d04f2a5-12d6-4460-90f2-721039e0c73f">

The main page displays a search bar and a list of trees. Users can search for trees by name and see the total number of trees available.

### Search Results
<img width="1728" alt="Screenshot 2024-07-02 at 11 56 13 AM" src="https://github.com/saivaish96/VBTrees/assets/13002463/259bf78d-1b8c-4f15-9902-73043b185e39">
<img width="418" alt="Screenshot 2024-07-04 at 6 24 06 PM" src="https://github.com/saivaish96/VBTrees/assets/13002463/d938ecc1-3dfe-47b0-ade8-4b40b9332854">
<img width="418" alt="Screenshot 2024-07-04 at 6 24 03 PM" src="https://github.com/saivaish96/VBTrees/assets/13002463/25d267ee-fa9f-4f45-b8b4-758eb34af7a0">

When a search term is entered, the list of trees is filtered to show only the matching results.

### Tree Details
<img width="1728" alt="Screenshot 2024-07-02 at 11 49 50 AM" src="https://github.com/saivaish96/VBTrees/assets/13002463/671d2bbd-854c-4220-a75a-9ace2a67620f">
<img width="418" alt="Screenshot 2024-07-04 at 6 24 10 PM" src="https://github.com/saivaish96/VBTrees/assets/13002463/08cd1f17-5bdb-4997-9144-7a6db888955b">

Clicking on a tree card brings up detailed information about the selected tree, including an image and metadata.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/vb-trees.git
   cd vb-trees
2. Install dependencies: npm install
3. Start the development server: npm start
4. Open the application:
   For iOS: Use the Expo Go app to scan the QR code generated by expo start.
   For Android: Use the Expo Go app to scan the QR code generated by expo start.
