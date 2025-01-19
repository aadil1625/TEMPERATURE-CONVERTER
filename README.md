<html>
  <head>
  </head>
  <body>
    <h1>Temperature Convertor</h1>
    <p>This is a simple Temperature Converter application built with React. It allows users to input a temperature in Celsius and converts it to both Fahrenheit and Kelvin. The output is displayed directly on the page.</p>

  <h2>Features</h2>
   <ul>
        <li>Converts temperature from Celsius to Fahrenheit.</li>
        <li>Converts temperature from Celsius to Kelvin.</li>
        <li>Interactive and real-time conversion as you input data.</li>
        <li>Responsive design for better user experience on mobile and desktop.</li>
    </ul>
    <h2>How to Use</h2>
    <ol>
        <li>Enter the temperature in Celsius into the input field.</li>
        <li>Click the "Convert" button.</li>
        <li>Converted values in Fahrenheit and Kelvin will be displayed below.</li>
    </ol>
    <h2>Setup Instructions</h2>
    <p>Follow the steps below to set up and run this project on your local machine:</p>
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js and npm installed on your computer.</li>
    </ul>
    <h3>Installation</h3>
    <ol>
        <li>Clone the repository or download the project files to your local machine.</li>
        <li>Navigate to the project directory in your terminal.</li>
        <li>Run <code>npm install</code> to install the necessary dependencies.</li>
    </ol>
    <h3>Running the Project</h3>
    <ol>
        <li>In the terminal, run <code>npm start</code>.</li>
        <li>The app will automatically open in your default browser.</li>
        <li>You can now use the Temperature Converter directly in your browser.</li>
    </ol>
    <h2>Code Overview</h2>
    <p>The main application logic is contained in <code>App.js</code>. This file includes:</p>
    <ul>
        <li>State management for storing the Celsius input and converted Fahrenheit and Kelvin values.</li>
        <li>A function to handle the temperature conversion using simple arithmetic formulas.</li>
        <li>JSX structure to display the input field, button, and converted results.</li>
    </ul>
    <h2>Conversion Formulas</h2>
    <p>The conversion formulas used in this application are:</p>
    <ul>
        <li><strong>Fahrenheit:</strong> <code>(Celsius * 9/5) + 32</code></li>
        <li><strong>Kelvin:</strong> <code>Celsius + 273.15</code></li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML</li>
    </ul>
    <h2>License</h2>
    <p>This project is licensed under the MIT License. You are free to use, modify, and distribute the project as per the terms of the license.</p>    
          
  </body>
</html>