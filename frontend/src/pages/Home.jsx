import React, { useState } from 'react'
import Container from '../components/Container'
import LandingPage from '../components/LandingPage'
import ExploreMenu from '../components/ExploreMenu'
import ShowFoodList from '../components/ShowFoodList'

const Home = ({searchQuery}) => {

  const [category, setCategory] = useState('all');

  return (
    <div>
      <LandingPage/>

        <Container>
          <ExploreMenu category={category} onClick={setCategory} />
          <ShowFoodList category={category} searchQuery={searchQuery} />
        </Container>
    </div>
  )
}

export default Home
