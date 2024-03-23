import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import HomeCards from "./components/HomeCards"
// import JobListings from "./components/JobListings"
// import ViewAllJobs from "./components/ViewAllJobs"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
  // return (
  //   <>
  //     <Navbar />
  //     <Hero />
  //     <HomeCards />
  //     <JobListings />
  //     <ViewAllJobs />
  //   </>
  // )
}

export default App
