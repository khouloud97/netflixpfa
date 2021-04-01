import React, { useEffect } from "react";
import { useState } from "react";
import db from "../firebase";
import "./PlansScreens.css";
export function Plansscreens() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();

          priceSnap.docChanges.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  return (
    <div className="planScreens">
      {Object.entries(products).map(([productID, productData]) => {
        return (
          <div className="planScreens_info">
            <h5> Premum </h5>
            <h5>{productData.description}</h5>
          </div>
        );
      })}
    </div>
  );
}
export default Plansscreens;
