// pages/index.js
'use client'
import { useState, useEffect, useRef } from 'react';
import { useSnapper } from './store.js'; // Adjust the path accordingly
import styles from './style01.css'; // Import your CSS module (adjust the path)

const App = () => {
  
  const { data, fetchUsers, loading } = useSnapper();
  const [query, setQuery] = useState('olive tree');
  const [hovDesc, setHovDesc] = useState('');
  const [hovImg, setHovImg] = useState(false);
  const hoveredImgRef = useRef(null);
  const totalPages = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers(query, page);
  }, [query, page]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchUsers(query, page);
  };

  const handleButtonClick = (i) => {
    setPage(i);
    fetchUsers(query, i);
  };

  const handleChange = (event) => {
    setPage(1);
    setQuery(event.target.value);
  };

  const handleMouseEnter = (i) => {
    hoveredImgRef.current = i;
    setHovImg(true);
  };

  const handleMouseLeave = () => {
    hoveredImgRef.current = null;
    setHovImg(false);
  };

  const renderButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => handleButtonClick(i)}>
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Snapper</h1>
      <form onSubmit={handleSearch} className={styles.photo__form}>
        <label htmlFor="query">Search:</label>
        <input type="text" id="query" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <h2 className={styles.PageNo}>Page {page}:</h2>
      <div className={styles.grid}>
        {loading ? (
          <h1>Loading...</h1>
        ) : data && data.length > 0 ? (
          data.map((d, i) => (
            <div
              className={`${styles.photo__img} ${styles[`grid-${i % 3}`]} ${styles.box}`}
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className={styles.card}
                ref={hoveredImgRef}
                src={d.urls.regular}
                alt={d.alt_description}
                onMouseEnter={() => setHovDesc(d.alt_description)}
                onMouseLeave={() => setHovDesc('')}
              />
              {hovDesc === d.alt_description && (
                <p className={styles.photo__img_text} style={{ fontStyle: 'bold' }}>
                  {' '}
                  {d.alt_description}
                </p>
              )}
            </div>
          ))
        ) : (
          <h1>Not found</h1>
        )}
      </div>
      <div className={`${styles.flex} ${styles.paddingBtns} ${styles.marginBtns} ${styles.btn}`}>{renderButtons()}</div>
    </div>
  );
};

export default App;
