
'use client'
import { useState, useEffect } from 'react'
 
function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
//   const API_KEY = process.env.API_KEY
  // const searchTerm = 'books';
  const page=1;
  const words = ['books', 'mountains', 'olive tree', 'family', 'coding'];
  const randomIndex = Math.floor(Math.random() * words.length);
  let query = words[randomIndex];
//   const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${API_KEY}`;
//   const response = await fetch(`https://api.unsplash.com/search/photos?&query=${query}&client_id=${API_KEY}&page=${page}&per_page=${perPage}`);
  const url = `https://api.unsplash.com/search/photos?&query=${query}&client_id=${process.env.API_KEY}`


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>
 
  return (
    <div>
      <h1>Photo App</h1>
      <p>photo</p>
    </div>
  )
}

export default Profile


// const API_KEY = process.env.API_KEY
//   const searchTerm = 'books';
//   const page=1;
//   const words = ['books', 'mountains', 'olive tree', 'family', 'coding'];
//   const randomIndex = Math.floor(Math.random() * words.length);
//   let searchTerm = words[randomIndex];
//   const url = `https://api.unsplash.com/photos/?client_id=${API_KEY}`