import React, { useState, useRef } from 'react';
import image from '../../assets/Images/medicine.png';
import './style.css'

function ZoomImg() {
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZooming, setIsZooming] = useState(false);
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;

        if (x >= 0 && x <= width && y >= 0 && y <= height) {
            setIsZooming(true);
            setZoomPosition({
                x: (x / width) * 100,
                y: (y / height) * 100
            });
        } else {
            setIsZooming(false);
        }
    };

    return (
        <div className="zoom-container mt-24" onMouseMove={handleMouseMove}>
            <div className="static-image-box">
                <img
                    ref={imageRef}
                    src={image}
                    alt="Static Medicine"
                    className="static-image"
                />
            </div>
            <div className={`zoom-image-box ${isZooming ? 'active' : ''}`}>
                {/* Zoomed image that moves based on mouse pointer */}
                {isZooming && (
                    <div
                        className="zoomed-image"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                            backgroundSize: '200%' /* Adjust for zoom level */
                        }}
                    ></div>
                )}
            </div>
        </div>
    );
}

export default ZoomImg;
