import { useEffect, useState } from "react";
import "./singleproduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface Iproduct {
  id: number;
  name: string;
  brand?: string;
  price: number;
  category?: string;
  description?: string;
}

function Productdetail() {
  // add to cart
  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let cart = localStorage.getItem("car");
    let value;
    if (cart) {
      value = JSON.parse(cart);
      value.push({
        name: product.name,
        id: product.id,
        price: product.price,
      });
      localStorage.setItem("car", JSON.stringify(value));
      toast(`${product.name} added to cart`);
    } else {
      localStorage.setItem(
        "car",
        JSON.stringify([
          {
            name: product.name,
            price: product.price,
            id: product.id,
          },
        ])
      );
      toast(`${product.name} added to cart`);
      cart = localStorage.getItem("cart");
      if (cart) {
        value = JSON.parse(cart);
      }
    }
  };

  let query = window.location.pathname;
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Iproduct>({} as Iproduct);
  const fetchproduct = async () => {
    setLoading(true);
    const data = await fetch(`http://localhost:8000${query}/`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log("an error occured", err))
      .finally(() => setLoading(false));
    setProduct(data);
    return data;
  };
  useEffect(() => {
    fetchproduct();
  }, [query]);
  return (
    <div className="p-2 m-4">
      {loading ? (
        <h1>Loading please wait ...</h1>
      ) : (
        !loading &&
        product && (
          <div>
            <div className="row top-row justify-content-center ">
              <div className="col-md-6 justify-content-center  pp">
                <div className="img-div text-center mt-2">
                  <img
                    src="https://justmac.com/images/exclusive-sale.png"
                    alt="product"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="border-div">
                  <p>11-INCH MACBOOK AIR, MACBOOK AIR</p>
                  <h3>{product.name}</h3>
                </div>
                <div>
                  <div className="d-flex justify-content-between col-9 border-div">
                    <h3 style={{ color: "blue" }}>
                      <div className="style-4">
                        <del>
                          <span className="amount strike-price">
                            was Kshs. {product.price * 1.2},<sup>99</sup>
                          </span>
                        </del>
                        <ins>
                          <span className="amount">
                            Kshs. {product.price},<sup>99</sup>
                          </span>
                        </ins>
                      </div>
                    </h3>
                    <div>
                      <button onClick={handleAddToCart}>Add to cart</button>
                    </div>
                    <ToastContainer
                      position="top-right"
                      closeButton={false}
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                  </div>
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {" "}
                    Kshs. {product.price * 1.2 - product.price} Cash discount!!
                  </p>
                </div>
                <div className="d-flex justify-content-between col-9 border-div">
                  <p>Warranty</p>
                  <p> 12 months</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center">
                <h4>Description</h4>
              </div>
              <div>
                <h5>Over view</h5>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Productdetail;
