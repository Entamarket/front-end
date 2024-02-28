import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiUrl, convertPrice } from "../utilities/utilities";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeBody from "../HomeBody/HomeBody";
import HomeProductLists from "../HomeProductList/HomeProductList";
import HomeFooter from "../HomeFooter/HomeFooter";
import advert from "../Assets/Advert Banners/banner-advert.jpg";
import Preloader from "../preloader/Preloader";
import { cartActions } from "../Store/Cart-Item-slice";
import { titleUpdater } from "../utilities/titleUpdater";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import { MdOutlineError } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import banner1 from "../../src/Assets/Advert Banners/banner1.jpg";
import banner2 from "../../src/Assets/Advert Banners/banner2.jpg";

const Home = (props) => {
  titleUpdater("Entamarket - Trade Fair Virtual Market");
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);
  const [offlineModal, setOfflineModal] = useState(false);
  const [isOff, setIsOff] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [products, setProducts] = useState([]);
  let count = 0;

  const getHomeProducts = () => {
    const online = window.navigator.onLine;
    if (online) {
      fetch(`${apiUrl}home-page?page=${count}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((resp) => {
          if (resp.statusCode === 200) {
            setProducts(resp.products);
            setShowLoader(false);
          } else {
            setShowLoader(false);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setShowLoader(false);
      setOfflineModal(true);
      setIsOff(true);
    }
  };

  useEffect(() => {
    getHomeProducts();
    // eslint-disable-next-line
  }, [count]);

  const navigate = useNavigate();

  const showSingleProduct = (prodId, prodName) => {
    let nameProd = prodName.replace(/\s/g, "-");
    navigate(`/product?id=${prodId}&name=${nameProd}`);
    window.scrollTo(0, 0);
    localStorage.setItem("prodID", prodId);
  };

  const homeAddToCart = (id) => {
    setShowLoader(true);
    fetch(`${apiUrl}product/get-product?productID=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp) {
          const cartItems = {
            items: resp.productData,
            quant: 1,
          };
          dispatch(cartActions.showCartHandler(true));
          dispatch(cartActions.setCartData(cartItems));
          setShowLoader(false);
        } else {
          setShowLoader(false);
        }
      })
      .catch((error) => console.log(error));
  };

  const showProductAddError = () => {
    setOfflineModal(true);
    setErrorShow(true);
  };

  const closeModalHandler = () => {
    setOfflineModal(false);
    setErrorShow(false);
  };

  return (
    <div className="homepage">
      <div className="home__advert-top">
        <img src={advert} alt="gif-img" />
      </div>

      {showLoader ? <Preloader /> : null}

      {offlineModal ? (
        <Modal closeModal={closeModalHandler}>
          {isOff ? (
            <div className="content-box">
              <span>Internet disconnected, check internet.</span>
            </div>
          ) : null}

          {errorShow ? (
            <div className="error-content-box">
              <div className="error-content">
                <div className="error-icon-box-conbxmain">
                  <MdOutlineError className="error-icon" />
                </div>

                <span className="spantext">
                  Sorry, This Product is Out of Stock and Can't be Purchased
                </span>
              </div>
            </div>
          ) : null}
        </Modal>
      ) : null}

      <HomeHeader />

      <div className="carobox">
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
          <div>
            <img src={banner1} alt="advert" />
            <p className="legend">Advert Placement</p>
          </div>
          <div>
            <img src={banner2} alt="advert" />
            <p className="legend">Sponsored Adverts</p>
          </div>
          <div>
            <img src={banner1} alt="advert" />
            <p className="legend">Advertise Here</p>
          </div>
        </Carousel>
      </div>

      <HomeBody homeTitle="Top Selling Products">
        {products.map((product) => {
          if (product.stock > 0) {
            return (
              <HomeProductLists
                key={product._id}
                img={product.images}
                prodname={product.name}
                stock={product.stock}
                price={convertPrice(product.price)}
                showSingleProduct={() => {
                  showSingleProduct(product._id, product.name);
                }}
                homeAddToCart={() => {
                  if (parseInt(product.stock) === 0) {
                    return showProductAddError();
                  } else {
                    return homeAddToCart(product._id);
                  }
                }}
              />
            );
          }
        })}
      </HomeBody>

      <HomeFooter />
    </div>
  );
};

export default Home;
