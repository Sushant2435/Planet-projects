import React from 'react'
import Header from './Header'
import Card from './Card'
import Table from './Table'
import Graph from './Graph'

const Dashboard = () => {
    return (
        <div className='bg-gray-100 px-48 py-2'>
            <Header />
            <Card />    
            <Graph />
            <Table />
        </div>
    )
}
export default Dashboard
