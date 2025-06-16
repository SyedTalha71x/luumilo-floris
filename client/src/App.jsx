import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import SignUpPage from './pages/signup'
import SignInPage from './pages/signin'
import CreateProfile from './pages/create-profile'

import UserProfileLayout from './layout/user-profile'
import Profile from './pages/profile'

function AppWrapper() {
  const location = useLocation()
  const hideLayout = location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/create-profile' 


  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/create-profile" element={<CreateProfile />} />

        <Route path="/user-profile" element={<UserProfileLayout />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      {!hideLayout && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  )
}

export default App
