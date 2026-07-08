import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContextValue'
import FoodItemCard from './FoodItemCard';

const ShowFoodList = ({category, searchQuery = '', sortBy = '' }) => {

  const {food_list} = useContext(StoreContext);
  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filteredFoodList = food_list.filter((item) => {
    const matchesCategory = category == 'all' || category == item.category;
    const matchesSearch = item.name.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;

    return 0;
  });

  return (

    <div className='food-list'>
      <h3 className='text-2xl py-3 mb-3'>Top dishes near you</h3>

      <div className="food-display grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto justify-center  ">
        
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((item, index) => (
            <FoodItemCard item={item} key={index}  />
          ))
        ) : (
          <p className="col-span-full text-center text-slate-500 py-8">
            No results found
          </p>
        )}
      </div>

      
    </div>
  )
}

export default ShowFoodList
