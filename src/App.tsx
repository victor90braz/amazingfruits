import "./App.css";
import Filter from "./components/Filter/Filter";
import GalleryImages from "./components/GalleryImages/GalleryImages";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Filter />
      <GalleryImages />
    </div>
  );
};

export default App;
