import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import SignUpPage from './pages/signup'
import SignInPage from './pages/signin'
import CreateProfile from './pages/create-profile'
import TestRegister from './pages/test-register'
import AboutUs from './pages/about-us'

import UserProfileLayout from './layout/user-profile'
import Profile from './pages/profile'
import Subscription from './pages/subscription'
import Preferences from './pages/preferences'
import NotificationSettings from './pages/notifications'

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
        <Route path="/test-register" element={<TestRegister />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* User Profile Routes */}

        <Route path="/user-profile" element={<UserProfileLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="notifications" element={<NotificationSettings />} />
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
