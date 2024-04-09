import React, { useEffect, useState } from "react";
import Layout from "../Layout";

const CheckoutPage = () => {
  const [customerInfo, setCustomerInfo] = useState({
    phone: "",
    email: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
  });
  const [customerInfoErrors, setCustomerInfoErrors] = useState({});
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zip: "",
  });
  const [shippingAddressErrors, setShippingAddressErrors] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
    coupon: "",
  });
  const [paymentInfoErrors, setPaymentInfoErrors] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Fetch cart product data from local storage
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      setCartProducts(cartData);
    }
  }, []);

  console.log(cartProducts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerErrors = validateCustomerInfo();
    const shippingErrors = validateShippingAddress();
    const paymentErrors = validatePaymentInfo();

    if (
      Object.keys(customerErrors).length === 0 &&
      Object.keys(shippingErrors).length === 0 &&
      Object.keys(paymentErrors).length === 0
    ) {
      console.log("Form submitted successfully");

      // Construct JSON object
      const formData = {
        customerInfo,
        shippingAddress,
        paymentInfo,
        cartProducts,
      };

      // Save JSON object to local storage
      localStorage.setItem("order-details", JSON.stringify(formData));

      // Add submission logic here
    } else {
      setCustomerInfoErrors(customerErrors);
      setShippingAddressErrors(shippingErrors);
      setPaymentInfoErrors(paymentErrors);
    }
  };

  const validateCustomerInfo = () => {
    let errors = {};
    if (!customerInfo.phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!customerInfo.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
      errors.email = "Email is invalid";
    }
    if (!customerInfo.birthYear.trim()) {
      errors.birthYear = "Year is required";
    }
    if (!customerInfo.birthMonth.trim()) {
      errors.birthMonth = "Month is required";
    }
    if (!customerInfo.birthDay.trim()) {
      errors.birthDay = "Day is required";
    }
    return errors;
  };

  const validateShippingAddress = () => {
    let errors = {};
    if (!shippingAddress.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!shippingAddress.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!shippingAddress.address.trim()) {
      errors.address = "Address is required";
    }
    if (!shippingAddress.city.trim()) {
      errors.city = "City is required";
    }
    if (!shippingAddress.country.trim()) {
      errors.country = "Country is required";
    }
    if (!shippingAddress.state.trim()) {
      errors.state = "State is required";
    }
    if (!shippingAddress.zip.trim()) {
      errors.zip = "ZIP is required";
    }
    return errors;
  };

  const validatePaymentInfo = () => {
    let errors = {};
    if (!paymentInfo.cardNumber.trim()) {
      errors.cardNumber = "Card Number is required";
    }
    if (!paymentInfo.expMonth.trim()) {
      errors.expMonth = "Expiration Month is required";
    }
    if (!paymentInfo.expYear.trim()) {
      errors.expYear = "Expiration Year is required";
    }
    if (!paymentInfo.cvc.trim()) {
      errors.cvc = "CVC is required";
    }
    return errors;
  };

  const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => {
      return (
        total +
        parseFloat(product.originalPrice?.replace("$", "") || 0) *
          product.nextQuantity
      );
    }, 0);
  };

  return (
    <Layout>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="m-6">
          <h2 className="text-lg font-bold mb-3">Contact Info</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
                value={customerInfo.phone}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, phone: e.target.value })
                }
              />
              {customerInfoErrors.phone && (
                <div className="text-red-500">{customerInfoErrors.phone}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={customerInfo.email}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, email: e.target.value })
                }
              />
              {customerInfoErrors.email && (
                <div className="text-red-500">{customerInfoErrors.email}</div>
              )}
            </div>
            <div className="row mb-4">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Year"
                  value={customerInfo.birthYear}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      birthYear: e.target.value,
                    })
                  }
                />
                {customerInfoErrors.birthYear && (
                  <div className="text-red-500">
                    {customerInfoErrors.birthYear}
                  </div>
                )}
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Month"
                  value={customerInfo.birthMonth}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      birthMonth: e.target.value,
                    })
                  }
                />
                {customerInfoErrors.birthMonth && (
                  <div className="text-red-500">
                    {customerInfoErrors.birthMonth}
                  </div>
                )}
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Day"
                  value={customerInfo.birthDay}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      birthDay: e.target.value,
                    })
                  }
                />
                {customerInfoErrors.birthDay && (
                  <div className="text-red-500">
                    {customerInfoErrors.birthDay}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="m-6">
          <h2 className="text-lg font-bold mb-3">Shipping Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  value={shippingAddress.firstName}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      firstName: e.target.value,
                    })
                  }
                />
                {shippingAddressErrors.firstName && (
                  <div className="text-red-500">
                    {shippingAddressErrors.firstName}
                  </div>
                )}
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  value={shippingAddress.lastName}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      lastName: e.target.value,
                    })
                  }
                />
                {shippingAddressErrors.lastName && (
                  <div className="text-red-500">
                    {shippingAddressErrors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Address"
                value={shippingAddress.address}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  })
                }
              />
              {shippingAddressErrors.address && (
                <div className="text-red-500">
                  {shippingAddressErrors.address}
                </div>
              )}
            </div>
            <div className="row mb-4">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="City"
                  value={shippingAddress.city}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      city: e.target.value,
                    })
                  }
                />
                {shippingAddressErrors.city && (
                  <div className="text-red-500">
                    {shippingAddressErrors.city}
                  </div>
                )}
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Country"
                  value={shippingAddress.country}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      country: e.target.value,
                    })
                  }
                />
                {shippingAddressErrors.country && (
                  <div className="text-red-500">
                    {shippingAddressErrors.country}
                  </div>
                )}
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="State"
                  value={shippingAddress.state}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      state: e.target.value,
                    })
                  }
                />
                {shippingAddressErrors.state && (
                  <div className="text-red-500">
                    {shippingAddressErrors.state}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="ZIP"
                value={shippingAddress.zip}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    zip: e.target.value,
                  })
                }
              />
              {shippingAddressErrors.zip && (
                <div className="text-red-500">{shippingAddressErrors.zip}</div>
              )}
            </div>
          </form>
        </div>

        <div className="m-6">
          <h2 className="text-lg font-bold mb-3">Payment Info</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Card Number"
                value={paymentInfo.cardNumber}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
                }
              />
              {paymentInfoErrors.cardNumber && (
                <div className="text-red-500">
                  {paymentInfoErrors.cardNumber}
                </div>
              )}
            </div>
            <div className="row mb-4">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Expiration Month"
                  value={paymentInfo.expMonth}
                  onChange={(e) =>
                    setPaymentInfo({ ...paymentInfo, expMonth: e.target.value })
                  }
                />
                {paymentInfoErrors.expMonth && (
                  <div className="text-red-500">
                    {paymentInfoErrors.expMonth}
                  </div>
                )}
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Expiration Year"
                  value={paymentInfo.expYear}
                  onChange={(e) =>
                    setPaymentInfo({ ...paymentInfo, expYear: e.target.value })
                  }
                />
                {paymentInfoErrors.expYear && (
                  <div className="text-red-500">
                    {paymentInfoErrors.expYear}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="CVC"
                value={paymentInfo.cvc}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, cvc: e.target.value })
                }
              />
              {paymentInfoErrors.cvc && (
                <div className="text-red-500">{paymentInfoErrors.cvc}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Coupon Code"
                value={paymentInfo.coupon}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, coupon: e.target.value })
                }
              />
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
  {cartProducts.length === 0 ? (
    <h2>Your cart is empty</h2>
  ) : (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-3">Cart Products</h2>
      <div className="table-responsive w-75 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>NextQuantity</th>
              <th>Original Price</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={product.imageURL} alt={product.Name} width={50} />
                </td>
                <td>
                  {product.Name}
                  <p>
                    {product.Mg}X{product.noOfPacks}
                  </p>
                </td>
                <td>{product.nextQuantity}</td>
                <td>
                  $
                  {(
                    parseFloat(product.originalPrice?.replace("$", "") || 0) *
                    product.nextQuantity
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <h4>Total Price: ${calculateTotalPrice(cartProducts).toFixed(2)}</h4>
      </div>
    </div>
  )}
  <button
    type="submit"
    onClick={handleSubmit}
    className="btn btn-primary bg-success inline-block mt-4"
  >
    Place Order
  </button>
</div>

    </div></Layout>
  );
};

export default CheckoutPage;
