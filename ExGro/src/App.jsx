import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AddGrocery from './Components/addGrocery'
import './App.css'


function App() {
  return (
    <>
    <Header/>
    <main>
      <AddGrocery/>
    </main>
    <Footer/>
    </>
  )
}

export default App
