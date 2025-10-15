
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import DataMigration from './Pages/Services/DataMigration'
import DigitalMarketing from './Pages/Services/DigitalMarketing'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout/>}>

          <Route index element={<Home />} />
           <Route path='/contact' element={<Contact />} />
            <Route path='/data-migration' element={<DataMigration/>}/>
            <Route path='/digital-marketing' element={<DigitalMarketing />} />
         {/* 
         
          <Route path='/web-developer' element={<WebDeveloper/>}/> */}

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
