// THINKING IN REACT
// Mock JSON API

// Name        Price 

// Sporting Goods

// Football    $49.99
// Baseball    $9.99
// Basketball  $29.99

// Electronics

// iPod Touch  $99.99
// iPhone 5    $399.99 
// Nexus 7     $199.99


[
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

// 1. Draw boxes around every component and sub-component to differentiate what to work with
// Single Responsibility Principle - technique to determine what should be its own component

// There are FIVE components in this app
// 1. FilterableProductTable(orange): contains the entirety of the example
// 2. SearchBar(blue): receives all user input
// 3. ProductTable(green): displays and filters the data collection based on user input
// 4. ProductCategoryRow(turquoise): displays a heading for each category
// 5. ProductRow(red): displays a row for each product


// Components that appear within another component in the mock should appear as a child in the hierarchy:

//  FilterableProductTable
//      SearchBar
//      ProductTable
//          ProductCategoryRow
//          ProductRow


// STEP 2
// Build A Static Version in React
// ** State is reserved only for interactivity - data that changes over time
// ** The components should only have render() methods since this is a static version of your app


// STEP 3
