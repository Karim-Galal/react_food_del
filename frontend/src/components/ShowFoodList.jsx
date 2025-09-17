import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItemCard from './FoodItemCard';

const ShowFoodList = ({category }) => {

  const {food_list} = useContext(StoreContext);

  return (

    <div className='food-list'>
      <h3 className='text-2xl py-3 mb-3'>Top dishes near you</h3>

      <div className="food-display grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto justify-center  ">
        
        {
          food_list.map((item, index) => (
            
              (category == 'all' || category == item.category)&& (

                <FoodItemCard item={item} key={index}  />
              )

              
            

          ))
        }
      </div>

      
    </div>
  )
}

export default ShowFoodList
