import Navbar from "./components/Navbar";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    // change the color of the site to dark
    <div className="App min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">

      {/* 2. Created the Navbar component */}
      <Navbar/>
      {/* update the padding to demonstrate tailwind more */}
      <h1 className=" py-6 px-8 text-3xl font-bold ">Anime List</h1>

      {/* 3. Created the VideoCard component */}
      <VideoCard/>
    </div>
  );
}

export default App;
