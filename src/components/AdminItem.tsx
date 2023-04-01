import React, {FC, useState} from "react";
import { IGoods } from "../types/types";

interface AdminItemProps {
    product: IGoods;
};

const AdminItem: FC<AdminItemProps> = ({product}) => {
    return (
        <div style={{display: 'flex', margin: '10px 10px', padding: '0 10px', border: '2px solid black'}}>
            <div>
                <p>ID#{product.id}. Название: {product.title}</p>
                <p>Описание: {product.desription}</p>
                <p>Прооизводитель: {product.producer}. Бренд: {product.brand}</p>
                <p>Тип размера: {product.sizeType}. Размер: {product.size}</p>
                <p>Штрихкод: {product.barcode}. Цена: {product.price} ₸</p>
            </div>
            <div style={{width: 200, borderLeft: ' 2px solid black', borderRight: ' 2px solid black', padding: '0 10px'}}>
                <p>Тип ухода:</p>
                {product.careType.map( type => 
                    <span key={type}>{type}, </span>)}
            </div>
            <div style={{borderRight: ' 2px solid black'}}>
                <img src={product.image} alt={product.image} height={150}/>
            </div>
            <div>
                <button>Удалить</button>
                <button>Редактировать</button>
            </div>
        </div>
    )    
}

export default AdminItem