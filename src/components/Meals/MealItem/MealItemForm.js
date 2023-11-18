import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useContext } from "react";
import CartCntx from "../../../store/cart-context";

export default function MealItemForm(props) {
  const cartcntx = useContext(CartCntx);

  const addItemToCart = (event) => {
    event.preventDefault();

    const quantity = document.getElementById("amount_" + props.id).value;

    cartcntx.addItem({ ...props.item, quantity: quantity });
    // console.log("props.item = and quantity", props.item, quantity);
  };
  // console.log("After addItemToCart", cartcntx);

  return (
    <form className={classes.form}>
      {/* {console.log("Inside render", cartcntx.items)} */}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
}
