import  { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';


const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'https://secure.img1-cg.wfcdn.com/im/63326222/resize-h380-w380%5Ecompr-r70/1540/154087253/Kids+Ride+on+Car.jpg',
    'https://mobileimages.lowes.com/productimages/ed1e3d26-44a3-47ad-9ad8-5dd6593f4998/44205903.jpg',
    'https://cdn.shopify.com/s/files/1/0019/7784/3785/files/WhatsApp_Image_2022-12-14_at_10.56.07_AM.jpg?v=1671443925',
    'https://cdn.shopify.com/s/files/1/1017/2687/products/MKSX1718-BLACK_600x.jpg?v=1604684817',
    'https://img.aosomcdn.com/thumbnail/100/n0/product/2021/12/17/z2j10e17dc60bd069.jpg',
    'https://cdn.shopify.com/s/files/1/0495/0887/6454/products/electric_car_children_1024x.jpg?v=1633522885',
    'https://m.media-amazon.com/images/I/91IEFHzr9iL._AC_SL1500_.jpg',
    'https://images.thdstatic.com/productImages/2ad2ca94-96e8-4f5b-b997-dc4858a63d9b/svn/blacks-costway-kid-cars-ty327764bk-e1_600.jpg',
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className="font-custom-200 inline-block text-2xl md:text-5xl border-b-4 border-theme-100 px-6">
          Gallery
        </h1>
      </div>
      <div className="">
      <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 py-24 px-4'>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          key={ index }
          style={{borderRadius: '15px'}}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
        
      </div>
    </div>
  );
};

export default Gallery;
