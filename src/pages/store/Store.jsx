import React, { useState } from "react";
import "./store.css";
import { LuFilter } from "react-icons/lu";
import { RiSearchLine, RiShoppingBag3Line } from "react-icons/ri";
import { BiMap } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import {AiOutlineCloseCircle} from "react-icons/ai"
import img from "../../assets/shoe2.png";
import {
  IoMdStarOutline,
  IoMdStar,
  IoMdStarHalf,
  IoIosArrowBack,
} from "react-icons/io";

const Store = () => {
  const shoeArray = [
    {
      id: 1,
      img: "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-green-transparent-sports-shoes-png-image_6687298.png",
      Shoename: "KSL 01",
      Price: "Rs. 2000/-",
      rating: 4.5,
      type: "sports",
      color: "purple",
      review: 40,
      size: 8,
      template:1,
      offers: "Get an exclusive 40% off shopping with HDFC bank",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBR_0o3npF5vbpgbBc77a1_i_oe6bzCcf8RNH2RB6dXQOgFmC7rIAzwb3SOTEqiBIjVk&usqp=CAU",
      Shoename: "KSW 01",
      Price: "Rs. 2500/-",
      rating: 2.5,
      type: "Sneakers",
      color: "orange",
      review: 80,
      size: 10,
      template:3,
      offers: "Get an exclusive 20% off shopping with SBI bank",
    },

    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc2HN85NtDZ9A0XOfTNIBHnYkfpkcugmVuaN65LcZPPktGDmfWyWmUdQSO4Kn0LDhJy8&usqp=CAU",
      Shoename: "Royal S 01",
      Price: "Rs. 6000/-",
      rating: 3.5,
      type: "Loafers",
      color: "red",
      review: 37,
      size: 7,
      template:2,
      offers: "Get an exclusive 35% off shopping with IDFC First bank",
    },

    {
      id: 4,
      img: "https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-3d-blue-sneakers-shoes-isolated-concept-3d-render-illustration-png-image_10022169.png",
      Shoename: "LWS 07",
      Price: "Rs. 4500/-",
      rating: 2,
      type: "Sneakers",
      color: "cyan",
      review: 69,
      size: 8,
      template:4,
      offers: "Get an exclusive 28% off shopping with ICICI bank",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkVNU300RuQ1R8n8CI9J5Lx03ydbeuhLgibsKfcMoSHokmMe8D803_8gN4iclS2X367s&usqp=CAU",
      Shoename: "SKW 1F",
      Price: "Rs. 7000/-",
      rating: 4,
      type: "Sneakers",
      color: "black",
      review: 90,
      size: 9,
      template:2,
      offers: "Get an exclusive 18% off shopping with AXIS bank",
    },

    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCX1oMbOkiIiXh7MYEc0NQ0M7tZ-q_FcZcpmmotVAhBGLp0mV_DIbYqlgUXpQ68nhiwWg&usqp=CAU",
      Shoename: "Royal B 05",
      Price: "Rs. 6000/-",
      rating: 3.5,
      type: "Loafers",
      color: "blue",
      review: 85,
      size: 8,
      template:3,
      offers: "Get an exclusive 38% off shopping with YES bank",
    },
  ];

  const [openProductPage, setOpenProductPage] = useState(false);
  const [singleproductdata, setSingleProductData] = useState();
  const handleopenProductpage = (shoeid) => {
    setOpenProductPage(true);
    setSingleProductData(shoeid);
  };


  const [cart,setCart] = useState([])
  // addtocart
  const addtoCart = (data) => {
    setCart([data])
    // console.log(data);
  }

  //removecart 
  const removeCart = (data) => {
    
     const removedata = cart?.filter((cart) => {
         cart?.id == data?.id
       })
    
    setCart(removedata);
  }
  console.log(cart);

  const sorteShoe = [...shoeArray].sort((a, b) => {
    // const priceA = parseFloat(a.Shoename)
    // return a.Shoename.localeCompare(b.Shoename);
    const priceA = parseFloat(a.Price.replace(/[^0-9.-]+/g, ''));
  const priceB = parseFloat(b.Price.replace(/[^0-9.-]+/g, ''));

  // Sort in ascending order based on price
  return priceA - priceB;
  })

  return (
    <>
      <div className="storeContainer">
        {openProductPage ? (
          <>
            <div className="singleProductContainer">
              <div className="backbtnContainer">
                <IoIosArrowBack
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenProductPage(false)}
                />
                <span className="yourdesignSpace">your design space</span>
              </div>

              <div className="imageAndProductDeatilWrapper">
                {shoeArray
                  .filter((shoe) => shoe?.id === singleproductdata)
                  .map((shoe) => {
                    const maxStars = 5;
                    const fullstars = Math.floor(shoe?.rating);
                    const halfStar = shoe?.rating % 1 !== 0;
                    const starElements = [];
                    for (let i = 0; i < fullstars; i++) {
                      starElements.push(
                        <span key={i}>
                          <IoMdStar color="gold" />
                        </span>
                      );
                    }
                    if (halfStar) {
                      starElements.push(
                        <span>
                          <IoMdStarHalf color="gold" />
                        </span>
                      );
                    }

                    while (starElements.length < maxStars) {
                      starElements.push(
                        <span key={starElements.length}>
                          <IoMdStarOutline color="gold" />
                        </span>
                      );
                    }
                    return (
                      <>
                        <div key={shoe?.id} className="productContainerWrapper">
                          <div className="fullImage">
                            <img
                              src={shoe?.img}
                              alt=""
                              className="productimg"
                            />
                          </div>
                          <div className="smallImage">
                            <img
                              src={shoe?.img}
                              alt=""
                              className="smallimgproduct"
                            />
                            <img
                              src={shoe?.img}
                              alt=""
                              className="smallimgproduct"
                            />
                            <img
                              src={shoe?.img}
                              alt=""
                              className="smallimgproduct"
                            />
                          </div>
                          <div className="productDetail">
                            <div>
                              <h3 className="shoeName">{shoe?.Shoename}</h3>
                              <span>by KICKSUP and you</span>
                            </div>

                            <div className="revieRating">
                              <span>{starElements}</span>
                              <span>{shoe?.review} reviews</span>
                            </div>

                            <div className="priceOffer">
                              <span style={{ fontSize: "20px" }}>
                                {shoe?.Price}
                              </span>
                              <span style={{ fontSize: "14px" }}>
                                {shoe?.offers}
                              </span>
                            </div>

                            <div className="fontSoleSizeColorWrapper">
                              <div className="frontShoe">
                                <span>Front</span>
                                <div className="chess-block">
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                </div>
                                <div className="cyanBlock">
                                </div>
                                <div className="Cyanchess-block">
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="middleShoe">
                                <span style={{marginLeft:"0px"}}>Midd</span>
                                <div className="chess-block">
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                </div>
                                <div className="cyanBlock">
                                </div>
                                <div className="Cyanchess-block">
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="backShoe">
                                <span>Back</span>
                                <div className="chess-block">
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                </div>
                                <div className="cyanBlock">
                                </div>
                                <div className="Cyanchess-block">
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sHoeSole">
                                <span>Sole</span>
                                <div className="chess-block">
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                </div>
                                <div className="cyanBlock">
                                </div>
                                <div className="Cyanchess-block">
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                  </div>
                                  <div className="row">
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                    <div className="square black"></div>
                                    <div className="square white"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="shoeSize">
                                <span>Size</span>
                                <span className="numberBlock">7</span>
                                <span className="numberBlock">8</span>
                                <span className="numberBlock">9</span>
                                <span className="numberBlock">10</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ratingwrapper">
                          <span className="rateproduct">Rate Product</span>
                          <IoMdStarOutline color="yellow" size={19} />
                          <IoMdStarOutline color="yellow" size={19} />
                          <IoMdStarOutline color="yellow" size={19} />
                          <IoMdStarOutline color="yellow" size={19} />
                        </div>

                        <div className="btnContainer">
                          <button className="sharedesign">share design</button>
                          <button onClick={()=> addtoCart(shoe)} className="addtocart">add to cart</button>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* filter card */}
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
                  <span className="price">Rs. 4000-7000</span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" />
                  <span className="price">Rs. 7000-9000</span>
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
                  <span className="template">1</span>
                </div>
              </div>

              {/* Types */}
              <div className="TypeWrapper">
                <h3 className="Type">Type</h3>
                <div className="checkboxContainer">
                  <input type="checkbox" />
                  <span className="typename" >Loafers</span>
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
                  <button className="sortBy" onClick={()=>sorteShoe}>sort by</button>
                </div>
              </div>

              <div className="shoeProductWrapper">
                {shoeArray?.map((shoe) => {
                  const maxStars = 5;
                  const fullstars = Math.floor(shoe?.rating);
                  const halfStar = shoe?.rating % 1 !== 0;
                  const starElements = [];
                  for (let i = 0; i < fullstars; i++) {
                    starElements.push(
                      <span key={i}>
                        <IoMdStar color="gold" />
                      </span>
                    );
                  }
                  if (halfStar) {
                    starElements.push(
                      <span>
                        <IoMdStarHalf color="gold" />
                      </span>
                    );
                  }

                  while (starElements.length < maxStars) {
                    starElements.push(
                      <span key={starElements.length}>
                        <IoMdStarOutline color="gold" />
                      </span>
                    );
                  }
                  return (
                    <>
                      <div
                        className="ShoeCard"
                        onClick={() => handleopenProductpage(shoe?.id)}
                      >
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
          </>
        )}

        {/* cart */}
        <div className="CartContainer">
          <div className="CartHeaderWrapper">
            <h3 className="Cart">CART</h3>
            <RiShoppingBag3Line size={24} />
          </div>

          

          <div className="CartProductWrapper">
            {
              cart?.length ?
            cart?.map((data) => {
              return (
                <>
                  <div className="cartContainer">
                    <AiOutlineCloseCircle onClick={()=>removeCart(data)} color="red" style={{ position: "absolute", top:"0px", left:"90%", cursor:"pointer"}} size={17}/>
                    <img src={data?.img} alt="" className="cartImg"/>
                    <div style={{display:"flex", alignItems:"start",gap:"5px", flexDirection:"column"}}>
                      <div>
                        <h4 style={{fontSize:"14px"}}>{ data?.Shoename}</h4>
                        <span style={{fontSize:"12px"}}>by KICKSUP and you</span>
                      </div>
                      <span style={{fontSize:"14px"}}>{ data?.Price}</span>
                    </div>
                  </div>
                </>
              )
            }) : <span className="NocartDataMsg">
              What's stopping you, designer?
            </span>
            }
            
          </div>
          
            
            

          <div className="bottomContentWrapper">
            <div className="addressWrapper">
              <BiMap size={20} color={`${cart?.length ? "black" :"gray"}`} />
              <span className={` ${cart?.length ? "homeBlack" :"home"} `}>Home</span>
            </div>
            <div className="dateWrapper">
              <CiCalendarDate size={20} color={`${cart?.length ? "black" : "gray"}`} />
              <span className={` ${cart?.length ? "dateBlack" :"date"}`}>Seleted date</span>
            </div>
          </div>

          <div className="btnContainer">
            <button className={` ${cart?.length  ? "orderNowBlack" : "ordernowBtn"} `}>order now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
