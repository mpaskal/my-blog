import "./App.css";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <h1>My Dev Blog</h1>
      <div id="page-body">
        <HomePage />
        <AboutPage />
        <ArticlesListPage />
        <ArticlePage />
        <NotFoundPage />
      </div>
    </div>
  );
}

export default App;
