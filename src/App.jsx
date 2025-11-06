
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
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

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>

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
    </>
  )
}

export default App
