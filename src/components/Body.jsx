import { useEffect, useState } from 'react'
import HomeShimmer from './HomeShimmer';
import RestaurantCard from './RestaurantCard';
import { RESTAURANTS_DATA_URL } from '../constants/constants';

const Body = () => {
    const [listofrestaurants,setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_DATA_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listofrestaurants.length === 0 ? (
    <HomeShimmer/>
  ) : (
    <>
      <div className='body'>
        <div className='my-8 mx-10'>
          <h1 className='text-xl font-extrabold'>Filters</h1>
          <button type='submit' className='inline-block px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none' onClick={() => {
            const topratedlist = listofrestaurants.filter(
                (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(topratedlist);
          }}>Top Rated</button>
        </div>
        <h1 className='mx-10 text-xl font-extrabold'>Best Restaurants In Banglore</h1>
        <div className='my-8 mx-10 grid grid-cols-1 gap-2 md:grid-cols-3'>{listofrestaurants.map((res) => (<RestaurantCard key={res.info.id} resData={res}/>))}</div>
      </div>
    </>
  )
}

export default Body