import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css"; 

function Lazyload() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const data = [
      'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
      'https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg',
      'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80'
    ];
    setImages(data);
  }, []);

  return (
    <div>
     <h2>Lazy Loading Images</h2>
      {images.map((item, index) => {
        return (
          <LazyLoadImage
            key={index} 
            src={item}
            alt={`Lazy loaded image ${index + 1}`} 
            effect="opacity" 
            style={{  margin: "20px auto", width: "300px", height: "auto" }} 
          />
        );
      })}
    </div>
  );
}

export default Lazyload;
