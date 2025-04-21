import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Cnergy E-Learning</h1>
        <p>Empower your mind, anywhere, anytime.</p>
      </header>

      <div className="card-container">
        <div className="card">
          <h2>Interactive Courses</h2>
          <p>Learn at your own pace with video, quizzes, and assignments.</p>
          <button>Explore Courses</button>
        </div>

        <div className="card">
          <h2>Live Sessions</h2>
          <p>Join live classes and connect with instructors in real-time.</p>
          <button>Join a Session</button>
        </div>

        <div className="card">
          <h2>Track Your Progress</h2>
          <p>Visualize your learning journey with detailed analytics.</p>
          <button>View Dashboard</button>
        </div>
      </div>

      <footer>
        <p>© 2025 Cnergy E-Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
