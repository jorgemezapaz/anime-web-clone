import ChaptersList from "./components/chapter-list/ChaptersList"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import AnimeList from "./components/anime-list/AnimeList";
import ChapterDetail from "./components/chapter/ChapterDetail";
import Header from "./components/header/Header";

function App() {

  return (
    <Router>
      <div className="container mx-auto max-w-5xl p-3 text-lg mt-5">
        <Header/>
        <Routes>
          <Route path="/" element={<AnimeList />}/>
          <Route path="/ver/:id" element={<ChaptersList />}/>
          <Route path="/ver/:animeId/chapter/:chapterId" element={<ChapterDetail/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
