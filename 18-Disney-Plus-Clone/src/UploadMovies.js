import React, { useEffect, useState } from "react";
import db, { doc, setDoc } from "./firebase"; // Adjust the import path as needed
import moviesData from "./disneyPlusMoviesData.json";

const UploadMovies = () => {
  const [status, setStatus] = useState("Idle");

  useEffect(() => {
    async function upload() {
      setStatus("Uploading movies...");
      try {
        for (const [id, movie] of Object.entries(moviesData)) {
          await setDoc(doc(db, "movies", id), movie);
        }
        setStatus("Movies uploaded successfully!");
      } catch (error) {
        setStatus("Error uploading movies.");
        console.error("Upload error:", error);
      }
    }
    upload();
  }, []);

  return (
    <div style={{ color: "white", fontSize: 18, textAlign: "center", marginTop: 40 }}>
      {status}
    </div>
  );
};

export default UploadMovies;
