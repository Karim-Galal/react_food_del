import React, { useState } from 'react'
import Container from '../components/Container'
import ExploreMenu from '../components/ExploreMenu'
import ShowFoodList from '../components/ShowFoodList'

const Menu = ({searchQuery}) => {

  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('');

  return (
    <Container>
      <div className="mb-4">
        <h1 className="text-3xl font-semibold mb-2">Our Menu</h1>
        <p className="text-slate-600 lg:w-[650px]">
          Browse every dish, filter by category, search by name, and sort the menu to find your next meal faster.
        </p>
      </div>

      <ExploreMenu category={category} onClick={setCategory} />

      <div className="flex justify-end mb-4">
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500"
        >
          <option value="">Sort by</option>
          <option value="name">A - Z</option>
          <option value="price-low">Price Low to High</option>
          <option value="price-high">Price High to Low</option>
        </select>
      </div>



      <ShowFoodList 
        category={category} 
        searchQuery={searchQuery} 
        sortBy={sortBy}
      />
    </Container>
  )
}

export default Menu
