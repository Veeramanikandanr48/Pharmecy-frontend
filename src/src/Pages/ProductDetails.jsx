import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import parcel_en from "../media/parcel_en.png";
import track from "../media/track.png";
import image from "../media/image.jpg";
import check from "../media/check.png";

const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("40mg");
  const [selectedDose, setSelectedDose] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const capitalizeFirstLetter=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

  const testimonials = [
    {
      name: "Matthias Trommler",
      date: "18-Aug-2015",
      text: "With online pharmacies, the most irritating thing is their delivery. This pharmacy is nothing like that though, they deliver quite fast and without any delays. I ordered Lasix 100 mg twice already, every time it took them five days to deliver. It's very convenient and not at all costly, which is always nice.",
      stars: 4,
    },
    {
      name: "Joshua Chandler",
      date: "16-Aug-2015",
      text: "Amazingly fast delivery and reasonable prices are main reasons why I love this pharmacy. I mean, having high blood pressure is no fun, but it's nice to know you can order Lasix 40 mg today and expect it to arrive in only a few days. This pharmacy works very hard to make its customers happy and I do appreciate it.",
      stars: 5,
    },
  ];

  const product = {
    name: "Generic Lasix",
    description:
      "Lasix belongs to a class of diuretics, it is prescribed in patients with swelling caused by congestive heart failure.",
    image: "https://safe-easy-online.com/content/160x120/lasix.jpg",
    doses: {
      "40mg": [
        {
          mg: "40mg",
          pills: "30pills",
          oldPrice: "$28.79",
          bonus: "Package delivery insurance",
          price: "$23.99",
          discount: "$0.80 per pill",
        },
        {
          mg: "40mg",
          pills: "15pills",
          oldPrice: "$18.99",
          bonus: "Fast shipping",
          price: "$15.99",
          discount: "$0.60 per pill",
        },
        {
          mg: "40mg",
          pills: "30pills",
          oldPrice: "$28.79",
          bonus: ["Package delivery insurance", "Free consultation"],
          price: "$23.99",
          discount: "$0.80 per pill",
        },
        {
          mg: "40mg",
          pills: "15pills",
          oldPrice: "$18.99",
          bonus: "Fast shipping",
          price: "$15.99",
          discount: "$0.60 per pill",
        },
        // Add more 40mg dose options as needed
      ],
      "100mg": [
        {
          mg: "100mg",
          pills: "30pills",
          oldPrice: "$48.79",
          bonus: "Premium packaging",
          price: "$39.99",
          discount: "$1.00 per pill",
        },
        {
          mg: "100mg",
          pills: "15pills",
          oldPrice: "$34.99",
          bonus: "Express delivery",
          price: "$29.99",
          discount: "$0.90 per pill",
        },
        {
          mg: "100mg",
          pills: "30pills",
          oldPrice: "$48.79",
          bonus: "Premium packaging",
          price: "$39.99",
          discount: "$1.00 per pill",
        },
        {
          mg: "100mg",
          pills: "15pills",
          oldPrice: "$34.99",
          bonus: "Express delivery",
          price: "$29.99",
          discount: "$0.90 per pill",
        },
        // Add more 100mg dose options as needed
      ],
    },
    addToCartLink: "https://safe-easy-online.com/cart.html?p=00085010",
  };

  const productDetails = {
    commonUse: `Furosemide is a loop diuretic causing fast and short diuresis. 
                It possesses natriuretic effect and also decreases levels of Cl- in blood, 
                increases excretion of K+, Ca2+, Mg2+. Penetrating into a renal tubule 
                in ascending thick limb of Henle's loop it blocks re-absorption of Na+ and Cl-. 
                Due to increased excretion of Na+ secondary intensified excretion of water occurs 
                and as well as increased secretion of K+ in distal part of the renal tubule. 
                Simultaneously excretion of Ca2+ and Mg2+ increases. 
                Furosemide is used to treat edema syndrome in patients with chronic heart failure 
                (degree II and III), cirrhosis, diseases of kidneys, acute heart failure (pulmonary edema), 
                brain edema, hypertensive crisis, arterial hypertension and others.`,

    dosageAndDirection: `Take exactly as it was prescribed by your doctor.`,

    precautions: `Before using Furosemide, consult your doctor if you suffer from kidney disease, 
                  liver disease, gout, lupus, diabetes, or an allergy to sulfa drugs. 
                  Avoid becoming dehydrated as Furosemide makes you urinate more often. 
                  Do not stop taking the drug even if you feel fine as high blood pressure often has no symptoms. 
                  Avoid taking the drug if you are pregnant or breastfeeding.`,

    contraindications: `Hypersensitivity, acute kidney failure with anuria, severe liver failure, 
                       liver coma and precoma, stenosis of urethra, acute glomerulonephritis, 
                       urinary tract obstruction, precoma, hyperglycemic coma, gout, arterial hypotension, 
                       heart attack, pancreatitis and others.`,

    possibleSideEffect: `Contact your physician for medical attention if you have signs of allergy 
                        or any following conditions: dry mouth, thirst, nausea, vomiting; weakness, 
                        drowsiness, restless, or light-headed, fast or uneven heartbeat, muscle pain, 
                        less than usual urination or absence of urination, easy bruising or bleeding, 
                        red blistering skin rash, hair loss.`,

    drugInteraction: `Hearing damage may occur if Furosemide is administered with aminoglycoside antibiotics 
                      (gentamicin and others) or Edecrin - another diuretic. Concomitant use of Furosemide 
                      and aspirin may cause high blood levels of aspirin and aspirin toxicity. 
                      Furosemide is able to reduce excretion of lithium by the kidneys. 
                      Sucralfate (Carafate) reduces the action of Furosemide. 
                      Intake of Ingestion of Furosemide and Sucralfate should be separated by two hours.`,

    missedDose: `The medication is sometimes administered for single use so you will not need a dosing schedule. 
                 If you take Furosemide regularly and forgot to take a dose take it as soon as you remember. 
                 Skip the missed dose if it is almost time for the next intake. Resume your regular schedule. 
                 Do not compensate the missed dose by taking an extra one.`,

    overdose: `In case of loss of appetite, ringing in ears, severe weakness, dizziness, confusion, 
               lightheadedness, or fainting, seek for immediate doctor's attention.`,

    storage: `Keep away from children at room temperature in a dry and dark place.`,

    disclaimer: `We provide only general information about medications which does not cover all directions, 
                 possible drug integrations, or precautions. Information at the site cannot be used for self-treatment 
                 and self-diagnosis. Any specific instructions for a particular patient should be agreed with your 
                 health care adviser or doctor in charge of the case. We disclaim reliability of this information 
                 and mistakes it could contain. We are not responsible for any direct, indirect, special or other 
                 indirect damage as a result of any use of the information on this site and also for consequences 
                 of self-treatment.`,
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 overflow-hidden">
          <div className="row mt-4">
            <div className="col-lg-2">
              <img
                width="160"
                height="120"
                src={product.image}
                alt={product.name}
                title={product.name}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-1">
              <div className="zoomer">
                <img
                  className="blister-mini img-fluid"
                  alt=""
                  src="https://safe-easy-online.com/content/pack/45xAuto/lasix.jpg"
                />
                <img
                  alt=""
                  src="./images/decor/zoomer_en.png"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="pill-info">
                <h2 className="title-pill h2 font-weight-bold text-primary">
                  {product.name}{" "}
                  <span className="text-secondary">(Furosemide)</span>
                </h2>
                <p className="text-muted">{product.description}</p>
              </div>
            </div>
          </div>

          <div className="row mt-1 mb-4">
            <div className="col-12">
              <span className="title-doses">Select Doses:</span>
              {Object.keys(product.doses).map((category) => (
                <button
                  key={category}
                  className={`btn btn-link text-black text-decoration-none ${
                    selectedCategory === category
                      ? "active btn-secondary text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <hr />

          <div id="dose_items" className="row mt-2">
            <div className="col-12 d-flex justify-content-center">
              <table className="table gap-5">
                <tbody>
                  {product.doses[selectedCategory].map((dose, index) => (
                    <tr
                      key={index}
                      className={selectedDose === index ? "active" : ""}
                    >
                      <td className="font-weight-bold">{dose.mg}</td>
                      <td>{dose.pills}</td>
                      <td>
                        <img
                          width="100"
                          height="100"
                          src={product.image}
                          alt={product.name}
                          title={product.name}
                          className="img-fluid"
                        />
                      </td>
                      <td>
                        <span className="product-old-price text-danger font-italic">
                          <del>{dose.oldPrice}</del>
                        </span>
                        <br />
                        <span className="dose-dose h4 text-black">
                          {dose.price}
                        </span>
                        <br />
                        <span className="dose-type text-sm text-secondary">
                          {dose.discount}
                        </span>
                      </td>
                      <td>
                        <div className="our-bonus">
                          {Array.isArray(dose.bonus) ? (
                            dose.bonus.map((point, i) => (
                              <p key={i} className="text-success">
                                {i >= 0 ? "+" : ""} {point}
                              </p>
                            ))
                          ) : (
                            <p className="text-success">+ {dose.bonus}</p>
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
                            Number(dose.oldPrice.replace("$", "")) -
                            Number(dose.price.replace("$", ""))
                          ).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

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

          <div className="row mt-3">
            <div className="col-lg-12 d-flex justify-content-center">
              <table className="table gap-5">
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

          <div className="col-lg-10 overflow-hidden">
            {/* New section with product description and testimonials */}
            <div className="row mt-3">
              <div className="col-lg-12">
                <div className="product-descr">
                  {/* Navigation Tabs */}
                  <ul className="nav nav-tabs">
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
                        {Object.entries(productDetails).map(
                          ([sectionTitle, sectionContent]) => (
                            <div key={sectionTitle} className="mb-4">
                              <p className="h6">
                                <strong>
                                  {capitalizeFirstLetter(sectionTitle)}
                                </strong>
                              </p>
                              <p>{sectionContent}</p>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* Testimonials content */}
                    {!showDescription && (
                      <div id="c_p2" className="tab-pane fade show active">
                        <div className="review-block">
                          {testimonials.map((testimonial, index) => (
                            <div key={index} className="review-item card mb-4">
                              <div className="card-body">
                                <div className="review-header d-flex justify-content-between align-items-center mb-3">
                                  <div>
                                    <span className="review-name h5 text-primary">
                                      {testimonial.name}
                                    </span>
                                    <span className="review-date text-muted">
                                      ({testimonial.date})
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="review-text mb-3"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  {testimonial.text}
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
                                      value={testimonial.stars}
                                      precision={0.5}
                                      readOnly
                                    />
                                  </Box>
                                  <span className="review-star-count h6 ml-2">
                                    {testimonial.stars} stars out of 5
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
    </div>
  );
};

export default ProductDetails;