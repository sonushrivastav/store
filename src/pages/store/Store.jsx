import React from "react";
import "./store.css";
import { LuFilter } from "react-icons/lu";
import { RiSearchLine, RiShoppingBag3Line } from "react-icons/ri";
import { BiMap } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import img from "../../assets/shoe2.png";
import {IoMdStarOutline,IoMdStar,IoMdStarHalf} from "react-icons/io"


const Store = () => {
  const shoeArray = [
    {
      img: img,
      Shoename: "KSL 01",
      Price: "Rs. 2000/-",
      rating:4.5
    },
    {
      img: img,
      Shoename: "KSW 01",
      Price: "Rs. 2500/-",
      rating:2.5

    },

    {
      img: img,
      Shoename: "Royal S 01",
      Price: "Rs. 6000/-",
      rating:3.5

    },

    {
      img: img,
      Shoename: "KSL 01",
      Price: "Rs. 2000/-",
      rating:2

    },
    {
      img: img,
      Shoename: "KSW 01",
      Price: "Rs. 2500/-",
      rating:4

    },

    {
      img: img,
      Shoename: "Royal S 01",
      Price: "Rs. 6000/-",
      rating:3.5

    },
  ];

  return (
    <>
      <div className="storeContainer">
        <div className="FilterContainer">
          <div className="filterHeaderWrapper">
            <h3 className="filters">FILTERS</h3>
            <LuFilter size={24} />
          </div>

          {/* Cost */}
          <div className="costWrapper">
            <h3 className="Cost">Cost</h3>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <span className="price">Rs. 1500-4000</span>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <span className="price">Rs. 1500-4000</span>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <span className="price">Rs. 1500-4000</span>
            </div>
          </div>

          {/* Colours */}
          <div className="ColourWrapper">
            <h3 className="Color">Colour</h3>
            <div className="colorContainer">
              <span className="colorDiv1"></span>
              <span className="colorDiv2"></span>
              <span className="colorDiv3"></span>
              <span className="colorDiv4"></span>
              <span className="colorDiv5"></span>
            </div>
          </div>

          {/* Design Templates */}
          <div className="designTemplatesWrapper">
            <h3 className="Templates">Design templates</h3>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <span className="template">2</span>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <span className="template">3</span>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <span className="template">3+</span>
            </div>
          </div>

          {/* Types */}
          <div className="TypeWrapper">
            <h3 className="Type">Type</h3>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <span className="typename">Loafers</span>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <span className="typename">Sneakers</span>
            </div>
          </div>

          <div className="btnContainer">
            <button className="applyBtn">apply</button>
          </div>
        </div>

        {/* product */}
        <div className="ProductContainer">
          <div className="filterHeaderWrapper">
            <h3 className="filters">SHOES</h3>
            <div className="seacrhProductContainer">
              <RiSearchLine size={20} />
              <button className="sortBy">sort by</button>
            </div>
          </div>

          <div className="shoeProductWrapper">
            {shoeArray?.map((shoe) => {

              const maxStars = 5;
              const fullstars = Math.floor(shoe?.rating)
              const halfStar = shoe?.rating % 1 !== 0
              const starElements = [];
              for (let i = 0; i < fullstars; i++){
                starElements.push(<span key={i}><IoMdStar color="gold"/></span>)
              }
              if (halfStar) {
                starElements.push(<span><IoMdStarHalf color="gold"/></span>)
              }

              while (starElements.length < maxStars) {
                starElements.push(<span key={starElements.length}><IoMdStarOutline color="gold"/></span>)
              }
              return (
                <>
                  <div className="ShoeCard">
                    <div className="imgContainer">
                      <img src={shoe.img} alt="" className="img" />
                    </div>
                    <div className="priceContainer">
                      <span className="shoename">{shoe?.Shoename}</span>
                      <div className="ratingContainer">
                        <span className="shoeprice">{shoe?.Price}</span>
                        <span>{starElements}</span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* cart */}
        <div className="CartContainer">
          <div className="CartHeaderWrapper">
            <h3 className="Cart">CART</h3>
            <RiShoppingBag3Line size={24} />
          </div>

          <div className="CartProductWrapper">
            <span className="NocartDataMsg">
              What's stopping you, designer?
            </span>
          </div>

          <div className="bottomContentWrapper">
            <div className="addressWrapper">
              <BiMap size={20} color="gray" />
              <span className="home">Home</span>
            </div>
            <div className="dateWrapper">
              <CiCalendarDate size={20} color="gray" />
              <span className="date">Seleted date</span>
            </div>
          </div>

          <div className="btnContainer">
            <button className="ordernowBtn">order now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
