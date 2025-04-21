import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to Cnergy E-Learning</h1>
          <p>Learn at your own pace, anytime, anywhere</p>
          <button>Browse Courses</button>
        </section>

        <section className="course-list">
          <h2>Featured Courses</h2>
          <div className="course-card-container">
            <div className="course-card">
              <img src="course-image.jpg" alt="Course Image" />
              <h3>Introduction to Programming</h3>
              <p>Learn the basics of coding in this beginner-friendly course.</p>
              <button>Enroll Now</button>
            </div>
            <div className="course-card">
              <img src="course-image.jpg" alt="Course Image" />
              <h3>Advanced Web Development</h3>
              <p>Master HTML, CSS, and JavaScript for modern web development.</p>
              <button>Enroll Now</button>
            </div>
            {/* Add more course cards as needed */}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Cnergy E-Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
