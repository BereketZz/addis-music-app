<h1>Addis Software Test Project - MERN Stack</h1>

<p>This project is a Full Stack Application built using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). It allows users to manage song information and view various statistics related to the songs.</p>

<h2>Features</h2>
<ul>
    <li><strong>CRUD Operations:</strong> Create, read, update, and delete songs.</li>
    <li><strong>Statistics:</strong> Provides detailed statistics including:
        <ul>
            <li>Total number of songs, artists, albums, and genres.</li>
            <li>Number of songs in each genre.</li>
            <li>Number of songs and albums each artist has.</li>
            <li>Number of songs in each album.</li>
        </ul>
    </li>
    <li><strong>Real-time Updates:</strong> The frontend automatically updates the song list and statistics without reloading the page.</li>
    <li><strong>Filtering:</strong> Filter songs by genre.</li>
</ul>

<h2>Technologies Used</h2>

<h3>Backend</h3>
<ul>
    <li><strong>ExpressJS:</strong> Handles HTTP requests.</li>
    <li><strong>MongoDB:</strong> Database for storing song data.</li>
    <li><strong>Mongoose:</strong> Interacts with MongoDB, models data, and creates schemas.</li>
    <li><strong>Docker:</strong> Packages the backend using Docker.</li>
</ul>

<h3>Frontend</h3>
<ul>
    <li><strong>TypeScript:</strong> Used to write strongly-typed code.</li>
    <li><strong>ReactJS:</strong> Builds the user interface.</li>
    <li><strong>Redux Toolkit:</strong> Manages the application state.</li>
    <li><strong>Redux-Saga:</strong> Handles side effects like API calls.</li>
    <li><strong>Emotion & Styled System:</strong> Styles the application.</li>
</ul>

<h2>Setup and Installation</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js</li>
    <li>Docker (for backend)</li>
</ul>

<h3>Backend</h3>
<ol>
    <li>Clone the repository.</li>
    <li>Navigate to the <code>backend</code> folder.</li>
    <li>Build the Docker image:
        <pre><code>docker-compose up</code></pre>
    </li>
   <li>Run it on localhost:
        <pre><code>npm start</code></pre>
    </li>
    <li>The backend API will be available at <code>http://localhost:3001/</code>.</li>
</ol>

<h3>Frontend</h3>
<ol>
    <li>Navigate to the <code>frontend</code> folder.</li>
    <li>Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Start the development server:
        <pre><code>npm run dev</code></pre>
    </li>
    <li>The frontend will be available at <code>http://localhost:5173/</code>.</li>
</ol>

<h2>Live Links</h2>
<ul>
    <li><strong>Backend API:</strong> <a href="https://addis-music-beki.onrender.com/api/songs">Backend on Render</a></li>
    <li><strong>Frontend:</strong> <a href="https://addis-music-nh4f2owbj-bereketzzs-projects.vercel.app/">Frontend on Vercel</a> (Replace with actual link)</li>
</ul>
