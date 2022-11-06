import React, { useContext, useState } from "react";
import Nav from "../Nav";
import CardContext from "./CardProvider";

export default function Setting() {
  let totalPrice = 0;
  let count = 0;
  const buyContext = useContext(CardContext);
  console.log(buyContext);
  var reduceBtn = (item) => {
    console.log(item);

    item.quantity -= 1;
    if (item.quantity === 0) {
      return;
    }
  };
  const addNum = (item) => {
    return (item.quantity += 1);
  };

  return (
    <>
      <Nav />

      <table className=" ">
        <thead className="text-white">
          <tr className="tableh">
            <th>No</th>
            <th>Date</th>
            <th>Time</th>
            <th>Items Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th className="buttong">Option</th>
          </tr>
        </thead>
        <tbody className="text-dark">
          <>
            {buyContext.add.map((d) => {
              totalPrice += d.price * d.quantity;

              return (
                <tr className="tabeld" key={d.id}>
                  <td>{(count += 1)}</td>
                  <td>{d.date}</td>
                  <td>{d.time}</td>
                  <td>{d.title}</td>
                  <td>{d.price}</td>
                  <td>{d.quantity}</td>
                  <td>{d.price * d.quantity}</td>

                  <td className="buttong">
                    <button
                      className="btn btn-primary  btnorder"
                      onClick={() => {
                        reduceBtn(d);
                      }}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-primary  btnorder"
                      onClick={() => addNum(d)}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </>
          {buyContext.add.length > 0 ? (
            <>
              <td colSpan="6" className="total">
                Total
              </td>
              <td className="price">{totalPrice}$</td>
            </>
          ) : null}
        </tbody>
      </table>
    </>
  );
}
