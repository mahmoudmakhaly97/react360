 import React360Viewer from 'react-360-view';

const Building360View = () => {
  return (
    <div className="three-sixty-container">
      <React360Viewer
        amount={24} // number of images
        imagePath="/images/jpg" // path to your images
        fileName="image{index}.jpg" // file name pattern, where {index} will be replaced by the image number
          speed={50000} // optional: to control the speed of rotation
              />
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
