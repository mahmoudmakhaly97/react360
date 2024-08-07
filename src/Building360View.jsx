import  { useState, useRef, useEffect } from 'react';
import React360Viewer from 'react-360-view';

const Building360View = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const viewerRef = useRef(null);
  const isDragging = useRef(false);

  // Define a custom mapping for JPG and corresponding SVG overlays
  const imagePaths = [
    {
      jpg: '/images/jpg/image1.jpg',
      svgs: [
        '/images/24-HD-SVG/Image_A.01_Avaliable_80_1_01/Verdana-Apartments.Apartment_1001_00000.svg',
        '/images/24-HD-SVG/Image_A.04_Avaliable_100_2_03/Verdana-Apartments-Apartment_3004.000.svg',
        '/images/24-HD-SVG/Image_A.05_Avaliable_90_2_09/Verdana-Apartments-Apartment_9005.000.svg',
        '/images/24-HD-SVG/Image_A.06_Avaliable_90_2_06/Verdana-Apartments-Apartment_6006.000.svg',
        '/images/24-HD-SVG/Image_A.07_Avaliable_90_2_10/Verdana-Apartments-Apartment_10006.000.svg',
'/images/24-HD-SVG/Image_A.07_Avaliable_110_3_12/Verdana-Apartments-Apartment_12007.000.svg',
        '/images/24-HD-SVG/Image_A.08_Avaliable_110_3_03/Verdana-Apartments-Apartment_3008.000.svg',
        '/images/24-HD-SVG/Image_A.09_Avaliable_90_2_06/Verdana-Apartments-Apartment_3008.000.svg',
        '/images/24-HD-SVG/Image_A.10_Avaliable_90_2_05/Verdana-Apartments-Apartment_5010.000.svg',
      ],
    },
    {
      jpg: '/images/jpg/image2.jpg',
      svgs: [
        '/images/24-HD-SVG/image1/overlay2.svg',
        '/images/24-HD-SVG/image2/overlay2.svg',
        '/images/24-HD-SVG/image3/overlay2.svg',
        // Add more paths as needed
      ],
    },
    // Add more mappings for other images
  ];

  // Handle mouse events for drag simulation
  useEffect(() => {
    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseMove = (event) => {
      if (isDragging.current && viewerRef.current) {
        const index = Math.floor((event.clientX / window.innerWidth) * 24);
        setCurrentImageIndex(index % 24); // Ensure index is within bounds
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="three-sixty-container">
      <React360Viewer
        ref={viewerRef}
        amount={24} // Number of images
        imagePath="/images/jpg" // Path to your images
        fileName="image{index}.jpg" // File name pattern
        speed={50000} // Speed of rotation
      />
      <div className="overlay-container">
        {imagePaths[currentImageIndex % imagePaths.length]?.svgs.map((svgSrc, idx) => (
          <img
            key={idx}
            src={svgSrc}
            alt={`Overlay ${idx}`}
            className="overlay-image"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Building360View;


//.................................................

// import React, { useState, useRef, useEffect } from 'react';
// import React360Viewer from 'react-360-view';
 

// const Building360View = () => {
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const viewerRef = useRef(null);
//   const totalJpgImages = 24;
//   const totalSvgImagesPerJpg = 9;

//   // Generate JPEG image paths
//   const jpgImages = Array.from({ length: totalJpgImages }, (_, i) => `/images/jpg/image${i + 1}.jpg`);

//   // Generate SVG image paths for the current frame
//   const getSvgImages = (frame) => {
//     const basePath = `/images/svg/image${frame + 1}`;
//     return Array.from({ length: totalSvgImagesPerJpg }, (_, i) => `${basePath}/overlay${i + 1}.svg`);
//   };

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const rotationSpeed = 0.2;
//       const deltaX = event.movementX;
//       const newIndex = Math.floor(deltaX * rotationSpeed);
//       setCurrentFrame((prevIndex) => (prevIndex + newIndex + totalJpgImages) % totalJpgImages);
//     };

//     const container = viewerRef.current;
//     if (container) {
//       container.addEventListener('mousemove', handleMouseMove);
//       return () => {
//         container.removeEventListener('mousemove', handleMouseMove);
//       };
//     }
//   }, [totalJpgImages]);

//   return (
//     <div className="three-sixty-container" ref={viewerRef}>
//       <React360Viewer
//         amount={totalJpgImages}
//         imagePath="/images/jpg"
//         fileName="image{index}.jpg"
//         autoplay={false}
//         index={currentFrame}
//       />
//       <div className="svg-overlays">
//         {getSvgImages(currentFrame).map((svgSrc, idx) => (
//           <img
//             key={idx}
//             src={svgSrc}
//             alt={`Overlay ${idx + 1}`}
//             className="svg-overlay"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// import  { useState, useRef, useEffect } from 'react';
// import React360Viewer from 'react-360-view';
 
// const Building360View = () => {
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const viewerRef = useRef(null);
//   const totalJpgImages = 24;
//   const totalSvgImagesPerJpg = 9;

//   // Get the SVG image paths for the current frame
//   const getSvgImages = (frame) => {
//      // Return the SVG paths for the current frame
//     return Array.from({ length: totalSvgImagesPerJpg }, (_, i) => 
//       `/images/svg/image${frame + 1}/overlay${i + 1}.svg`
//     );
//   };

//   // Function to handle frame change based on viewer interaction
//   const handleFrameChange = (index) => {
//     setCurrentFrame(index);
//   };

//   useEffect(() => {
//     const viewer = viewerRef.current;

//     // Check if the viewer has a method to get the current index
//     if (viewer && typeof viewer.getCurrentIndex === 'function') {
//       const updateFrame = () => handleFrameChange(viewer.getCurrentIndex());
//       viewer.addEventListener('frameChange', updateFrame);

//       // Cleanup on unmount
//       return () => {
//         if (viewer && typeof viewer.removeEventListener === 'function') {
//           viewer.removeEventListener('frameChange', updateFrame);
//         }
//       };
//     }
//   }, []);

//   return (
//     <div className="three-sixty-container" ref={viewerRef}>
//       <React360Viewer
//         amount={totalJpgImages}
//         imagePath="/images/jpg"
//         fileName="image{index}.jpg"
//         autoplay={false}
//         index={currentFrame}
//         onChange={handleFrameChange} // Call this function to update currentFrame based on viewer changes
//       />
//       <div className="svg-overlay-container">
//         {getSvgImages(currentFrame).map((svgSrc, idx) => (
//           <img
//             key={idx}
//             src={svgSrc}
//             alt={`Overlay ${idx + 1} for image ${currentFrame + 1}`}
//             className="svg-overlay"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Building360View;
