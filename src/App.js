import React, { useState } from "react";
import "./App.css";

const playlists = {
  Happy: [
    { title: "Happy - Pharrell Williams", img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=80" },
    { title: "Can't Stop the Feeling - JT", img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=500&q=80" },
    { title: "Walking on Sunshine", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" }
  ],
  Sad: [
    { title: "Someone Like You - Adele", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80" },
    { title: "Let Her Go - Passenger", img: "https://images.unsplash.com/photo-1464375117522-1311f92380a3?auto=format&fit=crop&w=500&q=80" },
    { title: "Fix You - Coldplay", img: "https://images.unsplash.com/photo-1488376739704-877a00f7b29e?auto=format&fit=crop&w=500&q=80" }
  ],
  Energetic: [
    { title: "Eye of the Tiger", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80" },
    { title: "Believer - Imagine Dragons", img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=500&q=80" },
    { title: "Lose Yourself - Eminem", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80" }
  ],
  Chill: [
    { title: "Sunflower - Post Malone", img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80" },
    { title: "Lovely - Billie Eilish", img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80" },
    { title: "Ocean Eyes", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80" }
  ]
};

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  const handleGenerate = () => {
    if (selectedMood && playlists[selectedMood]) {
      setPlaylist(playlists[selectedMood]);
    }
  };

  return (
    <div className="app">
      <h1>MoodMate 🎵</h1>

      <div className="mood-buttons">
        {Object.keys(playlists).map((mood) => (
          <button
            key={mood}
            className={selectedMood === mood ? "active" : ""}
            onClick={() => setSelectedMood(mood)}
          >
            {mood}
          </button>
        ))}
      </div>

      <button className="generate-button" onClick={handleGenerate}>
        Generate Playlist
      </button>

      <div className="playlist-grid">
        {playlist.map((song, index) => (
          <div key={index} className="song-card">
            <img src={song.img} alt={song.title} className="song-img" />
            <p>{song.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
