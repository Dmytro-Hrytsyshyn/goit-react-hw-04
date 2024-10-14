import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import axios from "axios";

import SearchBar from "./components/SearchBar.jsx/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [photos, setPhotos] = useState([]);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState(""); // Для відстеження пошукового запиту

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      toast.error("Текстове поле повинно бути заповнене"); // Нічого не робити, якщо поле порожнє
    }
    setQuery(value); // Оновлюємо запит, викликавши useEffect
    setValue("");
  };

  // Виклик API Unsplash для отримання фото
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=oy3O76jK3fZVKx5w7V5H6wYC5qDQ4exG1RaF-9t3ra0`
        );
        setPhotos(data.results); // Зберігаємо отримані фото
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    if (query) {
      // Викликаємо fetchPhotos лише якщо є значення query
      fetchPhotos();
    }
  }, [query]); // Виклик useEffect коли змінюється query

  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        value={value}
        setValue={setValue}
      />
      <Toaster position="top-right" reverseOrder={true} />;
      <ImageGallery photos={photos} />
    </div>
  );
}

export default App;
