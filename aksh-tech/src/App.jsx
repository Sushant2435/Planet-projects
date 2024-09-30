import React from 'react'
import Products from './components/products/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductForm from './components/products/ProductForm'
import Todo from './components/todo/Todo'
import Modal from './components/Modal/Modal'
import Dashboard from './components/Dashboard/Dashboard'
import SplineAreaChart from './components/Dashboard/Chart'
import Dashboard1 from './components/Newdashboard/Dashboard'
import ZoomImg from './components/zoomimageonhover/ImageZoom'
import NewMedicine from './components/Modal/Modal1'
// import Dashboard from './components/Newdashboard/Dashboard'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/todo' element={<Todo />} />
          <Route path='/' element={<Products />} />
          <Route path='/edit-product/:id' element={<ProductForm />} />
          <Route path='/modal' element={<Modal />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/chart' element={<SplineAreaChart />} />
          <Route path='/newdashboard' element={<Dashboard1 />} />
          <Route path='/zoomimg' element={<ZoomImg />} />
          <Route path='/modal1' element={<NewMedicine />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
