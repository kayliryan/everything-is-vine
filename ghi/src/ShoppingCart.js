import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCartItem,
  updateQuantityFromShoppingCart,
} from './store/cartReducer';
import { useState, useEffect } from 'react';
import { useAuthContext } from './auth';
import './assets/css/bootstrap2.css';
import './assets/css/responsive.css';
import './assets/css/ui.css';

function ShoppingCart() {
  const { token } = useAuthContext();
  let [discountRate, setDiscountRate] = React.useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  const [cust_quantity, setCustQuantity] = useState(-1);
  const [index_state, setIndex] = useState(-1);
  const [firstRender, hasRendered] = useState(true);
  const dispatch = useDispatch();
/*eslint-disable */
  let [loggedIn, setLoggedIn] = React.useState(false);
/*eslint-enable */

  async function deleteItem(e, index) {
    dispatch(deleteCartItem({ index: index }));
  }

  async function checkAndSetQuantity(e, index) {
    if (parseInt(e.target.value) < 1 || isNaN(parseInt(e.target.value))) {
      e.target.value = 1;
    }
    if (parseInt(e.target.value) > parseInt(e.target.max)) {
      e.target.value = e.target.max;
    }
    setCustQuantity(parseInt(e.target.value));
    setIndex(index);
  }

  useEffect(() => {
    if (firstRender === true) {
      hasRendered(false);
    } else {
      let data = { cust_quantity: cust_quantity, index: index_state };
      dispatch(updateQuantityFromShoppingCart(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cust_quantity, index_state]);

  const subTotalSum = cartItems.reduce(
    (total, currentItem) =>
      (total = total + currentItem.price * currentItem.cust_quantity),
    0
  );
  let discount = subTotalSum * discountRate;
  let total = subTotalSum - discount;

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      setDiscountRate(0.1);
    }
  }, [token]);

  return (
    <div className="App">
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="shopping-cart-row align-items-center"></div>
          </div>
        </section>
      </header>
      <br />

      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Shopping cart</h2>
        </div>
      </section>

      <section className="section-content padding-y">
        <div className="container">
          <div className="shopping-cart-row">
            <main className="col-md-9">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col" width={180}>
                        Product
                      </th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={140}>
                        Price
                      </th>
                      <th scope="col" className="text-right" width={140}>
                        {' '}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((cartItem, index) => {
                      return (
                        <tr key={cartItem.id}>
                          <td>
                            <figure className="itemside">
                              <div className="aside">
                                <img
                                  alt=""
                                  src={cartItem.picture_url}
                                  height={200}
                                  className="img-sml"
                                />
                              </div>
                              <figcaption className="info">
                                <a
                                  href={`wines/${cartItem.id}`}
                                  className="title text-dark"
                                >
                                  {cartItem.year} {cartItem.brand}{' '}
                                  {cartItem.varietal}
                                </a>
                                <p className="text-muted small">
                                  Region: {cartItem.region} <br /> ABV:{' '}
                                  {cartItem.abv}%
                                </p>
                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            {' '}
                            <input
                              onChange={(e) => checkAndSetQuantity(e, index)}
                              type="text"
                              id={index}
                              name="quantity"
                              className="form-control"
                              value={cartItem.cust_quantity}
                              min="1"
                              max={cartItem.quantity}
                            />{' '}
                          </td>
                          <td>
                            <div className="price-wrap">
                              <br />
                              <var className="price">
                                ${cartItem.cust_quantity * cartItem.price}
                              </var>
                              <br />
                              <small className="text-muted">
                                {' '}
                                $ {cartItem.price} each{' '}
                              </small>
                            </div>
                          </td>
                          <td className="text-right">
                            <br />
                            <button
                              onClick={(e) => deleteItem(e, index)}
                              type="button"
                              className="btn btn-light"
                            >
                              <span className="bi bi-trash"></span> Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="card-body border-top">
                  <a
                    href="shoppingcart/checkout"
                    className="btn btn-primary float-md-right"
                  >
                    {' '}
                    Make Purchase <i className="fa fa-chevron-right" />{' '}
                  </a>
                  <a href="wines" className="btn btn-primary">
                    {' '}
                    <i className="fa fa-chevron-left" /> Continue shopping{' '}
                  </a>
                </div>
              </div>
              <div className="alert alert-success mt-3">
                <p className="icontext">
                  Sign up and become a member to receive 10% off purchase!
                </p>
              </div>
            </main>
            <aside className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Have a coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="DISCOUNT"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Subtotal</dt>
                    <dd className="text-right">$ {subTotalSum} </dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">$ {discount}</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right  h5">
                      $ <strong>{total}</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/payments.png`}
                      alt=""
                      height={26}
                    />
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShoppingCart;
