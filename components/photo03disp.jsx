'use client'
import {useState} from 'react';
import './style03.css'

const Display = () => {
    return(
        <div className='container__details'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 800: 2, 1200: 3, 1300: 4 }}>
            <Masonry columnsCount={3} gutter="0px">
            {data.map((d,i)=>(       
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
                    <DraggableImage src={data[enlargedIndex].urls.regular} alt={data[enlargedIndex].alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                </div>
            )}
      </div>
    )
}