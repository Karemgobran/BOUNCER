import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import axios from "axios";
import "./Cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);
  const shippingFee = 20;

  useEffect(() => {
    async function fetchCart() {
      try {
        const userId = localStorage.getItem("userId");
        const res = await axios.get(`https://fakestoreapi.com/carts/${userId}`);

        if (res.data && res.data.products && res.data.products.length > 0) {
          const products = res.data.products;
          const productRequests = products.map((item) =>
            axios.get(`https://fakestoreapi.com/products/${item.productId}`)
          );

          const productResponses = await Promise.all(productRequests);
          const detailedProducts = products.map((item, index) => {
            const productData = productResponses[index].data;
            return {
              id: item.productId,
              name: productData.title,
              price: productData.price,
              quantity: item.quantity,
              image: productData.image,
            };
          });

          setCartItems(detailedProducts); // تحديث السلة هنا
        }
      } catch (err) {
        console.error("Error fetching cart data:", err);
      }
    }

    fetchCart(); // يتم جلب السلة عند تحميل الصفحة فقط
  }, []); // إزالة cartItems من الاعتماد هنا

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.info("Item removed from cart");
  };

  const applyVoucher = () => {
    if (voucher === "karem") {
      setDiscount(10);
      toast.success("Voucher applied successfully!");
    } else {
      toast.error("Invalid voucher code");
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingFee - discount;

  return (
    <div className="container my-5 p-4 shadow-lg rounded bg-light">
      <h2 className="mb-4 text-center">Shopping Cart</h2>
      <table className="table table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="d-flex align-items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle border"
                  style={{ width: "70px", height: "70px" }}
                />
                {item.name}
              </td>
              <td className="fw-bold">${item.price.toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="mx-2 fw-bold">{item.quantity}</span>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </td>
              <td className="fw-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center p-3 border-top">
        <div className="w-50">
          <input
            type="text"
            className="form-control d-inline w-75"
            placeholder="Enter voucher code"
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
          />
          <button className="btn btn-success ms-2" onClick={applyVoucher}>
            Redeem
          </button>
        </div>

        <div className="text-end">
          <p className="fw-bold">
            <span>Subtotal:</span> ${subtotal.toFixed(2)}
          </p>
          <p className="fw-bold">
            <span>Shipping fee:</span> ${shippingFee}
          </p>
          <p className="fw-bold">
            <span>Coupon:</span> {discount > 0 ? `-$${discount}` : "No"}
          </p>
          <h4 className="fw-bold">
            <span>TOTAL:</span> ${total.toFixed(2)}
          </h4>
          <button className="btn btn-primary btn-lg mt-3">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
