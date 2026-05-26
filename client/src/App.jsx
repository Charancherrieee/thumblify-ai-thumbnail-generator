import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">Thumblify 🚀</h1>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Generate</a>
          <a href="#">Community</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            AI Powered <span>Thumbnail Generator</span>
          </h1>

          <p>
            Create stunning YouTube thumbnails instantly using AI,
            Groq optimization and smart image generation.
          </p>

          <button className="generate-btn">
            Generate Thumbnail
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
            alt="thumbnail"
          />
        </div>
      </section>

      <section className="features">
        <div className="card">
          <h2>⚡ Fast AI</h2>
          <p>Generate thumbnails within seconds.</p>
        </div>

        <div className="card">
          <h2>🎨 Smart Design</h2>
          <p>Optimized prompts for better visuals.</p>
        </div>

        <div className="card">
          <h2>🌎 Community</h2>
          <p>Explore public creator thumbnails.</p>
        </div>
      </section>
    </div>
  );
}

export default App;