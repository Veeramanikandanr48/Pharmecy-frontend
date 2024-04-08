// Import necessary libraries/components
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import parcel_en from "../media/parcel_en.png";
import track from "../media/track.png";
import image from "../media/image.jpg";
import check from "../media/check.png";
import testimonial from "../Data/testimonials.json";
import useProductData from "../Data/useProductData";
import CircularProgress from '@mui/material/CircularProgress';
import Layout from "../Layout";

const ProductDetails = () => {
  // State variables
  const [showDescription, setShowDescription] = useState(false);
  const [product, setProduct] = useState(null);
  const { productName } = useParams();
  const navigate = useNavigate();

  // Fetch product data
  const { loading, error, data } = useProductData(`products/${productName}`);

  // Update product state when data is fetched
  useEffect(() => {
    if (!loading && !error && data) {
      setProduct(data);
    }
  }, [loading, error, data]);

  // Function to handle row click
  const handleRowClick = (rowData) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, rowData];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  // Return loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  // Return error message if there's an error or product is not found
  if (error || !product) {
    return <div>Product not found</div>;
  }

  // Render product details
  return (
    <Layout>
      <div className="container mt-5 px-5">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 overflow-hidden">
            {/* Product Info */}
            <div className="row mt-4">
            <div className="col-lg-2 d-flex justify-content-center align-items-center">
  <img
    width="300"
    height="300"
    src={product.URL}
    alt={product.Name}
    title={product.Name}
    className="img-fluid"
  />
</div>

              <div className="col-lg-8">
                <div className="pill-info">
                  <h2 className="title-pill h2 font-weight-bold text-primary">
                    {product.Name}{" "}
                    <span className="text-secondary">
                      ({product.packaging})
                    </span>
                  </h2>
                  <p className="text-muted">{product.Uses}</p>
                </div>
              </div>
            </div>

            {/* Select Doses */}
            <div className="row mt-1 mb-4">
              <div className="col-12">
                <span className="title-doses">Select Doses:</span>
                <button className="btn btn-secondary">
                  {product.packaging}
                </button>
              </div>
            </div>
            <hr />

            {/* Table of Prices */}
            <div className="row mt-2">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Packaging</th>
                        <th scope="col">No of Packs</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Bonus</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((index) => {
                        const discountPrice = product[`Discount price${index}`];
                        const grossPrice = product[`Gross price${index}`];
                        const originalPrice = product[`Original price${index}`];
                        const noOfPacks = product[`no of packs${index}`];

                        if (
                          discountPrice &&
                          grossPrice &&
                          originalPrice &&
                          noOfPacks
                        ) {
                          return (
                            <tr key={index} onClick={() => handleRowClick({
                              Id: productName,
                              Name: product.Name,
                              imageURL: product.URL,
                              discountPrice,
                              grossPrice,
                              originalPrice,
                              noOfPacks,
                              Mg: product.packaging,
                              nextQuantity: 1,
                            })}>
                              <td className="font-weight-bold">
                                {product.packaging}
                              </td>
                              <td>{noOfPacks}</td>
                              <td>
                                <img
                                  width="70"
                                  height="70"
                                  src={product.URL}
                                  alt={product.Name}
                                  className="img-fluid"
                                />
                              </td>
                              <td>
                                <span className="product-old-price text-danger font-italic">
                                  <del>{grossPrice}</del>
                                </span>
                                <br />
                                <span className="dose-dose h4 text-black">
                                  {index === 2 ? product['Original Price2'] : originalPrice}
                                </span>
                                <br />
                                <span className="dose-type text-sm text-secondary">
                                  {discountPrice}
                                </span>
                              </td>
                              <td>
                                <div className="our-bonus">
                                  {Array.isArray(product.bonus) ? (
                                    product.bonus.map((point, i) => (
                                      <p key={i} className="text-success">
                                        {i >= 0 ? "+" : ""} {point}
                                      </p>
                                    ))
                                  ) : (
                                    <p className="text-success">+ Bonus</p>
                                  )}
                                </div>
                              </td>
                              <td>
                                <a
                                  className="btn btn-primary"
                                  href={product.addToCartLink}
                                >
                                  ADD TO CART
                                </a>
                                <br />
                                <span className="dose-type text-info">save:</span>
                                <span className="pill-save text-danger text-sm">
                                  {(
                                    parseFloat(grossPrice.replace("$", "")) -
                                    parseFloat(originalPrice.replace("$", ""))
                                  ).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                  })}
                                </span>
                              </td>
                            </tr>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="row mt-3">
              <div className="col-lg-12 text-center">
                <img alt="parcel" src={parcel_en} width="85%" />
                <p className="text-left">
                  Your order will be packed safe and secure and dispatched within
                  24 hours. This is exactly how your parcel will look like
                  (pictures of a real shipping item). It has a size and a look of
                  a regular private letter (9.4x4.3x0.3 inches or 24x11x0.7cm) and
                  it does not disclose its contents
                </p>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="row mt-3">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th height="36" width="132">
                          Country
                        </th>
                        <th>Shipping method</th>
                        <th>Delivery time</th>
                        <th>Price</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="4">
                          <img alt="track" src={image} />
                        </td>
                        <td height="55" className="shedule-del flex">
                          <img alt="tra" src={track} /> <span>Delivery</span>
                        </td>
                        <td>5-9 days</td>
                        <td>$30</td>
                        <td>Tracking# available in 2 days</td>
                      </tr>
                      <tr>
                        <td className="freeDescrDelivery" colSpan="4">
                          Free trackable courier service for all orders with sum
                          starting at $300
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Other Information */}
            <div className="row m-3">
              <table>
                <tbody>
                  <tr>
                    <td width="23">
                      <img alt="" src={check} />
                    </td>
                    <td>Shipping worldwide</td>
                    <td width="23">
                      <img alt="" src={check} />
                    </td>
                    <td>Confidentiality and anonymity guarantee</td>
                  </tr>
                  <tr>
                    <td width="23">
                      <img alt="" src={check} />
                    </td>
                    <td>Safe and secure</td>
                    <td width="23">
                      <img alt="" src={check} />
                    </td>
                    <td>Discreet looking packages</td>
                  </tr>
                  <tr>
                    <td width="23">
                      <img alt="" src={check} />
                    </td>
                    <td>Dispatch orders within 24 hours</td>
                    <td width="23">
                      <img alt="" src={check} />
                    </td>
                    <td>100% success delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Product Description and Testimonials */}
            <div className="row mt-3">
              <div className="col-lg-12">
                <div className="product-descr">
                  {/* Navigation Tabs */}
                  <ul className="nav nav-tabs flex-column flex-sm-row">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          !showDescription ? "active" : ""
                        }`}
                        onClick={() => setShowDescription(false)}
                      >
                        Testimonials
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          showDescription ? "active" : ""
                        }`}
                        onClick={() => setShowDescription(true)}
                      >
                        Show Description
                      </button>
                    </li>
                  </ul>

                  {/* Content Blocks */}
                  <div className="tab-content mt-3">
                    {/* Product description content */}
                    {showDescription && (
                      <div className="product-descr-block">
                        <p>{product['PRODUCT DESCRIPTION']}</p>
                      </div>
                    )}

                    {/* Testimonials content */}
                    {!showDescription && (
                      <div id="c_p2" className="tab-pane fade show active">
                        <div className="review-block">
                          {testimonial.map((testimony, index) => (
                            <div key={index} className="review-item card mb-4">
                              <div className="card-body">
                                <div className="review-header d-flex justify-content-between align-items-center mb-3">
                                  <div>
                                    <span className="review-name h5 text-primary">
                                      {testimony.name}
                                    </span>
                                    <span className="review-date text-muted">
                                      ({testimony.date})
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="review-text mb-3"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  {testimony.text}
                                </div>
                                <div className="review-star d-flex align-items-center">
                                  <span className="review-star-capt mr-2 text-success">
                                    Quality Of Products & Services:
                                  </span>
                                  <Box
                                    component="fieldset"
                                    borderColor="transparent"
                                  >
                                    <Rating
                                      name={`rating-${index}`}
                                      value={testimony.stars}
                                      precision={0.5}
                                      readOnly
                                    />
                                  </Box>
                                  <span className="review-star-count h6 ml-2">
                                    {testimony.stars} stars out of 5
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
