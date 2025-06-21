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
import Activities from './pages/activities'
import ActivityDetailPage from './pages/activity-detail'
import Progress from './pages/progress'
import Library from './pages/library'

import UserProfileLayout from './layout/user-profile'
import Profile from './pages/profile'
import Subscription from './pages/subscription'
import Preferences from './pages/preferences'
import NotificationSettings from './pages/notifications'


import AdminDashboardLayout from './layout/admin-dashboard'
import Dashboard from './pages/admin-dashboard-pages/dashboard'
import ActiviteitenBeheer from './pages/admin-dashboard-pages/activiteitenbeheer'
import IngezondenActiviteiten from './pages/admin-dashboard-pages/ingezondenactiviteiten'
import GebruikersBeheren from './pages/admin-dashboard-pages/gebruikersbeheren'
import ContactBerichten from './pages/admin-dashboard-pages/contactberichten'


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
        <Route path="/activities" element={<Activities />} />
        <Route path="/activity-detail/:id" element={<ActivityDetailPage />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/library" element={<Library />} />

        {/* User Profile Routes */}

        <Route path="/user-profile" element={<UserProfileLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="notifications" element={<NotificationSettings />} />
        </Route>


        {/* Admin Dashboard Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="activiteitenbeheer" element={<ActiviteitenBeheer />} />
          <Route path="ingezondenactiviteiten" element={<IngezondenActiviteiten />} />
          <Route path="gebruikersbeheer" element={<GebruikersBeheren />} />
          <Route path="contactberichten" element={<ContactBerichten />} />
          {/* Add other admin dashboard routes here */}
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
