import React, {useCallback, useState} from "react";
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";

import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";

import {calcTotalPrice} from "../utils";

import './cart-block.css';


export const CartBlock = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const history = useHistory();

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        history.push('./order');
    }, [history]);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ?
                <span className="cart-block__total-price">{totalPrice} руб. </span>
                : null }
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    );
};