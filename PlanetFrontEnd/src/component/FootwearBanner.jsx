import Banner from "./Banner";

import BannerImages1 from "/images/Banner_footwear1.png";
import BannerImages2 from "/images/Banner_footwear2.png";
import BannerImages3 from "/images/Banner_footwear3.png";

const bannerImages = [
  { 
    id: 1,
    image: BannerImages1, 
  },
  {
    id: 2,
    image: BannerImages2,
  },
  {
    id: 3,
    image: BannerImages3,
  },
];

const FootwearBanner = () => {
  return (
    <div style={{ marginTop: 65 }}>
    <Banner bannerImages={bannerImages}/>
    </div>
  );
};

export default FootwearBanner;
