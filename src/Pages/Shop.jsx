import React, {
  Fragment,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import { FaShoppingCart } from "react-icons/fa";
import Nav from "../Nav";
import "../style.css";
import axios from "axios";
import CardContext from "./CardProvider";

const Shop = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const textRef = useRef();
  const addCard = useContext(CardContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((res) => {
      const data = res.data;
      setdata(data);
      setloader(false);
    });
  }, []);

  const changetext = () => {
    if (textRef.current.classList.contains("textcard")) {
      textRef.current.classList.remove("textcard");
    } else {
      textRef.current.classList.add("textcard");
    }
    console.log(textRef);
    console.log("hello text");
  };

  return (
    <>
      <Nav />
      <Fragment>
        {loader ? (
          <div className="loadbox">
            <div
              class="spinner-border text-warning d-flex justify-content-center load"
              role="status"
            ></div>
          </div>
        ) : (
          <>
            <div className="cardcontainer col-md-8">
              {data.map((d) => (
                <div className="card  cardbox " key={d.id}>
                  <img src={d.image} className="card-img-top image" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title cardtitle">{d.title}</h4>
                    <p
                      className="card-text textcard "
                      ref={textRef}
                      onClick={changetext}
                    >
                      {d.description}
                    </p>
                    <h4>{d.price}</h4>
                    <div className="mt-3 bg-danger ">
                      <button
                        className="btn btn-primary  buybtn"
                        onClick={() => {
                          addCard.addtoCard(d);
                        }}
                      >
                        Buy Now <FaShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Fragment>
    </>
  );
};

export default Shop;
