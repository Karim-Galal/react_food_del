import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItemCard from './FoodItemCard';

const ShowFoodList = ({category, searchQuery = '' }) => {

  const {food_list} = useContext(StoreContext);
  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filteredFoodList = food_list.filter((item) => {
    const matchesCategory = category == 'all' || category == item.category;
    const matchesSearch = item.name.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
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
