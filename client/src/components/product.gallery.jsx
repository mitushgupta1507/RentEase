import { useState } from "react";

function ProductGallery() {
  const images = [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <img
        src={selectedImage}
        alt=""
        className="w-full h-96 object-cover rounded-3xl"
      />

      <div className="flex gap-4 mt-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setSelectedImage(image)}
            className="w-24 h-24 rounded-xl object-cover cursor-pointer border-2 hover:border-indigo-600"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;