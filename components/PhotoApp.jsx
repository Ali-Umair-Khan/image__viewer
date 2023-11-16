'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
// import SearchImages from './SearchImages'
// const PhotoApp = async () => {
  // const [name, setName]=useState('App Gallary')
  // const [images, setImages] = useState([]);
  // const [query, setQuery]=useState('');

  // if(query.length >= 1){
  //    searchTerm=query;
  // }
  
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setQuery(e.target.value);
  //   searchTerm=query;
  // }
  // console.log(API_KEY);
  // useEffect(() => {
  //   const getImages = async () => {
  //     const response = await axios.get('https://api.unsplash.com/photos/random', {
  //       headers: {
  //         Authorization: `Client-ID ${process.env.API_KEY}`
  //       },
  //       params: {
  //         count: 10
  //       }
  //     });
  //     const res = await response.json();
  //     setImages(res);
  //     console.log(images);
  //   };
  //   getImages();
  // }, []);

  // useEffect(()=>{
      // const getImages = async () => {
        // const response= await fetch(url);
        // const res = await response.json();
        // setImages(res);
        // console.log(typeof(res));
      // }
      // getImages()
  // },[])

  // const handleSearchImages = async (searchTerm) => {
    
      // const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${API_KEY}`);
      // setImages(response.data.results);
    // } catch (err) {
    //   setError(err.message);
    // }
  // };
  // const response= await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}`);
  // const response= await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}`);
  // const response = await fetch(url);
  // const photos = await response.json();
  // setImages(photos);

  // console.log(Array.isArray(photos)); // should log true

  // console.log(typeof(photos)); // outputs an object with key-value pairs.
  // const photosArray = [];
  // photosArray.push(photos);
  // console.log(photos); 
  // console.log(typeof(photosArray), photosArray); // outputs an object with key-value pairs.
//  setImages(photos);
//  console.log(Array.isArray(photosArray)); // should log true

  // setImages(photos);
  // const data = photos;
  // console.log(data.length, typeof(data));
  // console.log(type0f(response));
  // setImages(data);
  // const keysTerms = Object.keys(photos[0]);
  // console.log(keysTerms)
  // console.log(images.length);
  // const {id, urls, alt_description} = photos[0];
  // return (
    // <div>
        // <p>{name}</p>
        {/* <form onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="Search for images"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
         
        </form> */}
        
        //  {photos.length>0 && photos.map((image) => ( 
          // <>
            // <img key={image.id} src={image.urls.regular} alt={image.alt_description} /> 
            // <h3>{image.description}</h3>
          // </>
        // ))} 
        // <p>images length is {images.length}</p>  
        // <h3>photos length is {photos.length}</h3>
    // </div>
  // );
// };

// export default PhotoApp;

// {images.map((image) => ( 
//  <img key={id} src={urls.regular} alt={alt_description} /> 
//   ))} 


export async function fetchRepos(){
  const API_KEY = process.env.API_KEY
  // const searchTerm = 'books';
  const page=1;
  const words = ['books', 'mountains', 'olive tree', 'family', 'coding'];
  const randomIndex = Math.floor(Math.random() * words.length);
  let searchTerm = words[randomIndex];
  const url = `https://api.unsplash.com/photos/?client_id=${API_KEY}`

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function PhotoApp(){

const photos = await fetchRepos();
const [name,setName]=useState('App Gallery');
const [images, setImages]=useState([]);
// useEffect((photos)=>{setImages(photos)},[])
// setImages(photos)
return (
  <div>
      <p>{name}</p>
      {/* <form onSubmit={handleSubmit}> 
        <input
          type="text"
          placeholder="Search for images"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
       
      </form> */}
      
       {/* {photos.length>0 && photos.map((image) => ( 
        <>
          <img key={image.id} src={image.urls.regular} alt={image.alt_description} /> 
          <h3>{image.description}</h3>
        </>
      ))}  */}
      {/* <p>images length is {images.length}</p>  
      <h3>photos length is {photos.length}</h3> */}
  </div>
);
}