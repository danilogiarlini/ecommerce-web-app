import { selectCartList, selectTotalCartCost, useCart } from "@/services/cart";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderForm } from "@/model/order-form";
import { useOrdersService } from "@/services/orders";
import { ClientResponseError } from "pocketbase";

export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function useCheckout() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  const [dirty, setDirty] = useState(false);

  const totalCartCost = useCart(selectTotalCartCost);
  const clearCart = useCart((state) => state.clearCart);

  const { state, addOrder } = useOrdersService()
  
  const order = useCart(selectCartList);

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setUser((state) => ({ ...state, [name]: value }));
    setDirty(true);
  }

  function sendOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const orderInfo: OrderForm = {
      user,
      order,
      status: "pending",
      total: totalCartCost,
    };
    
    addOrder(orderInfo)
      .then((res) => {
        if (!(res instanceof ClientResponseError)) {
          clearCart();
          navigate('/thankyou');
        }
      })

  }

  const isNameValid = user.name.length;
  const isEmailValid = user.email.match(EMAIL_REGEX);
  const isValid = isNameValid && isEmailValid;

  return {
    validators: {
      isNameValid,
      isEmailValid,
      isValid,
    },
    actions: {
      sendOrder,
      changeHandler,
    },
    user,
    dirty,
    totalCartCost,
    error: state.error
  };
}