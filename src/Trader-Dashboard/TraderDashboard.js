import React, { useState, useEffect, useRef } from "react";
import { updater } from "../utilities/utilities";
import { useNavigate } from "react-router-dom";
import Preloader from "../preloader/Preloader";
import Modal from "../Modal/Modal";
import Error from "../Error/Error";
import Sucess from "../Sucess/Sucess";
import DeleteModal from "../DeleteModal/DeleteModal";
import DeleteProdModal from "../DeleProdModal/DeleteProdModal";
import NoticeModal from "../NoticeModal/NoticeModal";
import CreateShop from "../CreateShopModal/CreateShop";
import PaymentAccountModal from "../PaymentAccountModal/PaymentAccountModal";
import UpdateShopModal from "../updateShopModal/UpdateShopModal";
import UpdateSellerModal from "../updateSellerModal/UpdateSellerModal";
import UpdateProfileOTP from "../updateProfileOTP/UpdateProfileOTP";
import UpdatePasswordModal from "../UpdatePasswordModal/UpdatePasswordModal";
import {
  FormInput,
  FormButton,
  FormInp,
  SelectInput,
  SelectBankInput,
  InputForm,
} from "../Form-Input/FormInput";
import EmailUpdateModal from "../EmailUpdateModal/EmailUpdateModal";
import {
  FaSortDown,
  FaTrashAlt,
  FaRegBell,
  FaMoneyCheck,
  FaWallet,
  FaShoppingCart,
  FaCarAlt,
  FaBullhorn,
  FaUserAlt,
} from "react-icons/fa";
import { ImHome } from "react-icons/im";
import {
  MdAccountBalance,
  MdViewHeadline,
  MdClear,
  MdOutlineReceipt,
  MdOutlinePendingActions,
  MdOutlineAutoAwesomeMosaic,
  MdOutlinePowerSettingsNew,
  MdOtherHouses,
  MdOutlineRedeem,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { HiCheckCircle } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import AddProductModal from "../AddProductModal/AddProductModal";
import ProductList from "../ProductList/ProductList";
import ProductsLists from "../ProductsLists/ProductsLists";
import ProductImgList from "../ProductImageList/ProductImgList";
import NoRecords from "../NoRecords/NoRecords";
import DashboardActivity from "../DashboardActivity/DashboardAcitivity";
import Userbox from "../userbox/Userbox";
import SidebarNav from "../SidebarNav/Sidebarnav";
import ShopBox from "../ShopBox/Shopbox";
import ShopLists from "../ShopLists/ShopLists";
import Logo from "../Logo/Logo";
import ProductImageModal from "../ProductImageModal/ProductImageModal";
import "./TraderDashboard.css";
import { apiUrl, convertPrice } from "../utilities/utilities";
import CommentNotice from "../CommentNotice/CommentNotice";
import NoticeProduct from "../NoticeProduct/NoticeProduct";
import NoticeProductList from "../NoticeProductList/NoticeProductList";
import UpdateProductModal from "../UpdateProductModal/UpdateProducModal";
import Subscribe from "../Subscription/Subscribe/Subscribe";
import { titleUpdater } from "../utilities/titleUpdater";
import ShopAllProducts from "../ShopAllProd/ShopAllProdList";
import ShareShopModal from "../ShareShopModal/ShareShop";
import countries from "../utilities/countries";
import { PhoneInput } from "../Form-Input/FormInput";
import { PurchaseModal } from "../PurchaseModal/PurchaseModal";
import VerifyModal from "../VerifyModal/VerifyModal";
import PendingModal from "../PendingModal/PendingModal";
import imageCompression from "browser-image-compression";
import { FaList } from "react-icons/fa";
import { months } from "../utilities/utilities";
import ShowItems from "../ShowItems/ShowItems";

const TraderDashboard = () => {
  titleUpdater("Entamarket - Seller Dashboard");
  const [traderData, setTraderData] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [removeDelete, setRemoveDelete] = useState(true);
  const [removeNoticeInfo, setRemoveNoticeInfo] = useState(false);
  const [createShop, setCreateShop] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [shouldRender, setShouldRender] = useState(false);
  const [showSideBar, setShowSideBar] = useState("traderdashboard__sidebar");
  const [SideActive, setSideActive] = useState("");
  const [showRecords, setShowRecords] = useState(false);
  const [shopItemClass, setShopItemClass] = useState(
    "traderdashboard__shopItems"
  );
  const [removeShopItem, setRemoveShopItem] = useState("");
  const [viewShops, setViewShops] = useState(false);
  const [shopErr, setShopError] = useState(false);
  const [shopUpdate, setShopUpdate] = useState(false);
  const [currShopId, setCurrShopId] = useState("");
  const [addProdErr, setAddProdErr] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [prodImagePath, setProdImagePath] = useState("");
  const [imageShow, setImageShow] = useState(false);
  const [payValid, setPayValid] = useState(false);
  const [newId, setNewId] = useState("");
  const [showProdList, setProdList] = useState(false);
  const [productData, setProductData] = useState("");
  const [sellerProfile, setSellerProfile] = useState(false);
  const [showSellerModal, setShowSellerModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [OtpModal, setOtpModal] = useState(false);
  const [passModal, setPassModal] = useState(false);
  const [prod2, setProd2] = useState([]);
  const [prodShow, setProdShow] = useState(false);
  const [noticeArr, setNoticeArr] = useState([]);
  const [isNoticeArr, setIsNoticeArr] = useState(false);
  const [commentProd, setCommentProd] = useState([]);
  const [isNoticeProduct, setNoticeProduct] = useState(false);
  const [deliveredArr, setDeliveredArr] = useState([]);
  const [showOrderInfo, setShowOrderInfo] = useState(false);
  const [orderInfo, setorderInfo] = useState([]);
  const [purchaseArr, setPurchaseArr] = useState([]);
  const [acctInfo, setAcctInfo] = useState("");
  const [showAcctInfo, setShowAcctInfo] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [modalType, setModalType] = useState("");
  const [showAcct2, setShowAcct2] = useState(false);
  const [showEditProd, seteditProd] = useState(false);
  const [editProdID, setEditProdID] = useState("");
  const [delProdModal, setDelProdModal] = useState(false);
  const [delProdID, setDelProdID] = useState("");
  const [shopDelModal, setShopDelModal] = useState(false);
  const [shopInfo, setShopInfo] = useState([]);
  const [pendingOrderCount, setPendingOrderCount] = useState(0);
  const [saleCount, setSaleCount] = useState(0);
  const [allProd, setallProd] = useState(false);
  const [shopProds, setShopProds] = useState([]);
  const [shareShop, setshareShop] = useState(false);
  const [shopUserName, setShopUserName] = useState(false);
  const [shopName, setShopName] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [fullHistory, setFullHistory] = useState([]);
  const [isShowFull, setIshowfull] = useState(false);
  const [isVerifiedModal, setIsVerifiedModal] = useState(false);
  const [isPendmod, setIspendMod] = useState(false);
  const [isPendPurchase, setIsPendPurchase] = useState(false);
  const [pendPurchaseList, setPendPurchaseList] = useState([]);
  const [pendDeliveryCount, setPendDeliveryCount] = useState(0);
  const [pendClass, setPendClass] = useState("hide");
  const [orderId, setOrderId] = useState("");
  const [showBuyOrder, setshowBuyOrder] = useState(false);
  const [buyOrder, setbuyOrder] = useState([]);
  const [confirmDeliv, setIsConfirmDeliv] = useState(false);
  const [countPurch, setCountPurch] = useState(0);
  const [historyBuyer, sethistoryBuyer] = useState([]);
  const [isShowBuyer, setIsShowBuyer] = useState(false);
  const [pend2Class, setPend2Class] = useState("hide");
  const [fullHistory2, setFullHistory2] = useState([]);
  const [isShowItems, setIsShowItems] = useState(false);
  const [bankNode, setbankNode] = useState([]);
  const [bankDataset, setbankDataset] = useState([]);
  const [accountBox, setaccountBox] = useState(true);
  const [validAcct, setValidAcct] = useState(false);
  const [acctNameFull, setacctNameFull] = useState("");
  const [fullInfo, setFullInfo] = useState({});
  const [ validOtp, setValidOtp] = useState(false);

  let prodImageInput = useRef();
  let ShopNameEl = useRef();
  let ShopCatEl = useRef();
  let fName = useRef();
  let lName = useRef();
  let UName = useRef();
  let Uphone = useRef();
  let inp1Ref = useRef();
  let inp2Ref = useRef();
  let descRef = useRef();
  let quantRef = useRef();
  let weightRef = useRef();
  let catRef = useRef();
  let linkRef = useRef();
  let refBank = useRef();

  let linkUrl = "";

  const navigate = useNavigate();
  const entamarketToken = localStorage.getItem("entamarketToken");

  const getSellerPendingDeliveries = () => {
    setShowLoader(true);

    fetch(
      `${apiUrl}delivery/get-trader-pending-deliveries?set=${pendingOrderCount}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setShowLoader(false);
        if (data.msg === "no more pending deliveries") {
          setShowRecords(false);
        } else {
          setPurchaseArr(data.pendingDeliveries);
        }
      })
      .catch((error) => console.log(error));
  };

  const addPendingOrderCount = () => {
    setPendingOrderCount(pendingOrderCount + 1);
    setShouldRender(!shouldRender);
  };

  const reducePendingOrderCount = () => {
    setPendingOrderCount(pendingOrderCount - 1);
    setShouldRender(!shouldRender);
  };

  const addSaleCount = () => {
    setSaleCount(saleCount + 1);
    setShouldRender(!shouldRender);
  };

  const reduceSaleCount = () => {
    setSaleCount(saleCount - 1);
    setShouldRender(!shouldRender);
  };

  const getSalesHistory = () => {
    fetch(`${apiUrl}trader/get-sales-history?set=${saleCount}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDeliveredArr(data.salesHistoryData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setTimeout(() => {
      if (entamarketToken) {
        fetch(`${apiUrl}trader/dashboard`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${entamarketToken}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((resp) => {
            if (resp.statusCode === 200) {
              updater.TokenUpdaterHandler(resp.entamarketToken);
              setTraderData(resp.traderData);
              setShowShop(true);
              setIsNoticeArr(true);
              setNoticeArr(resp.traderData.notifications);
              setShowRecords(true);
              getSalesHistory();
              getSellerPendingDeliveries();
              if (resp.traderData.confirmedTrader === null) {
                setIsVerifiedModal(true);
              } else if (resp.traderData.confirmedTrader === false) {
                setIspendMod(true);
              }
            } else {
              localStorage.removeItem("entamarketToken");
              localStorage.removeItem("isAuth");
              navigate("/login");
            }
          })
          .catch((error) => console.log(error));

        fetch("https://api.paystack.co/bank?currency=NGN")
          .then((resp) => resp.json())
          .then((resp) => {
            setbankNode(resp.data);
          });
      } else {
        navigate("/login");
      }
    }, 500);

    // eslint-disable-next-line
  }, [shouldRender]);

  //Delete Trader Hanlder
  const deleteTraderHandler = () => {
    fetch(`${apiUrl}trader/dashboard/delete-account`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.statusCode === 200) {
          localStorage.removeItem("entamarketToken");
          localStorage.removeItem("isAuth");
          navigate("/signup");
        }
      });
  };

  //Show Modal Handler
  const showModalHandler = () => {
    setShowModal(true);
    setRemoveDelete(true);
    setShowAcctInfo(false);
  };

  //Cancel Modal Handler
  const cancelModalHandler = () => {
    setShowModal(false);
    setRemoveDelete(false);
    setRemoveNoticeInfo(false);
    setCreateShop(false);
    setError(false);
    setSuccess(false);
    setShopUpdate(false);
    setShowPage(false);
    setPayValid(false);
    setShowSellerModal(false);
    setEmailModal(false);
    setOtpModal(false);
    setPassModal(false);
    setNoticeProduct(false);
    setShowAcctInfo(false);
    setShowAmount(false);
    setShowSub(false);
    setShowAcct2(false);
    seteditProd(false);
    setImageShow(false);
    setProdImagePath([]);
    setDelProdModal(false);
    setShopDelModal(false);
    setshareShop(false);
    setShowAcctInfo(false);
    setValidOtp(false);
    setValidAcct(false);
    setaccountBox(true);
  };

  //show Notification Handler
  const showNotificationHandler = () => {
    setShowModal(true);
    setRemoveDelete(false);
    setRemoveNoticeInfo(true);
  };

  const contactSupport = () => {
    navigate("/support");
  };

  // Create Shop Modal
  const createShopModal = () => {
    if (traderData.confirmedTrader === null) {
      setIsVerifiedModal(true);
    } else if (traderData.confirmedTrader === false) {
      setIspendMod(true);
    } else {
      setShowModal(true);
      setRemoveDelete(false);
      setRemoveNoticeInfo(false);
      setCreateShop(true);
    }
  };

  //Create shop Handler
  const CreateShopHanlder = (e) => {
    e.preventDefault();
    const shopName = e.target.shop.value;
    const shopAddress = e.target.shopadd.value;

    const shopData = {
      name: shopName,
      shopAddress: shopAddress,
    };

    if (success === true) {
      setSuccess(false);
    }

    if (shopName === "") {
      setError(true);
      setErrorMsg("Please add a shop name");
    } else if (shopAddress === "") {
      setError(true);
      setErrorMsg("Please add your shop address");
    } else {
      e.target.shopadd.value = "";
      e.target.shop.value = "";
      setError(false);
      setErrorMsg("");

      fetch(`${apiUrl}shop/create-shop`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shopData),
      })
        .then((res) => res.json())
        .then((resp) => {
          if (resp.entamarketToken) {
            updater.TokenUpdaterHandler(resp.entamarketToken);

            if (resp.statusCode === 200) {
              setTimeout(() => {
                setShouldRender(!shouldRender);
              }, 1000);
              setSuccess(true);
              setSuccessMsg("Shop created successfully");
            } else {
              setError(true);
              setErrorMsg("Shop Already Exist");
            }
          }
        });
    }
  };

  // Logout Handler
  const logOutHandler = () => {
    localStorage.removeItem("entamarketToken");
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const totalProductsHandler = () => {
    let prodVal = 0;

    for (let prod of traderData.shops) {
      prodVal += prod.products.length;
    }
    return prodVal;
  };

  //Show SideBar Handler
  const showSideBarHandler = () => {
    setSideActive("sideBar__active");
    setShowSideBar("traderdashboard__sidebar");
  };

  //Remove SideBar Handler
  const removeSideBar = () => {
    setSideActive("");
  };

  //view Shops Handler
  const viewShopsHandler = () => {
    if (traderData.shops.length === 0) {
      setRemoveShopItem("removeShopItem");
      setShopError(true);
      setallProd(false);
      setProdShow(false);
      setIsPendPurchase(false);
      setPendClass("hide");
      setIsShowBuyer(false);
      setPend2Class("hide");
    } else {
      setRemoveShopItem("removeShopItem");
      setShopItemClass("traderdashboard__shopItems");
      setViewShops(true);
      setallProd(false);
      setProdShow(false);
      setIsPendPurchase(false);
      setPendClass("hide");
      setPend2Class("hide");
      setIsShowBuyer(false);
    }
  };

  //Remove View Shop Handler
  const removeViewShop = () => {
    setViewShops(false);
    setRemoveShopItem("");
    setShopError(false);
    setSellerProfile(false);
    setIsPendPurchase(false);
    setPendClass("hide");
  };

  const deleteShopHanlder = (id) => {
    setShowLoader(true);
    const [shopId, shopName] = shopInfo;
    console.log(shopName);

    fetch(`${apiUrl}shop/delete-shop?shopID=${shopId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        updater.TokenUpdaterHandler(resp.entamarketToken);

        if (resp.statusCode === 200) {
          setShouldRender(!shouldRender);

          setTimeout(() => {
            setShowLoader(false);
            setShowModal(false);
            setShopDelModal(false);
          }, 1000);
        }
      });
  };

  //Update Shop Handler
  const updateShopHandler = (shopName, ShopId, shopCategory) => {
    setShowLoader(true);
    setShowModal(true);
    setRemoveDelete(false);
    setRemoveNoticeInfo(false);
    setCreateShop(false);
    setShopUpdate(true);
    setCurrShopId(ShopId);
    setShopDelModal(false);

    setTimeout(() => {
      setShowLoader(false);
      ShopNameEl.current.value = shopName;
      ShopCatEl.current.value = shopCategory;
    }, 500);
  };

  //Update Shop DataHandler
  const updateShopDataHandler = (e) => {
    e.preventDefault();
    const UpdateShopNameVal = e.target.shopValue.value;
    const UpdateShopCategoryVal = e.target.catValue.value;

    const shopInfo = {
      name: UpdateShopNameVal,
      shopAddress: UpdateShopCategoryVal,
      shopID: currShopId,
    };

    if (UpdateShopNameVal === "") {
      setError(true);
      setErrorMsg("Shop Name is Required");
    } else if (UpdateShopCategoryVal === "") {
      setError(true);
      setErrorMsg("Shop Category is Required");
    } else {
      setShowLoader(true);

      fetch(`${apiUrl}shop/update-shop`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shopInfo),
      })
        .then((res) => res.json())
        .then((resp) => {
          updater.TokenUpdaterHandler(resp.entamarketToken);

          if (resp.statusCode === 200) {
            setShouldRender(!shouldRender);
            setShowLoader(false);
            setSuccess(true);
            setSuccessMsg("Shop Updated Successfully");
          } else {
            if (resp.statusCode === 400) {
              setError(true);
              setErrorMsg(resp.msg);
              setShowLoader(false);
            }
          }
        });
    }
  };

  //Show Products Handler
  const showProducts = (prod, prodId) => {
    setNewId(prodId);

    if (prod.length > 0) {
      setShowLoader(true);

      setTimeout(() => {
        fetch(`${apiUrl}shop/get-shop?shopID=${prodId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${entamarketToken}`,
          },
        })
          .then((res) => res.json())
          .then((resp) => {
            if (resp.statusCode === 200) {
              setShowLoader(false);
              setAddProdErr(false);
              setViewShops(false);
              setProdList(false);
              setProd2(resp.shopData.products);
              setProdShow(true);
              setShowLoader(false);
              setIsPendPurchase(false);
              setPendClass("hide");
              setPend2Class("hide");
              setIsShowBuyer(false);
            } else {
              setShowLoader(false);

              if (resp.statusCode === 400) {
                setError(true);
                setErrorMsg(resp.msg);
              }
            }
          });
      }, 500);
    } else {
      setAddProdErr(true);
      setViewShops(false);
    }
  };

  //show All Products
  const showAllProducts = () => {
    setShowLoader(true);
    fetch(`${apiUrl}product/get-all-traders-products`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        setShowLoader(false);
        setShopProds(resp.products);
        setRemoveShopItem("removeShopItem");
        setallProd(true);
        setIsPendPurchase(false);
        setPendClass("hide");
        setIsShowBuyer(false);
        setPend2Class("hide");
      });
  };

  //Remove Products Hanldler
  const removeProducts = () => {
    setAddProdErr(false);
    setViewShops(true);
    setProdList(false);
    setProdShow(false);
    setIsPendPurchase(false);
    setPendClass("hide");
    setIsShowBuyer(false);
  };

  //Add Product Handler
  const addProductsHandler = () => {
    setShowModal(true);
    setRemoveDelete(false);
    setRemoveNoticeInfo(false);
    setCreateShop(false);
    setShopUpdate(false);
    setShowPage(true);
    setIsPendPurchase(false);
    setPendClass("hide");
    setIsShowBuyer(false);
  };

  //Click Input File Event
  const addShopProductImageHandler = () => {
    prodImageInput.current.click();
  };

  //show products Handler
  const showProductImages = () => {
    const prodImgs = prodImageInput.current.files;
    let paths = [];

    for (let img of prodImgs) {
      let imageUrl = URL.createObjectURL(img);
      paths.push(imageUrl);
      setProdImagePath(paths);
      setImageShow(true);
    }
  };

  //Remove Product Handler
  const removeProdImgHandler = (value) => {
    let myIndex = prodImagePath.indexOf(value);
    if (myIndex !== -1) {
      prodImagePath.splice(myIndex, 1);
      setShouldRender(!shouldRender);
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(true);
      }, 500);
    }
  };

  const addShopProductHandler = async (e) => {
    e.preventDefault();
    const prodName = e.target.prodName.value;
    const prodDesc = e.target.prodDesc.value;
    const prodQuant = e.target.prodQuant.value;
    const prodPrice = e.target.prodPrice.value;
    const prodCat = e.target.cat.value;
    const prodWeight = e.target.weight.value;

    const formData = new FormData();
    formData.append("name", prodName);
    formData.append("price", prodPrice);
    formData.append("stock", prodQuant);
    formData.append("description", prodDesc);
    formData.append("category", prodCat);
    formData.append("weight", prodWeight);

    const imgsRef = prodImageInput.current.files;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    for (let main of imgsRef) {
      try {
        const compressedFile = await imageCompression(main, options);
        formData.append("images", compressedFile);
      } catch (error) {
        console.log(error);
      }
    }

    if (prodName === "") {
      setError(true);
      setErrorMsg("Product Name is Required");
    } else if (prodPrice === "") {
      setError(true);
      setErrorMsg("Product Price is Required");
    } else if (prodDesc === "") {
      setError(true);
      setErrorMsg("Product Description is Required");
    } else if (prodQuant === "") {
      setError(true);
      setErrorMsg("Product Weight is Required");
    } else if (prodWeight === "") {
      setError(true);
      setErrorMsg("Product Quantity is Required");
    } else if (prodCat.length === 0) {
      setError(true);
      setErrorMsg("Select a Product Category");
    } else if (prodImageInput.current.files.length === 0) {
      setError(true);
      setErrorMsg("Add Products Images");
    } else {
      setError(false);
      setErrorMsg("");
      setShowLoader(true);
      fetch(`${apiUrl}product/add-product?shopID=${newId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((resp) => {
          updater.TokenUpdaterHandler(resp.entamarketToken);

          if (resp.statusCode === 200) {
            setProductData(resp.productData);
            setShowLoader(false);
            e.target.reset();
            setShouldRender(!shouldRender);
            setProdList(true);
            setProdShow(false);
            setProdImagePath([]);
            setImageShow(false);
            setAddProdErr(false);
            setShowModal(false);
          } else {
            setShowLoader(false);
            setError(true);
            if (resp.errorObj) {
              setErrorMsg(resp.errorObj.msg);
            } else {
              setErrorMsg(resp.msg);
            }
          }
        });
    }
  };

  const addPaymentAccountHandler = () => {
    setShowModal(true);
    setRemoveDelete(false);
    setRemoveNoticeInfo(false);
    setCreateShop(false);
    setShopUpdate(false);
    setShowPage(false);
    setPayValid(true);
  };

  const traderProfileHandler = () => {
    setRemoveShopItem("removeShopItem");
    setSellerProfile(true);
    setShopError(false);
    setViewShops(false);
    setAddProdErr(false);
    setProdList(false);
    setProdShow(false);
    setallProd(false);
    setIsPendPurchase(false);
    setPendClass("hide");
    setIsShowBuyer(false);
    setPend2Class("hide");
  };

  const closeSellerProfile = () => {
    setSellerProfile(false);
    setRemoveShopItem("");
  };

  const showSellModalHandler = () => {
    setShowModal(true);
    setShowSellerModal(true);
    setShowLoader(true);
    const phone = traderData.phoneNumber.split("-")[1];

    setTimeout(() => {
      fName.current.value = traderData.firstName;
      lName.current.value = traderData.lastName;
      UName.current.value = traderData.username;
      Uphone.current.value = phone;
      setShowLoader(false);
    }, 1000);
  };

  const updateSellerProfileData = (e) => {
    e.preventDefault();

    const firstName = fName.current.value;
    const lastName = lName.current.value;
    const userName = UName.current.value;
    const dailCode = e.target.dailCode.value;
    const phoneNumber = `${dailCode}${Uphone.current.value}`;

    const sellerObj = {
      firstName: firstName,
      lastName: lastName,
      username: userName,
      phoneNumber: phoneNumber,
    };

    if (firstName === "") {
      setError(true);
      setErrorMsg("First Name is Required");
    } else if (lastName === "") {
      setError(true);
      setErrorMsg("Last Name is Required");
    } else if (userName === "") {
      setError(true);
      setErrorMsg("Username is Required");
    } else if (phoneNumber === "") {
      setError(true);
      setErrorMsg("Phone Number is Required");
    } else {
      setError(false);
      setErrorMsg("");
      setShowLoader(true);

      fetch(`${apiUrl}trader/dashboard/update-profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sellerObj),
      })
        .then((res) => res.json())
        .then((resp) => {
          updater.TokenUpdaterHandler(resp.entamarketToken);
          setShowLoader(false);

          if (resp.statusCode === 200) {
            setShouldRender(!shouldRender);
            setShowSellerModal(false);
            setShowModal(false);
          } else {
            setError(true);
            setErrorMsg(resp.errorObj.msg);
          }
        });
    }
  };

  const updateEmailHandler = (e) => {
    e.preventDefault();
    const updateEmail = e.target.emailUpdate.value;
    const updatePass = e.target.passUpdate.value;

    const updateData = {
      email: updateEmail,
      password: updatePass,
    };

    setModalType("mail");

    if (updateEmail === "") {
      setError(true);
      setErrorMsg("An Email is Required");
    } else if (updatePass === "") {
      setError(true);
      setErrorMsg("Password is Required");
    } else {
      setError(false);
      setErrorMsg("");
      setShowLoader(true);

      fetch(`${apiUrl}trader/dashboard/update-email`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      })
        .then((res) => res.json())
        .then((resp) => {
          updater.TokenUpdaterHandler(resp.entamarketToken);
          if (resp.statusCode === 200) {
            setShowLoader(false);
            setEmailModal(false);
            setOtpModal(true);
          } else {
            if (resp.statusCode === 400) {
              setError(true);
              setErrorMsg(resp.msg);
              setShowLoader(false);
            } else {
              if (
                resp.msg ===
                "You need to subscribe to our email services to recieve OTP"
              ) {
                setShowLoader(false);
                setEmailModal(false);
                setShowSub(true);
              } else {
                setShowLoader(false);
              }
            }
          }
        });
    }
  };

  const verifyUpdateEmailHandler = (e) => {
    e.preventDefault();
    const otpVal = e.target.otpUpdate.value;

    const otpData = {
      otp: otpVal,
    };

    if (otpVal === "") {
      setError(true);
      setErrorMsg("An Otp is required");
    } else {
      setShowLoader(true);

      fetch(`${apiUrl}trader/dashboard/verify-update-otp`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(otpData),
      })
        .then((res) => res.json())
        .then((resp) => {
          updater.TokenUpdaterHandler(resp.entamarketToken);

          if (resp.statusCode === 200) {
            setShouldRender(!shouldRender);
            setShowLoader(false);
            setError(false);
            setSuccess(true);
            setSuccessMsg("Profile have been Updated");
            setShowModal(false);
            setOtpModal(false);
            e.target.otpUpdate.value = "";
          } else {
            if (resp.statusCode === 400) {
              setError(true);
              setErrorMsg(resp.msg);
              setShowLoader(false);
            }
          }
        });
    }
  };

  const showSellerEmailModal = () => {
    setShowModal(true);
    setEmailModal(true);
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  };

  const showSellerPassModal = () => {
    setShowModal(true);
    setPassModal(true);
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  };

  const updatePasswordHandler = (e) => {
    e.preventDefault();
    const oldPass = e.target.oldPass.value;
    const newPass = e.target.newPass.value;
    setModalType("pass");

    const newPassObj = {
      oldPassword: oldPass,
      newPassword: newPass,
    };

    if (oldPass === "") {
      setError(true);
      setErrorMsg("An Old Password is Required");
    } else if (newPass === "") {
      setError(true);
      setErrorMsg("A New Password is Required");
    } else {
      setShowLoader(true);

      fetch(`${apiUrl}trader/dashboard/update-password`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPassObj),
      })
        .then((res) => res.json())
        .then((resp) => {
          updater.TokenUpdaterHandler(resp.entamarketToken);
          if (resp.statusCode === 200) {
            setShowLoader(false);
            setPassModal(false);
            setOtpModal(true);
            setError(false);
          } else {
            if (resp.statusCode === 400) {
              setError(true);
              setErrorMsg(resp.msg);
              setShowLoader(false);
            } else {
              if (
                resp.msg ===
                "You need to subscribe to our email services to recieve OTP"
              ) {
                setPassModal(false);
                setShowSub(true);
                setShowLoader(false);
              }
            }
          }
        });
    }
  };

  const addPaymentAccount = (e) => {
    e.preventDefault();
    const acctNum = e.target.acctNum.value;

    if (acctNum === "") {
      setErrorMsg("Account Number required");
      setError(true);
    } else {
      setShowLoader(true);
      setErrorMsg("");
      setError(false);

      fetch(`${apiUrl}trader/get-account-name`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bankType: bankDataset.type,
          bankName: bankDataset.name,
          accountNumber: acctNum,
          bankCode: bankDataset.code,
        }),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          setShowLoader(false);
          if (resp.statusCode === 200) {
             console.log(resp);
            setaccountBox(false);
            setValidAcct(true);
            setValidOtp(false);
            setacctNameFull(resp.data.account_name)

            setFullInfo({ 
              bankType: bankDataset.type,
              bankName: bankDataset.name,
              accountNumber: acctNum,
              accountName: resp.data.account_name,
              bankCode: bankDataset.code,
            })
          } else {
            setErrorMsg(resp.message);
            setError(true);
          }
        });
    }

  };

   const addPaymentAccount2 = (e) => {
       e.preventDefault();
       const password = e.target.pass.value;

       if(password === ""){
          setErrorMsg("Enter your Password");
          setError(true);
       }
       else {
        setErrorMsg("");
        setError(false);
        setShowLoader(true);

        let bankInfo = {
              accountNumber: fullInfo.accountNumber, 
              accountName: fullInfo.accountName,
              bankType: fullInfo.bankType, 
              bankName: fullInfo.bankName, 
              bankCode: fullInfo.bankCode,
              password: password,
        }
      
      fetch(`${apiUrl}trader/dashboard/update-bank-details`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bankInfo),
      })
        .then((res) => res.json())
        .then((resp) => {
          setShowLoader(false);
          e.target.reset();

          if (resp.statusCode === 200) {
            setShowLoader(false);
            setShowModal(true);
            setaccountBox(false);
            setValidAcct(false);
            setPayValid(true);
            setValidOtp(true);
          
          } else {
            if (resp.statusCode === 400) {
              setErrorMsg(resp.msg);
              setError(true);
              setShowLoader(false);
            }
          }
        });
    
       }
    };



    const validateOtp = (e) => {
      e.preventDefault();
      const code = e.target.code.value;

      const otInfo = {
        otp: code,
        id: traderData._id
      };

       fetch(`${apiUrl}trader/verify-update-otp`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(otInfo),
      })
        .then((res) => res.json())
        .then((resp) => {
          setShowLoader(false);

          if(resp.statusCode === 200){
            setShouldRender(!shouldRender);
            setShowModal(false);
            setaccountBox(false);
            setValidAcct(false);
            setPayValid(false);
            setValidOtp(false);
            updater.TokenUpdaterHandler(resp.entamarketToken);
            e.target.reset()
          }
          else {
            setErrorMsg(resp.msg);
            setError(true);
          }
        });
    
      
  
    }

  const getCommentIDHandler = (commID) => {
    setShowLoader(true);
    fetch(
      `${apiUrl}notification/get-product-via-notification?notificationID=${commID}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setCommentProd(data);
        setRemoveNoticeInfo(false);
        setNoticeProduct(true);
        setShowLoader(false);
      });
  };

  const backToCommentHandler = () => {
    setNoticeProduct(false);
    setRemoveNoticeInfo(true);
    setShouldRender(!shouldRender);
  };

  const closeOrderModal = () => {
    setShowOrderInfo(false);
    setshowBuyOrder(false);
  };

  //Pending Orders Details
  const pendingOrdersDetails = (id) => {
    setShowLoader(true);
    fetch(
      `${apiUrl}delivery/get-single-trader-pending-delivery?deliveryID=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setShowLoader(false);
        if (data.msg === "Unauthorized") {
          navigate("/login");
        } else {
          setorderInfo(data.pendingDelivery);
          setShowOrderInfo(true);
          setShowLoader(false);
        }
      });
  };

  const requestPaymentHandler = () => {
    setShowLoader(true);

    fetch(`${apiUrl}trader/dashboard/request-withdrawal`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.msg === "Unauthorized") {
          setShowModal(false);
          setShowLoader(false);
          setShowAcctInfo(false);
          navigate("/login");
          localStorage.removeItem("isAuth");
        } else if (resp.msg === "trader has no bank details") {
          setShowModal(true);
          setShowLoader(false);
          setShowAcctInfo(false);
          setRemoveDelete(false);
          setRemoveNoticeInfo(false);
          setCreateShop(false);
          setError(false);
          setSuccess(false);
          setShopUpdate(false);
          setShowPage(false);
          setPayValid(false);
          setShowSellerModal(false);
          setEmailModal(false);
          setOtpModal(false);
          setPassModal(false);
          setNoticeProduct(false);
          setShowAcctInfo(false);
          setShowAmount(false);
          setShowSub(false);
          setShowAcct2(true);
        } else {
          setShowModal(true);
          setShowAcct2(false);
          setShowLoader(false);
          setShowAcctInfo(true);
          setRemoveDelete(false);
          setAcctInfo(resp.bankDetails);
        }
      })
      .catch((error) => console.log(error));
  };

  const closeConfirmModal = () => {
    setShowAcctInfo(false);
    setShowAmount(true);
  };
  const withdrawalAmountHandler = (e) => {
    e.preventDefault();

    const amount = e.target.amount.value;

    const amt = {
      amount: parseInt(amount),
    };
    if (amount === "") {
      setError(true);
      setErrorMsg("Amount is required");
    } else {
      setError(false);
      setErrorMsg("");
      setShowLoader(true);
      fetch(`${apiUrl}trader/dashboard/confirm-bank-details`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(amt),
      })
        .then((res) => res.json())
        .then((resp) => {
          if (resp.statusCode === 200) {
            setShowLoader(true);
            setSuccess(true);
            setSuccessMsg(resp.msg);
            setShouldRender(!shouldRender);
            e.target.reset();
          } else {
            setError(true);
            setErrorMsg(resp.msg);
            setShowLoader(false);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const subscribeHandler = () => {
    setShowLoader(true);

    fetch(`${apiUrl}email-subscription/subscribe`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        if (modalType === "pass") {
          setPassModal(true);
          setShowSub(false);
          setShowLoader(false);
        } else if (modalType === "mail") {
          setShowSub(false);
          setShowLoader(false);
          setEmailModal(true);
        }
      });
  };

  const showDeleteProdModal = (delID) => {
    setDelProdID(delID);
    setShowModal(true);
    setDelProdModal(true);
    seteditProd(false);
    setShowPage(false);
  };
  const deleteProductHandler = () => {
    setShowLoader(true);
    fetch(`${apiUrl}product/delete-product?productID=${delProdID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.statusCode === 200) {
          updater.TokenUpdaterHandler(resp.entamarketToken);

          fetch(`${apiUrl}shop/get-shop?shopID=${newId}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${entamarketToken}`,
            },
          })
            .then((res) => res.json())
            .then((resp) => {
              if (resp.statusCode === 200) {
                setAddProdErr(false);
                setViewShops(false);
                setProdList(false);
                setProd2(resp.shopData.products);
                setProdShow(true);
                setShowLoader(false);
                setShowModal(false);
                setDelProdModal(false);
                setShouldRender(!shouldRender);

                if (resp.shopData.products.length === 0) {
                  setAddProdErr(true);
                  setViewShops(false);
                  setProdShow(false);
                  setShowLoader(false);
                  setShowModal(false);
                  setDelProdModal(false);
                  setShouldRender(!shouldRender);
                }
              } else {
                setShowLoader(false);

                if (resp.statusCode === 400) {
                  setError(true);
                  setErrorMsg(resp.msg);
                }
              }
            });
        } else {
          setShowLoader(false);
          setShowModal(false);
          setDelProdModal(false);
        }
      });
  };

  const showEditModalHandler = (
    name,
    price,
    desc,
    stock,
    category,
    weight,
    images,
    prodId
  ) => {
    setShowLoader(true);
    setShowModal(true);
    seteditProd(true);

    setTimeout(() => {
      inp1Ref.current.value = name;
      inp2Ref.current.value = price;
      descRef.current.value = desc;
      quantRef.current.value = stock;
      catRef.current.value = category;
      weightRef.current.value = weight;
      setEditProdID(prodId);
      setImageShow(true);
      setProdImagePath(images);
      setShowLoader(false);
    }, 200);
  };

  const editProductHandler = async (e) => {
    e.preventDefault();

    const prodName = e.target.prodName.value;
    const prodDesc = e.target.prodDesc.value;
    const prodQuant = e.target.prodQuant.value;
    const prodWeight = e.target.prodWeight.value;
    const prodPrice = e.target.prodPrice.value;
    const prodCat = e.target.cat.value;

    const formData = new FormData();
    formData.append("name", prodName);
    formData.append("price", prodPrice);
    formData.append("stock", prodQuant);
    formData.append("description", prodDesc);
    formData.append("category", prodCat);
    formData.append("weight", prodWeight);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const imgsRef = prodImageInput.current.files;
    for (let main of imgsRef) {
      try {
        const compressedFile = await imageCompression(main, options);
        formData.append("images", compressedFile);
      } catch (error) {
        console.log(error);
      }
    }

    if (prodName === "") {
      setError(true);
      setErrorMsg("Product Name is Required");
    } else if (prodPrice === "") {
      setError(true);
      setErrorMsg("Product Price is Required");
    } else if (prodDesc === "") {
      setError(true);
      setErrorMsg("Product Description is Required");
    } else if (prodQuant === "") {
      setError(true);
      setErrorMsg("Product Quantity is Required");
    } else if (prodQuant === "") {
      setError(true);
      setErrorMsg("Product Weight is Required");
    } else if (prodCat.length === 0) {
      setError(true);
      setErrorMsg("Select a Product Category");
    } else if (prodImagePath.length === 0) {
      setError(true);
      setErrorMsg("Add Products Images");
    } else {
      setError(false);
      setErrorMsg("");
      setShowLoader(true);
      fetch(`${apiUrl}product/update-product?productID=${editProdID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${entamarketToken}`,
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((resp) => {
          updater.TokenUpdaterHandler(resp.entamarketToken);
          if (resp.statusCode === 200) {
            setProductData(resp.updatedProductData);
            setShowLoader(false);
            e.target.reset();
            setShouldRender(!shouldRender);
            setProdList(true);
            setProdShow(false);
            setProdImagePath([]);
            setImageShow(false);
            setAddProdErr(false);
            setShowModal(false);
            seteditProd(false);
          } else {
            setShowLoader(false);
            if (resp.statusCode === 400) {
              setError(true);
              setErrorMsg(resp.msg);
            }
          }
        });
    }
  };

  const showDeleteShopModal = (id, shop) => {
    setShowModal(true);
    setShopDelModal(true);
    setShopUpdate(false);
    setShopInfo([id, shop]);
  };

  const BackTOHome = () => {
    setRemoveShopItem("");
    setallProd(false);
    setIsPendPurchase(false);
    setPendClass("hide");
    setIsShowBuyer(false);
    setPend2Class("hide");
  };

  const shareShopHandler = (username, shopName) => {
    setShopName(shopName);
    setShopUserName(`https://entamarket.com/shop?u=${username}`);
    setShowModal(true);
    setshareShop(true);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shopUserName);
    setShowModal(true);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  const showFullHistrory2 = (item) => {
    setFullHistory2(item);
    setIsShowItems(true);
  };
  const showFullHistrory = (info) => {
    setFullHistory(info);
    setIshowfull(true);
  };

  const closePurchaseModal = () => {
    setIshowfull(false);
  };

  const closeModalHandle = () => {
    setIsVerifiedModal(false);
  };

  const closePendingModal = () => {
    setIspendMod(false);
  };

  const navigateToSellerVerify = () => {
    navigate("/seller-verification");
  };

  const showPendingPurchase = () => {
    setShowLoader(true);
    setRemoveShopItem("removeShopItem");
    setSellerProfile(false);
    setShopError(false);
    setViewShops(false);
    setAddProdErr(false);
    setProdList(false);
    setProdShow(false);
    setallProd(false);
    setIsShowBuyer(false);

    fetch(`${apiUrl}delivery/get-pending-deliveries?set=${pendDeliveryCount}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        setShowLoader(false);
        if (resp.msg === "no more pending deliveries") {
          setPendClass("");
          setIsPendPurchase(false);
          setPendDeliveryCount(0);
          setPend2Class("hide");
          setIsShowBuyer(false);
        } else {
          setPendClass("hide");
          setPend2Class("hide");
          setIsPendPurchase(true);
          setIsShowBuyer(false);
          setPendPurchaseList(resp.pendingDeliveries);
        }
      })
      .catch((error) => console.log(error));
  };

  const getOrderDetails = (id) => {
    setShowLoader(true);
    setOrderId(id);
    fetch(`${apiUrl}delivery/get-single-pending-delivery?checkoutID=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.msg === "Unauthorized") {
          navigate("/login");
        } else {
          setShowLoader(false);
          setshowBuyOrder(true);
          setbuyOrder(resp.pendingDelivery.purchases);
        }
      });
  };

  const showConfirmDeliveryModal = () => {
    setIsConfirmDeliv(true);
    setshowBuyOrder(false);
    setShowModal(true);
    setRemoveDelete(false);
    setRemoveNoticeInfo(false);
    setError(false);
    setSuccess(false);
    setShowSellerModal(false);
    setEmailModal(false);
    setOtpModal(false);
    setPassModal(false);
    setShowSub(false);
  };

  const confirmDelivery = () => {
    setShowLoader(true);
    fetch(`${apiUrl}delivery/confirm-delivery?checkoutID=${orderId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        setShowLoader(false);
        setshowBuyOrder(false);
        setShouldRender(!shouldRender);
        setIsConfirmDeliv(false);
        setShowModal(false);
      });
  };

  const bacToPreviousLoaded = () => {
    showPendingPurchase();
    if (pendDeliveryCount === 0) {
      setPendDeliveryCount(0);
    } else {
      setPendDeliveryCount(pendDeliveryCount - 1);
    }
  };

  const loadMorePendingOrders = () => {
    setPendDeliveryCount(pendDeliveryCount + 1);
    showPendingPurchase();
  };

  const purchaseHistoryHandler = () => {
    setShowLoader(true);
    setRemoveShopItem("removeShopItem");
    setSellerProfile(false);
    setShopError(false);
    setViewShops(false);
    setAddProdErr(false);
    setProdList(false);
    setProdShow(false);
    setallProd(false);
    setIsPendPurchase(false);

    fetch(`${apiUrl}buyer/get-purchase-history?set=${countPurch}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.purchaseHistoryData.length === 0) {
          setCountPurch(0);
          sethistoryBuyer(resp.purchaseHistoryData);
          setIsShowBuyer(true);
          setIsPendPurchase(false);
          setPendClass("hide");
          setShowLoader(false);
          setPend2Class("");
        } else {
          sethistoryBuyer(resp.purchaseHistoryData);
          setIsShowBuyer(true);
          setIsPendPurchase(false);
          setPendClass("hide");
          setShowLoader(false);
          setPend2Class("");
        }
      })
      .catch((error) => console.log(error));
  };

  const getReceiptAppHandler = (id) => {
    setShowLoader(true);
    fetch(`${apiUrl}buyer/get-receipt?id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${entamarketToken}`,
        "Content-Type": "application/pdf",
      },
    })
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        linkRef.current.href = url;
        linkRef.current.click();
        setShowLoader(false);
      });
  };

  const backHistoryBuyer = () => {
    purchaseHistoryHandler();
    if (countPurch === 0) {
      setCountPurch(0);
    } else {
      setCountPurch(countPurch - 1);
    }
  };

  const loadmoreOrderHistory = () => {
    purchaseHistoryHandler();
    setCountPurch(countPurch + 1);
  };

  const closeShowItems = () => {
    setIsShowItems(false);
  };

  const handleBackBank = () => {
    if(validAcct === true){
      setValidAcct(false);
      setValidOtp(false);
      setaccountBox(true);
    }
    else {
      setValidAcct(true);
      setValidOtp(false);
      setaccountBox(false);
    }
  };

  const getBankInfo = () => {
    setbankDataset(bankNode[refBank.current.value]);
  };

  return (
    <div className="Trader_dashboard">
      <a href={linkUrl} ref={linkRef} download="invoice" hidden>
        download
      </a>

      {isShowItems ? (
        <ShowItems closeShowItems={closeShowItems} fullHistory={fullHistory2} />
      ) : null}

      {isVerifiedModal ? (
        <VerifyModal
          closeModalHandle={closeModalHandle}
          navigateToSellerVerify={navigateToSellerVerify}
        />
      ) : null}

      {isPendmod ? (
        <PendingModal closePendingModal={closePendingModal} />
      ) : null}

      {isShowFull ? (
        <PurchaseModal
          info={fullHistory}
          type="Seller"
          close={closePurchaseModal}
          typeName="Sales Details"
        />
      ) : null}
      {showLoader ? <Preloader /> : null}

      {showBuyOrder ? (
        <div>
          <div className="order__prodmodal" onClick={closeOrderModal}></div>
          <div className="order__modal-content">
            <div className="close__modal">
              <FaTimes className="close__icon" onClick={closeOrderModal} />
            </div>
            <h3 className="pending-header pend2Text">Pending Order Details</h3>

            <div className="orderIDBox">
              <h4>Order ID: {orderId}</h4>
            </div>

            {buyOrder.map((orderData) => {
              return (
                <div key={orderData.product._id} className="orderboxMain12">
                  <div className="order__main-box">
                    <div className="order__img-box">
                      <img src={orderData.product.images[0]} alt="order-img" />
                    </div>

                    <div className="order__prodinfo">
                      <p>Product Name: {orderData.product.name}</p>
                      <p>Product Category: {orderData.product.category}</p>
                      <p>
                        Product Price: {convertPrice(orderData.product.price)}
                      </p>
                      <p>Order Quantity: {orderData.quantity}</p>
                    </div>
                  </div>
                  <h3 className="pending-header mainPendTextB">
                    Product Seller Details
                  </h3>

                  <div className="seller__details">
                    <p>
                      Full Name:{" "}
                      {orderData.trader.firstName +
                        " " +
                        orderData.trader.lastName}
                    </p>
                    <p>Phone Number: {orderData.trader.phoneNumber}</p>
                    <p>Username: {orderData.trader.username}</p>
                  </div>

                  <div className="trackBox">
                    <h4 className="mainPendTextB">Tracking Status</h4>
                    <div className="bxtrack">
                      <div>
                        <span
                          className={
                            orderData.trackingStatus === "trader"
                              ? "yes"
                              : "yes"
                          }
                        >
                          Product with Seller
                        </span>
                        <div className="bxtracki">
                          <div
                            className={
                              orderData.trackingStatus === "trader"
                                ? "bxtrack1 activ"
                                : "bxtrack1 activ"
                            }
                          ></div>
                          <div
                            className={
                              orderData.trackingStatus === "trader"
                                ? "trackDiv trackDiv1 activ"
                                : "trackDiv trackDiv1 activ"
                            }
                          ></div>
                        </div>
                      </div>

                      <div>
                        <span
                          className={
                            orderData.trackingStatus === "logistics"
                              ? "yes"
                              : ""
                          }
                        >
                          Picked up for delivery
                        </span>
                        <div className="bxtracki">
                          <div
                            className={
                              orderData.trackingStatus === "logistics"
                                ? "bxtrack1 activ"
                                : "bxtrack1"
                            }
                          ></div>
                          <div
                            className={
                              orderData.trackingStatus === "logistics"
                                ? "trackDiv trackDiv1 activ"
                                : "trackDiv trackDiv1"
                            }
                          ></div>
                        </div>
                      </div>

                      <div>
                        <span>Delivery complete</span>
                        <div className="bxtracki">
                          <div className="bxtrack1"></div>
                          <div className="trackDiv trackDiv1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="confirm__box">
              <p className="note__text">
                <span>Note</span>: Click the button below when you have recieved
                the product to confirm delivery.
              </p>

              <button
                className="confirm__btn"
                onClick={showConfirmDeliveryModal}
              >
                Confirm Delivery
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showOrderInfo ? (
        <div>
          <div className="order__prodmodal" onClick={closeOrderModal}></div>
          <div className="order__modal-content">
            <div className="close__modal">
              <FaTimes className="close__icon" onClick={closeOrderModal} />
            </div>
            <h3 className="pending-header">Order Details</h3>
            <div>
              <div className="order__main-box">
                <div className="order__img-box">
                  <img src={orderInfo.product.images[0]} alt="order-img" />
                </div>

                <div className="order__prodinfo">
                  <p>Product Name: {orderInfo.product.name}</p>
                  <p>Product Category: {orderInfo.product.category}</p>
                  <p>Product Price: {convertPrice(orderInfo.product.price)}</p>
                  <p>Order Quantity: {orderInfo.quantity}</p>
                </div>
              </div>

              <h3 className="pending-header">Buyer Details</h3>
              <div className="seller__details">
                <p>
                  Full Name:{" "}
                  {`${orderInfo.buyer.firstName} ${orderInfo.buyer.lastName}`}
                </p>
                <p>Phone Number: {orderInfo.buyer.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showModal ? (
        <Modal closeModal={cancelModalHandler}>
          {removeDelete ? (
            <DeleteModal
              accountType="Trader"
              titleText1="Are you sure you want to Delete your"
              titleText2="Account?"
              deleteHandler={deleteTraderHandler}
              cancelHandler={cancelModalHandler}
              btnValue="Delete Account"
              note="Note that account deleted cannot be recovered"
            />
          ) : null}

          {showAcctInfo ? (
            <div className="modal-content">
              <div className="modal-close">
                <FaTimes className="close" onClick={cancelModalHandler} />
              </div>

              <div className="acct__details-box">
                <h2>Confirm Payment Account</h2>

                <div className="acct__details">
                  <p>Bank Name: {acctInfo.bankName}</p>
                  <p>Account Name: {acctInfo.accountName}</p>
                  <p>Account Number: {acctInfo.accountNumber}</p>

                  <div className="payment-btn">
                    <button className="btn-pay" onClick={closeConfirmModal}>
                      Continue
                    </button>
                    <button
                      className="btn-cancel-pay"
                      onClick={cancelModalHandler}
                    >
                      Cancel Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : showAcct2 ? (
            <div className="modal-content">
              <p>No Bank Details added</p>
            </div>
          ) : null}

          {showAmount ? (
            <div className="modal-content">
              <div className="modal-close">
                <FaTimes className="close" onClick={cancelModalHandler} />
              </div>

              <div className="acct__details-box">
                {error ? <Error errMsg={errorMsg} /> : null}
                {success ? <Sucess succesMsg={successMsg} /> : null}
                <form onSubmit={withdrawalAmountHandler}>
                  <FormInput label="Enter withdrawl Amount" name="amount" />
                  <FormButton btnValue="Request Payment" />
                </form>
              </div>
            </div>
          ) : null}

          {removeNoticeInfo ? (
            <NoticeModal closeModal={cancelModalHandler}>
              <div className="comments__box">
                <div className="comment__header">
                  <p>Notifications</p>
                </div>

                {isNoticeArr
                  ? noticeArr.map((notice) => {
                      if (notice.type === "comment") {
                        const nameLetter = notice.from.username.split("")[0];
                        const nameUpper = nameLetter.toUpperCase();
                        const mainName = notice.from.username;
                        if (notice.read === false) {
                          return (
                            <CommentNotice
                              isRead={notice.read}
                              commentClass="comment__notice-2 not-read"
                              key={notice._id}
                              nameLetter={nameUpper}
                              text={notice.text}
                              mainName={mainName}
                              getCommentID={() =>
                                getCommentIDHandler(notice._id)
                              }
                            />
                          );
                        } else {
                          return (
                            <CommentNotice
                              key={notice._id}
                              commentClass="comment__notice-2"
                              nameLetter={nameUpper}
                              text={notice.text}
                              mainName={mainName}
                              getCommentID={() =>
                                getCommentIDHandler(notice._id)
                              }
                            />
                          );
                        }
                      } else {
                        return false;
                      }
                    })
                  : null}
              </div>
            </NoticeModal>
          ) : null}

          {isNoticeProduct ? (
            <NoticeProduct
              closeModal={cancelModalHandler}
              backToCommentHandler={backToCommentHandler}
            >
              <NoticeProductList
                userName={commentProd.notification.from.username}
                noticeImg={commentProd.notification.product.images[0]}
                noticeProdName={commentProd.notification.product.name}
                noticeText={commentProd.notification.text}
              />
            </NoticeProduct>
          ) : null}

          {createShop ? (
            <CreateShop closeModal={cancelModalHandler}>
              {error ? <Error errMsg={errorMsg} /> : null}
              {success ? <Sucess succesMsg={successMsg} /> : null}

              <div className="shopInfoBox">
                <h2>Create Shop</h2>
                <p>
                  To upload your products on Entamarket you need to create your
                  shop.
                </p>
              </div>
              <form onSubmit={CreateShopHanlder}>
                <FormInput label="Shop Name" name="shop" />
                <FormInput label="Shop Address" name="shopadd" />

                <FormButton btnValue="Create Shop" />
              </form>
            </CreateShop>
          ) : null}

          {shopUpdate ? (
            <UpdateShopModal closeModal={cancelModalHandler}>
              {error ? <Error errMsg={errorMsg} /> : null}
              {success ? <Sucess succesMsg={successMsg} /> : null}

              <form onSubmit={updateShopDataHandler}>
                <div className="updateShopForm">
                  <div className="form__input">
                    <label>Update Shop Name</label>
                    <input ref={ShopNameEl} name="shopValue" />
                  </div>

                  <div className="form__input">
                    <label>Update Shop Address</label>
                    <input ref={ShopCatEl} name="catValue" />
                  </div>
                </div>

                <FormButton btnValue="Update Shop" />
              </form>
            </UpdateShopModal>
          ) : null}

          {showPage ? (
            <AddProductModal closeModal={cancelModalHandler}>
              <form onSubmit={addShopProductHandler}>
                {error ? <Error errMsg={errorMsg} /> : null}
                {success ? <Sucess succesMsg={successMsg} /> : null}

                <FormInp
                  labelname1="Product Name"
                  labelname2="Product Price"
                  type1="text"
                  type2="text"
                  name1="prodName"
                  name2="prodPrice"
                />

                <FormInput label="Product Description" name="prodDesc" />
                <FormInput label="Product Quantity" name="prodQuant" />
                <FormInput label="Product Weight (KG)" name="weight" />
                <SelectInput />

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  name="file"
                  className="image__file-input"
                  ref={prodImageInput}
                  onChange={showProductImages}
                />

                {imageShow
                  ? prodImagePath.map((pro) => {
                      return (
                        <ProductImageModal
                          key={pro}
                          link={pro}
                          removeImg={() => {
                            removeProdImgHandler(pro);
                          }}
                        />
                      );
                    })
                  : null}

                <div className="product__image-btn">
                  <button
                    type="button"
                    onClick={() => addShopProductImageHandler()}
                  >
                    Add Product Images
                  </button>
                </div>

                <FormButton btnValue="Add Products" />
              </form>
            </AddProductModal>
          ) : null}

          {showEditProd ? (
            <UpdateProductModal closeModal={cancelModalHandler}>
              <form onSubmit={editProductHandler}>
                {error ? <Error errMsg={errorMsg} /> : null}
                {success ? <Sucess succesMsg={successMsg} /> : null}

                <FormInp
                  labelname1="Product Name"
                  labelname2="Product Price"
                  inp1Ref={inp1Ref}
                  inp2Ref={inp2Ref}
                  name1="prodName"
                  name2="prodPrice"
                />

                <InputForm
                  label="Product Description"
                  name="prodDesc"
                  inpRef={descRef}
                />
                <InputForm
                  label="Product Quantity"
                  name="prodQuant"
                  inpRef={quantRef}
                />

                <InputForm
                  label="Product Weight (KG)"
                  name="prodWeight"
                  inpRef={weightRef}
                />
                <SelectInput catRef={catRef} />

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  name="file"
                  className="image__file-input"
                  ref={prodImageInput}
                  onChange={showProductImages}
                />

                {imageShow
                  ? prodImagePath.map((pro) => {
                      return (
                        <ProductImageModal
                          key={pro}
                          link={pro}
                          removeImg={() => {
                            removeProdImgHandler(pro);
                          }}
                        />
                      );
                    })
                  : null}

                <div className="product__image-btn">
                  <button
                    type="button"
                    onClick={() => addShopProductImageHandler()}
                  >
                    Edit Product Images
                  </button>
                </div>

                <FormButton btnValue="Save Changes" />
              </form>
            </UpdateProductModal>
          ) : null}

          {delProdModal ? (
            <DeleteProdModal
              deleteProductHandler={deleteProductHandler}
              cancelHandler={cancelModalHandler}
            />
          ) : null}

          {payValid ? (
            <PaymentAccountModal closeModal={cancelModalHandler} validAcct={validAcct} validotp={validOtp} handleBackBank={handleBackBank}>
              {error ? <Error errMsg={errorMsg} /> : null}
              {success ? <Sucess succesMsg={successMsg} /> : null}

              {accountBox ? (
                <form onSubmit={addPaymentAccount}>
                  
                  <FormInput
                    label="Account Number"
                    name="acctNum"
                    placeHolder="Account Number"
                  />
                  <SelectBankInput getBankInfo={getBankInfo} refVal={refBank}>
                    <option>Choose Bank</option>
                    {bankNode.map((bank, index) => {
                      return (
                     
                          <option
                            value={index}
                            data-code={bank.code}
                            data-type={bank.type}
                            key={bank.name}
                          >
                            {bank.name}
                          </option>
                        
                      );
                    })}
                  </SelectBankInput>
                  <FormButton btnValue="Continue" />
                </form>
              ) : null}

              {validAcct ? (
                <form onSubmit={addPaymentAccount2}>
                  <div className="validBox">
                    <p className="validAccttop">Account Name</p>
                    <p className="validAcctsub">{acctNameFull}</p>
                  </div>

                  <FormInput
                    label="Password"
                    name="pass"
                    type="password"
                  />

                  <FormButton btnValue="Add Account" />
                </form>
              ) : null}


               {validOtp ? (
                <form onSubmit={validateOtp}>
                 
                 <h4 className="h5box">An Authorization Code was sent to your Email address</h4>

                  <FormInput
                    label="Enter OTP Code"
                    name="code"
                    placeHolder="Enter OTP Code"
                  />


                  <FormButton btnValue="Verify" />
                  
                </form>
              ) : null}
            </PaymentAccountModal>
          ) : null}

          {showSellerModal ? (
            <UpdateSellerModal closeModal={cancelModalHandler}>
              {error ? <Error errMsg={errorMsg} /> : null}
              {success ? <Sucess succesMsg={successMsg} /> : null}

              <form onSubmit={updateSellerProfileData}>
                <div className="form__input">
                  <label>Update First Name</label>
                  <input ref={fName} name="uFirstname" />
                </div>

                <div className="form__input">
                  <label>Update Last Name</label>
                  <input ref={lName} name="ulastname" />
                </div>

                <div className="form__input">
                  <label>Update Username</label>
                  <input ref={UName} name="uUsername" />
                </div>

                <PhoneInput
                  label="Phone Number"
                  name="phonenumber"
                  refData={Uphone}
                >
                  <select className="phoneInp" name="dailCode">
                    {countries.map((country) => {
                      return (
                        <option
                          value={`${country.dial_code}-`}
                          key={country.dial_code}
                        >
                          {country.dial_code}
                        </option>
                      );
                    })}
                  </select>
                </PhoneInput>

                <FormButton btnValue="Update Profile" />
              </form>
            </UpdateSellerModal>
          ) : null}

          {emailModal ? (
            <EmailUpdateModal closeModal={cancelModalHandler}>
              <form onSubmit={updateEmailHandler}>
                {error ? <Error errMsg={errorMsg} /> : null}
                {success ? <Sucess succesMsg={successMsg} /> : null}

                <FormInput label="New Email Address" name="emailUpdate" />
                <FormInput label="Password" name="passUpdate" type="password" />
                <FormButton btnValue="Update Email" />
              </form>
            </EmailUpdateModal>
          ) : null}

          {OtpModal ? (
            <UpdateProfileOTP closeModal={cancelModalHandler}>
              {error ? <Error errMsg={errorMsg} /> : null}
              {success ? <Sucess succesMsg={successMsg} /> : null}

              <div className="update__token">
                <h3>An OTP was sent to your email </h3>
              </div>

              <form onSubmit={verifyUpdateEmailHandler}>
                <FormInput name="otpUpdate" />
                <FormButton btnValue="Verify OTP" />
              </form>
            </UpdateProfileOTP>
          ) : null}

          {passModal ? (
            <UpdatePasswordModal closeModal={cancelModalHandler}>
              {error ? <Error errMsg={errorMsg} /> : null}
              {success ? <Sucess succesMsg={successMsg} /> : null}

              <form onSubmit={updatePasswordHandler}>
                <FormInput
                  label="Enter Old Password"
                  name="oldPass"
                  type="password"
                />
                <FormInput
                  label="Enter New Password"
                  name="newPass"
                  type="password"
                />
                <FormButton btnValue="Update Password" />
              </form>
            </UpdatePasswordModal>
          ) : null}

          {showSub ? (
            <Subscribe
              closeModal={cancelModalHandler}
              subscribeHandler={subscribeHandler}
            />
          ) : null}

          {shopDelModal ? (
            <DeleteModal
              cancelHandler={cancelModalHandler}
              titleText1="Are you sure you want to Delete"
              btnValue="Delete Shop"
              note="If this shop is deleted, Products in this shop will be deleted as well."
              deleteHandler={deleteShopHanlder}
              accountType={shopInfo[1]}
            />
          ) : null}

          {shareShop ? (
            <ShareShopModal
              shopUsername={shopUserName}
              shopName={shopName}
              copyLink={copyLink}
            />
          ) : null}

          {isCopied ? (
            <div className="modal-content">
              <div className="content__box">
                <HiCheckCircle className="copy_check" />
                <span>Link Copied to clipboard</span>
              </div>
            </div>
          ) : null}

          {confirmDeliv ? (
            <DeleteModal
              titleText1="Confirm Deivery"
              note="Are you sure you want to confirm this delivery, ensure to have received the order before confirming."
              btnValue="Yes, Confirm"
              cancelHandler={cancelModalHandler}
              deleteHandler={confirmDelivery}
            />
          ) : null}
        </Modal>
      ) : null}
      <div className="traderdashboard__header">
        <div className="dashboard__header-box">
          <Logo width="160px" logoColor="#81007F" />

          <div className="shop-createbtn">
            <button className="create__shop" onClick={createShopModal}>
              Create Shop
            </button>

            <button className="add_prodShop" onClick={viewShopsHandler}>
              Add Product
            </button>
          </div>

          <div className="header__box">
            <Userbox
              userIcon={<FaUserAlt className="user-icon" />}
              username={showShop ? traderData.username : null}
              downArrow={<FaSortDown className="user-sort" />}
            />
            <button className="logout__btn" onClick={logOutHandler}>
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="traderdashboard__main">
        <div className={[showSideBar, SideActive].join(" ")}>
          {SideActive ? (
            <span className="spanClear" onClick={removeSideBar}>
              <MdClear />
            </span>
          ) : null}

          <SidebarNav
            icon={<ImHome />}
            navLink="Dashboard"
            notice={() => window.location.reload()}
          />

          <SidebarNav
            icon={<FaUserAlt />}
            navLink="Seller Profile"
            notice={traderProfileHandler}
          />

          <SidebarNav
            icon={<MdOutlineReceipt />}
            navLink="Pending Purchase"
            notice={showPendingPurchase}
          />

          <SidebarNav
            icon={<FaList />}
            navLink="Purchase History"
            notice={purchaseHistoryHandler}
          />

          <div className="mobile-nav">
            <SidebarNav
              icon={<MdOutlineAutoAwesomeMosaic />}
              navLink="Create Shop"
              notice={createShopModal}
            />

            <SidebarNav
              icon={<MdOutlinePowerSettingsNew />}
              navLink="Log out"
              notice={logOutHandler}
            />
          </div>

          <SidebarNav
            icon={<FaRegBell />}
            navLink="Notifications"
            notice={showNotificationHandler}
          />

          <SidebarNav
            icon={<MdAccountBalance />}
            navLink="Payment Account"
            notice={addPaymentAccountHandler}
          />

          <SidebarNav
            icon={<FaMoneyCheck />}
            navLink="Request Payment"
            notice={requestPaymentHandler}
          />

          <SidebarNav
            icon={<BiSupport />}
            navLink="Contact Support"
            notice={contactSupport}
          />

          <SidebarNav
            icon={<FaTrashAlt />}
            navLink="Delete Account"
            notice={showModalHandler}
          />
        </div>

        {sellerProfile ? (
          <div className="trader-profile">
            <div className="trader-profile-box">
              <div className="seller-prof-info">
                <span>
                  <FaUserAlt />
                </span>
                <h3>Seller Profile</h3>
              </div>

              <hr />
              <div className="seller-profile-info">
                <div className="seller-prof-box">
                  <span>First Name: </span> <span>{traderData.firstName}</span>{" "}
                  <button onClick={showSellModalHandler}>Edit</button>
                </div>

                <div className="seller-prof-box">
                  <span>Last Name: </span> <span>{traderData.lastName}</span>{" "}
                  <button onClick={showSellModalHandler}>Edit</button>
                </div>

                <div className="seller-prof-box">
                  <span>Username: </span> <span>{traderData.username}</span>{" "}
                  <button onClick={showSellModalHandler}>Edit</button>
                </div>

                <hr />
                <div className="seller-prof-box">
                  <span>Email: </span> <span>{traderData.email}</span>{" "}
                  <button onClick={showSellerEmailModal}>Edit</button>
                </div>

                <div className="seller-prof-box">
                  <span>Password: </span>{" "}
                  <button onClick={showSellerPassModal}>Edit</button>
                </div>

                <div className="seller-prof-box">
                  <span>Phone Number: </span>
                  <span>{traderData.phoneNumber}</span>
                  <button onClick={showSellModalHandler}>Edit</button>
                </div>

                <hr />

                {traderData.hasOwnProperty("bankDetails") ? (
                  <div className="seller-prof-box">
                    <span>Account Name: </span>{" "}
                    <span>{traderData.bankDetails.accountName}</span>
                  </div>
                ) : null}

                {traderData.hasOwnProperty("bankDetails") ? (
                  <div className="seller-prof-box">
                    <span>Account Number: </span>
                    {traderData.bankDetails.accountNumber}
                  </div>
                ) : null}

                {traderData.hasOwnProperty("bankDetails") ? (
                  <div className="seller-prof-box">
                    <span>Bank Name: </span>{" "}
                    <span>{traderData.bankDetails.bankName}</span>{" "}
                  </div>
                ) : null}
              </div>

              <div className="close-profile-btn">
                <button onClick={closeSellerProfile}>Close</button>
              </div>
            </div>
          </div>
        ) : null}

        {isPendPurchase ? (
          <div className="pendingPurchaseBox">
            <button className="prod-back" onClick={BackTOHome}>
              Back
            </button>

            <h2>Pending Purchase</h2>

            {pendPurchaseList.map((purchase) => {
              return (
                <div className="purchaseBox" key={purchase._id}>
                  <div className="purchaseTextBox">
                    <div className="pending__circle-1">
                      <div className="pending__circle-2"></div>
                    </div>

                    <div className="pendText">
                      <p>Pending order awaiting delivery</p>
                    </div>
                  </div>

                  <div className="btnPurchaseView">
                    <button onClick={() => getOrderDetails(purchase._id)}>
                      view order
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="loadmore__btns loadMoreBox">
              {pendDeliveryCount > 0 ? (
                <button
                  className="btn-order-more"
                  onClick={bacToPreviousLoaded}
                >
                  Back
                </button>
              ) : null}
              {purchaseArr.length >= 5 ? (
                <button
                  className="btn-order-more load__more"
                  onClick={loadMorePendingOrders}
                >
                  Load more
                </button>
              ) : null}
            </div>
          </div>
        ) : (
          <div className={["viewErrBox", pendClass].join(" ")}>
            <button className="prod-back" onClick={BackTOHome}>
              Back
            </button>

            <div className={["error-prod-box"].join(" ")}>
              <span>No Pending Purchase</span>

              <div className="loadmore__btns loadMoreS">
                {pendDeliveryCount > 0 ? (
                  <button
                    className="btn-order-more"
                    onClick={bacToPreviousLoaded}
                  >
                    Back
                  </button>
                ) : null}
                {purchaseArr.length >= 5 ? (
                  <button
                    className="btn-order-more load__more"
                    onClick={loadMorePendingOrders}
                  >
                    Load more
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        )}

        {isShowBuyer ? (
          <div className="purchaseHistoryBox1">
            <button className="prod-back" onClick={BackTOHome}>
              Back
            </button>
            <h2 className="purchaseH2">Purchase History</h2>
            {historyBuyer.length > 0 ? (
              historyBuyer.map((item, index) => {
                const timeDate = item.date.split(",");
                const date = timeDate[0].split("/");
                const dateIndex = parseInt(date[0]) - 1;
                return (
                  <div
                    className={["pend-box1main", pend2Class].join(" ")}
                    key={item._id}
                  >
                    <div className="pending__buyerbox pendBuy2">
                      <div>
                        <div>
                          <MdOutlineRedeem className="p-box-icon" />
                        </div>
                      </div>
                      <p>
                        Your Order on
                        <span className="dateStyle">{` ${months(dateIndex)} ${
                          date[1]
                        }, ${date[2]}, ${timeDate[1]}`}</span>
                      </p>
                      <button onClick={() => showFullHistrory2(item)}>
                        view order
                      </button>
                      <button
                        onClick={() => getReceiptAppHandler(item._id)}
                        className="btn-receip"
                      >
                        Get Receipt
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className={["viewErrBox", pend2Class].join(" ")}>
                <div className={["error-prod-box"].join(" ")}>
                  <span>No Purchase History</span>
                </div>

                <div className="loadmore__btns loadMoreBox">
                  {countPurch >= 0 ? (
                    <button
                      className="btn-order-more"
                      onClick={backHistoryBuyer}
                    >
                      Back
                    </button>
                  ) : null}

                  {countPurch >= 0 ? (
                    <button
                      className="btn-order-more load__more"
                      onClick={loadmoreOrderHistory}
                    >
                      Load more
                    </button>
                  ) : null}
                </div>
              </div>
            )}
            <div className="loadmore__btns loadMoreBox">
              {countPurch > 0 ? (
                <button className="btn-order-more" onClick={backHistoryBuyer}>
                  Back
                </button>
              ) : null}

              {historyBuyer.length >= 5 ? (
                <button
                  className="btn-order-more load__more"
                  onClick={loadmoreOrderHistory}
                >
                  Load more
                </button>
              ) : null}
            </div>
            ;
          </div>
        ) : (
          <div className={["viewErrBox", pend2Class].join(" ")}>
            <button className="prod-back" onClick={BackTOHome}>
              Back
            </button>

            <div className={["error-prod-box"].join(" ")}>
              <span>No Purchase History</span>
            </div>

            <div className="loadmore__btns loadMoreBox">
              {countPurch > 0 ? (
                <button className="btn-order-more" onClick={backHistoryBuyer}>
                  Back
                </button>
              ) : null}

              {historyBuyer.length >= 5 ? (
                <button
                  className="btn-order-more load__more"
                  onClick={loadmoreOrderHistory}
                >
                  Load more
                </button>
              ) : null}
            </div>
          </div>
        )}

        {viewShops ? (
          <div className="shop__main-data-box">
            {viewShops
              ? traderData.shops.map((el) => {
                  return (
                    <ShopLists
                      key={el.name}
                      showProd={() => {
                        showProducts(el.products, el._id);
                      }}
                      updateShop={() => {
                        updateShopHandler(el.name, el._id, el.shopAddress);
                      }}
                      shopName={el.name}
                      shopIcon={<MdOtherHouses />}
                      deleteShop={() => {
                        showDeleteShopModal(el._id, el.name);
                      }}
                      shareShop={() => {
                        shareShopHandler(el.username, el.name);
                      }}
                    />
                  );
                })
              : null}

            {viewShops ? (
              <div className="close-back">
                <button onClick={removeViewShop}>Close</button>
              </div>
            ) : null}
          </div>
        ) : null}

        {allProd ? (
          <div className="prod-actbox">
            <button className="prod-back" onClick={BackTOHome}>
              Back
            </button>
            <div className="prod-box1Box">
              <h2>Total Products</h2>
            </div>
            {shopProds.length > 0 ? (
              <div className="prod-main-div">
                {shopProds.map((product) => {
                  return (
                    <ShopAllProducts
                      key={product._id}
                      PName={product.name}
                      Pprice={product.price}
                      desc={product.description}
                      stock={product.stock}
                      category={product.category}
                      weight={product.weight}
                    >
                      {typeof product.images === "string" ? (
                        <ProductImgList
                          imgSrc={product.images}
                          key={product.images}
                        />
                      ) : (
                        product.images.map((img) => (
                          <ProductImgList imgSrc={img} key={img} />
                        ))
                      )}
                    </ShopAllProducts>
                  );
                })}
              </div>
            ) : (
              <div className="error-prod-box">
                <span>No Product Available</span>
                <button onClick={BackTOHome} className="addTotalProdBtn">
                  Go Back
                </button>
                <button className="addTotalProd2Btn" onClick={viewShopsHandler}>
                  Add Product
                </button>
              </div>
            )}
          </div>
        ) : null}

        {showProdList ? (
          <div className="showProdList__div">
            <ProductList
              removeProducts={removeProducts}
              addProductsHandler={addProductsHandler}
              PName={productData.name}
              Pprice={productData.price}
              desc={productData.description}
              stock={productData.stock}
              category={productData.category}
              weight={productData.weight}
            >
              {typeof productData.images === "string" ? (
                <ProductImgList
                  imgSrc={productData.images}
                  key={productData.images}
                />
              ) : (
                productData.images.map((img) => (
                  <ProductImgList imgSrc={img} key={img} />
                ))
              )}
            </ProductList>
          </div>
        ) : null}

        {prodShow ? (
          <div className="prod-main-div">
            {prod2.map((value) => {
              return (
                <ProductsLists
                  key={value._id}
                  removeProducts={removeProducts}
                  addProductsHandler={addProductsHandler}
                  PName={value.name}
                  Pprice={value.price}
                  desc={value.description}
                  stock={value.stock}
                  weight={value.weight}
                  category={value.category}
                  showDeleteProdModal={() => showDeleteProdModal(value._id)}
                  showEditModalHandler={() =>
                    showEditModalHandler(
                      value.name,
                      value.price,
                      value.description,
                      value.stock,
                      value.category,
                      value.weight,
                      value.images,
                      value._id
                    )
                  }
                >
                  {typeof value.images === "string" ? (
                    <ProductImgList imgSrc={value.images} key={value.images} />
                  ) : (
                    value.images.map((img) => (
                      <ProductImgList imgSrc={img} key={img} />
                    ))
                  )}
                </ProductsLists>
              );
            })}
          </div>
        ) : null}

        {shopErr ? (
          <div className="shopErrormain">
            <div className="no__records record2Box">
              <div className="icon-record">{<MdOutlinePendingActions />}</div>
              <div>
                <span className="no_recordtext recordText2">
                  No Shops Avaliable Create shop, to Add Products to your shop
                </span>
              </div>
            </div>

            <div className="close-back closebtn2">
              <button onClick={removeViewShop}>Close</button>
            </div>
          </div>
        ) : null}

        {addProdErr ? (
          <div className="shopErrormain">
            <NoRecords
              Icon={<MdOutlinePendingActions />}
              Message="No Products Available"
            />
            <div className="close-back">
              <button onClick={addProductsHandler} className="add__product-btn">
                Add Products
              </button>
              <button onClick={removeProducts} className="back-btn">
                Back to Shops
              </button>
            </div>
          </div>
        ) : null}

        <div className={[shopItemClass, removeShopItem].join(" ")}>
          <div className="toggle_icon">
            <div className="toggle__icon--box">
              <div className="toggle__icon-main" onClick={showSideBarHandler}>
                <span>
                  <MdViewHeadline />
                </span>
              </div>
            </div>
          </div>

          <div className="shop__items-box">
            <ShopBox
              shopClass="shop-box shop-box-account"
              shopIcon={<FaWallet />}
              shopboxName="Balance"
              ShopBoxValue={
                showShop ? `${convertPrice(traderData.accountBalance)}` : null
              }
            />

            <ShopBox
              shopClass="shop-box shop-box-shops"
              openShop={viewShopsHandler}
              shopIcon={<FaShoppingCart />}
              shopboxName="Shops"
              ShopBoxValue={showShop ? traderData.shops.length : null}
            />

            <ShopBox
              shopClass="shop-box shop-box-account"
              shopIcon={<FaCarAlt />}
              openShop={showAllProducts}
              shopboxName="Total Products"
              ShopBoxValue={showShop ? totalProductsHandler() : null}
            />

            <ShopBox
              shopClass="shop-box shop-box-shops"
              shopIcon={<FaBullhorn />}
              shopboxName="Sales"
              ShopBoxValue={showShop ? deliveredArr.length : null}
            />
          </div>

          <div className="shop__activity">
            <div className="transactions-box">
              <DashboardActivity headerValue="Pending Sales">
                {showRecords && purchaseArr.length > 0 ? (
                  purchaseArr.map((order) => {
                    return (
                      <div className="pend-box1main" key={order._id}>
                        <div className="pending__buyerbox">
                          <div className="pending__circle-1">
                            <div className="pending__circle-2"></div>
                          </div>
                          <p>Pending order waiting</p>
                          <button
                            onClick={() => pendingOrdersDetails(order._id)}
                          >
                            view order
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <NoRecords
                    Icon={<MdOutlineReceipt />}
                    Message="No Pending Sales"
                  />
                )}

                <div className="loadmore__btns">
                  {pendingOrderCount > 0 ? (
                    <button
                      className="btn-order-more"
                      onClick={reducePendingOrderCount}
                    >
                      Back
                    </button>
                  ) : null}

                  {pendingOrderCount >= 5 ? (
                    <button
                      className="btn-order-more load__more"
                      onClick={addPendingOrderCount}
                    >
                      Load more
                    </button>
                  ) : null}
                </div>
              </DashboardActivity>
            </div>

            <div className="completed-orders">
              <DashboardActivity
                classStatus="completed"
                headerValue="Sales History"
              >
                {deliveredArr.length > 0 ? (
                  deliveredArr.map((deliver) => {
                    return (
                      <div key={deliver._id}>
                        <div
                          className="box-history"
                          onClick={() => showFullHistrory(deliver)}
                        >
                          <div className="box1history">
                            <div className="history-img">
                              <img
                                src={deliver.product.images[0]}
                                alt="history-img"
                              />
                            </div>
                            <div className="history-img">
                              <span>{deliver.product.name}</span>
                            </div>
                          </div>

                          <div className="history-price">
                            <span>{convertPrice(deliver.product.price)}</span>
                            <p>{deliver.soldAt}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <NoRecords
                    Icon={<MdOutlinePendingActions />}
                    Message="No Sales History"
                  />
                )}

                <div className="loadmore__btns">
                  {saleCount > 0 ? (
                    <button
                      className="btn-order-more"
                      onClick={reduceSaleCount}
                    >
                      Back
                    </button>
                  ) : null}

                  {deliveredArr.length >= 20 ? (
                    <button
                      className="btn-order-more load__more"
                      onClick={addSaleCount}
                    >
                      Load more
                    </button>
                  ) : null}
                </div>
              </DashboardActivity>
            </div>
          </div>
        </div>
      </div>

      <div className="traderdashboard__footer">
        <p>Entamarket Limited Seller Dashboard</p>
        <p> All rights reserved 2024</p>
      </div>
    </div>
  );
};

export default TraderDashboard;
