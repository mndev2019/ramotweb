
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import DataMigration from './Pages/Services/DataMigration'
import DigitalMarketing from './Pages/Services/DigitalMarketing'
import WebDevelopment from './Pages/Services/WebDevelopment'
import SoftwareSolutions from './Pages/Services/SoftwareSolutions'
import AppDevelopment from './Pages/Services/AppDevelopment'
import GoogleService from './Pages/Services/GoogleService'
import UiUxDesigning from './Pages/Services/UiUxDesigning'
import CrmService from './Pages/Services/CrmService.jsx'

import ThankYou from './Pages/Contact/Thankyou.jsx'
import { useEffect } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // --- 1. Create a Analytics Wrapper ---
// This component listens for URL changes and sends them to Google
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
}
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<WebLayout /> */}
        <Route path="/" element={
          <>
            <AnalyticsTracker /> {/* Tracks every route change */}
            <WebLayout />
          </>
      
      }>

          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/data-migration' element={<DataMigration />} />
          <Route path='/digital-marketing' element={<DigitalMarketing />} />
          <Route path='/web-development' element={<WebDevelopment />} />
          <Route path='/software-solutions' element={<SoftwareSolutions />} />
          <Route path='/app-development' element={<AppDevelopment />} />
          <Route path='/google-service' element={<GoogleService />} />
          <Route path='/uiux-designing' element={<UiUxDesigning/>}/>
          <Route path='/crm-services' element={<CrmService/>}/>
          <Route path='/thank-you' element={<ThankYou/>}/>
        </Route>


      </>


    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
