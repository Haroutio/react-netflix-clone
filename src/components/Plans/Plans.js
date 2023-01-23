import { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./Plans.css";

function Plans() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          console.log(productDoc);
          products[productDoc.id] = productDoc.data();
        });
        setProducts(products);
      });
  }, []);

  // ! Stripe implementation would go here if I was using it

  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plans__plan">
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
