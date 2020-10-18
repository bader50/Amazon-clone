import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/Oct-2020/EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_fr-FR._CB419152315_.jpg"
          alt="amazon prime image"
        />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            rating={4}
            price={12.97}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_QL65_.jpg"
          />
          <Product
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            rating={4}
            price={29.99}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY327_QL65_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            rating={4}
            price={279.95}
            image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg"
          />
          <Product
            title="CyberpowerPC Gamer Supreme Liquid Cool Gaming PC, Intel Core i7-9700K 3.6GHz, NVIDIA GeForce RTX 2070 Super 8GB, 16GB DDR4, 1TB PCI-E NVMe SSD, WiFi Ready & Win 10 Home (SLC8260A2, Black)"
            rating={3}
            price={1399.99}
            image="https://m.media-amazon.com/images/I/71VmHYqdHsL._AC_UY327_QL65_.jpg"
          />
          <Product
            title="COSORI Air Fryer Max XL(100 Recipes) Electric Hot Oven Oilless Cooker LED Touch Digital Screen with 11 Presets, Preheat& Shake Reminder, Nonstick Basket, 1700W, 5.8 QT-Black"
            rating={5}
            price={99.98}
            image="https://images-na.ssl-images-amazon.com/images/I/71p5GSQ-BVL._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI"
            rating={5}
            price={1033.59}
            image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
