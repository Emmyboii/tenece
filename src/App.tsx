import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"
import ProjectTypes from "./pages/ProjectTypes"

function App() {

  return (
    <div className="font-sanss">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectTypes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
