'use client'
import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
const API_KEY = process.env.NEXT_PUBLIC_VITE_API_KEY;
import './style01.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Measure from 'react-measure';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import ZoomPanPinch from 'react-zoom-pan-pinch';
import FooterComponent from './footer';
// import Alarger from './Alarger';
import useStore from './store03.js'
import DraggableImage from './DraggableImage';
// import ZoomPanPinch from 'react-zoom-pan-pinch';
// import ZoomPanPinch from 'react-zoom-pan-pinch';

function Profile() {
    const { data, fetchData, loading } = useStore();
//   const [data, setData] = useState([]);
//   const [isLoading, setLoading] = useState(true);
  const [enlarged, setEnlarged] = useState({});
  const [enlargedIndex, setEnlargedIndex] = useState(null);
//   const [zoomLevel, setZoomLevel] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [query, setQuery]= useState('miscellaneous');
//   const data = useStore((state) => state.data);
//   const loading = useStore((state)=>state.loading);
//   const fetchData = useStore((state) => state.fetchData);
const [page,setPage]= useState(1);
const [photos, setPhotos]= useState([]);

  useEffect(() => {
    if (enlargedIndex !== null) {
      setScrollPosition(window.scrollY);
    }
  }, [enlargedIndex]);
  
  const openModal = (index) => {
    setEnlargedIndex(index);
  };

  const closeModal = () => {
    setEnlargedIndex(null);
  };

//     const page=1;
//     const perPage=27;
//     const values = [1, 2, 3, 2, 1];
//     const getRandomWord = () => {
//     const words = ['books', 'mountains', 'olive tree', 'family', 'coding'];
//     const randomIndex = Math.floor(Math.random() * words.length);
//     return words[randomIndex];
//   };

//   const fetchPhotos = async () => {
//     try {
//       // const query = getRandomWord();
//       const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.API_KEY}`;
//       const url2 = `https://api.unsplash.com/search/photos?&query=${query}&client_id=${process.env.NEXT_PUBLIC_VITE_API_KEY}&page=${page}&per_page=${perPage}`;
//       const url3 = `https://api.unsplash.com/search/photos?&query=${query}&client_id=${API_KEY}&page=${page}&per_page=${perPage}`;
//         console.log('api key', API_KEY);
//       const response = await fetch(url3);
//       const responseData = await response.json();
//       setData(responseData.results);
//       console.log('data',data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

  useEffect(() => {
    fetchData(query, page);
  }, []);

  useEffect(() => {
    (data.length !==0) && setPhotos(prevPhotos => [...prevPhotos, ...data]);
  }, [data]);

  useEffect(() => {
    fetchData(query, page);
  }, [page]);

  if (loading) return <p style={{display:'grid',placeContent:'center',height:'100vh', fontSize:'12rem', backgroundColor: 'var(--color-1)', fontFamily: 'var(--font-family-7)', color:'white'}}>Loading...</p>;
  if (!data) return <p style={{display:'grid',placeContent:'center',height:'100vh', fontSize:'8rem', backgroundColor: 'var(--color-1)'}}>No data</p>;


  const toggleEnlarged = (id) => {
    setEnlarged((prevEnlarged) => ({
      ...prevEnlarged,
      [id]: !prevEnlarged[id],
    }));
  };

  const onClose = () => {
    closeModal();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPhotos([]);
    setPage(1);
    fetchData(query,page);
  }

  // const handleFormSubmit2 = (e) => {
  //   e.preventDefault();
  //   fetchPhotos();
  // }

  const handlePageIncrease = () => {
    setTimeout(()=> {
      setPage(prevPage => prevPage + 1)
    }, 100)
  }


    
  return (
    <div>
        <header>
            <nav>
                  <div className='logo'>
                    <img src='/X__logo.png' alt='' />
                  </div>
                  <form onSubmit={handleFormSubmit}> 
                      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Enter your search' />
                      <button type="submit">Search</button>
                  </form>
            </nav>
            <div className='header__bottom'>
                  <div className='header__left'>
                      <h1>Lets explore the world around through our extravagant collection of photos.</h1>
                      <p> Powered by great creators around the world.</p>
                      <form onSubmit={handleFormSubmit}> 
                          <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Enter your search' />
                          <button type="submit">Search</button>
                      </form>
                  </div>
                  <div className='header__right'>
                      <div className='header__right-1 header__right-image'>
                        <img  src='/A.png' alt=""/>
                      </div>
                      <div className='header__right-2 header__right-image'>
                        <img  src='/B.png' alt=""/>
                      </div>
                      <div className='header__right-3 header__right-image'>
                        <img  src='/C.png' alt=""/>
                      </div>
                      <div className='header__right-4 header__right-image'>
                        <img  src='/D.png' alt=""/>
                      </div>
                      <div className='header__right-5 header__right-image'>
                        <img  src='/E.png' alt=""/>
                      </div> 
                  </div>
            </div>
        </header>
      <DndProvider backend={HTML5Backend}>
      <div className='container__details'>
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 800: 2, 1200: 3, 1300: 4 }}>
      <Masonry columnsCount={3} gutter="0px">
      {photos.map((d,i)=>(       
          <Measure key={i}>
            {({ measureRef }) => (
                <div ref={measureRef}>
                    <div  className={`container__details-photo ${enlarged[i] ? 'enlarged' : ''}`} key={i} onClick={() => openModal(i)}>
                        <img src={d.urls.regular}/>
                        <h1>{d.alt_description}</h1>
                    </div>
                </div>
            )}
          </Measure>
      ))}
      </Masonry>
      </ResponsiveMasonry>
      {enlargedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <DraggableImage src={photos[enlargedIndex].urls.regular} alt={photos[enlargedIndex].alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      )}
      </div>
      </DndProvider>
      <button onClick={()=>setPage(prevPage => prevPage+1)} className='search__form'>search Page {page+1}</button>
      <FooterComponent/>
    </div>
  );
}
// fetchData(query, page + 1)
export default Profile;

// style={{ top: `${scrollPosition}px` }}
// style={{ gridRow: ` span ${values[Math.floor(Math.random() * values.length)]}`}}
// style={{ gridRow: `span ${values[Math.floor(Math.random() * values.length)]}`}}
// height: `${i} % 2 ? "20vh" : "25vh"`, 
{/* <Masonry columnsCount={3} gutter="10px">
            <div className='container__details-photo' key={i} style={{gridRow: `${i} % 2 ? "span 2" : "span 1"`, gridColumn:  `${i} % 2 ? "span 1" : "span 2"` }}>
                <img src={d.urls.regular}/>
                <h1>{d.alt_description}</h1>
            </div>
</Masonry> */}
//  ,gridRow: `${i} % 2 ? "span 2" : "span 1"`, gridColumn:  `${i} % 2 ? "span 1" : "span 2"`
// style={{height: `${i} % 2 ? "25vh" : "30vh"` }}

          // <Measure key={i}>
          //   {({ measureRef }) => (
          //       <div ref={measureRef}>
          //       <div className='container__details-photo' key={i} >
          //           <img src={d.urls.regular}/>
          //           <h1>{d.alt_description}</h1>
          //       </div>
          //       </div>
          //   )}
          // </Measure>