
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CountriesPage from './components/countries/page'
import CountryDetailPage from './components/country-detail/page'
import Header from './components/shared/Header'

function App() {
  return (
    <div className="bg-grey">
    <Header/>
      <Routes>
        <Route index element={<CountriesPage/>}/>
        <Route path='details' element={<CountryDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
