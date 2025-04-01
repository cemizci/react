import Slider from "react-slick";

const SliderComb = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings}>
    <div className="!flex items-center bg-gray-100 border-2">
       <div className="p-5 ">
             <div className="font-bold text-3xl">Skechers..Comfort & Performance..</div>
             <div className="text-gray-500 my-2">Streetwear and casual sneakers are every man’s answer to function and fashion footwear. Available in multiple fits and include memory foam cushioning for all-day wear.</div>
             <div className="border rounded-3xl w-[200px] cursor-pointer text-2xl h-12 flex items-center justify-center mt-10 bg-gray-200 hover:bg-gray-300">İncele</div>
       </div>
      <img src="https://resources.mandmdirect.com/Images/_default/s/k/3/sk30535_1_cloudzoom.jpg" alt="" className="w-[600px]"/>
    </div>
    <div className="!flex items-center bg-gray-100 border-2">
    <div className="p-5 ">
             <div className="font-bold text-3xl">Skechers..Comfort & Performance..</div>
             <div className="text-gray-500 my-2">Streetwear and casual sneakers are every man’s answer to function and fashion footwear. Available in multiple fits and include memory foam cushioning for all-day wear.</div>
             <div className="border rounded-3xl w-[200px] cursor-pointer text-2xl h-12 flex items-center justify-center mt-10 bg-gray-200 hover:bg-gray-300">İncele</div>
       </div>
      <img src="https://cdn.poizon.com/pro-img/cut-img/20220212/dce8e51101f3428f9d2c0805804ce0c6.jpg?x-oss-process=image/format,webp/resize,w_750" alt="" className="w-[600px]" />
    </div>
  </Slider>
  )
}

export default SliderComb