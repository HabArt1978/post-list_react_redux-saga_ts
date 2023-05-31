import { Routes, Route, Navigate } from "react-router-dom"

import NavigationBar from "./components/NavigationBar/NavigationBar"
import PostsIndexPage from "./pages/posts"
import PostShowPage from "./pages/posts/show"
import AboutMePage from "./pages/aboutMe"
import UserDetailsPage from "./pages/userDetails"
import NotFoundPage from "./pages/404"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route
          path="/posts"
          element={<PostsIndexPage />}
        />
        <Route
          path="/posts/:id"
          element={<PostShowPage />}
        />
        <Route
          path="/about-me"
          element={<AboutMePage />}
        />
        <Route
          path="/users/:id"
          element={<UserDetailsPage />}
        />
        <Route
          path="/"
          element={<Navigate to={"/posts"} />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  )
}

export default App
