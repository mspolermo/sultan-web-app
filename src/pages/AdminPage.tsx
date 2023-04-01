import React, {FC, useState} from "react";
import AddNewProduct from "../components/AddNewProduct";
import AdminList from "../components/AdminList";
import { IGoods } from "../types/types";

const AdminPage: FC =() => {

    const [products, setProducts] = useState([
        {
            "id": 1,
            "image": "https://lenta.servicecdn.ru/globalassets/1/-/28/652/72/260721_2.png",
            "title": "HEAD&SHOULDERS ",
            "sizeType": "volume",
            "size": 400,
            "barcode": 4604049097548,
            "producer": "Проктер энд Гэмбл",
            "brand": "HEAD&SHOULDERS",
            "desription": "Основной уход 2в1, Шампунь-бальзам против перхоти",
            "price": 448.76,
            "careType": [
                "requerType",
                "body", 
                "hair"
            ]
        }
    ])
    console.log(products)


    const createProduct = (newProduct:IGoods) => {
        if (newProduct !== undefined) {
        if (newProduct.title == '') {
            console.log ('Заполните поле Title')
        } else if( newProduct.image == '') {
            console.log ('Вставте ссылку в поле ImageURL')
        } else if( newProduct.sizeType == '') {
            console.log ('Выберите тип размера')
        } else if( newProduct.size == 0) {
            console.log ('Выберите число в поле Размер')
        } else if( newProduct.size == 0) {
            console.log ('Выберите число в поле Штрихкод')
        } else if (newProduct.producer == '') {
            console.log ('Заполните поле Производитель')
        } else if (newProduct.brand == '') {
            console.log ('Заполните поле Бренд')
        } else if (newProduct.desription == '') {
            console.log ('Заполните поле Описание')
        } else if( newProduct.price == 0) {
            console.log ('Выберите число в поле Цена')
        } else if( newProduct.careType.length == 1) {
            console.log ('Укажите минимум 1 тип товара')
        } else {
            setProducts([...products, newProduct])
        }
    }
    }



    return (
        <div>
            <AddNewProduct create={createProduct}/>
            <AdminList products={products}/>
        </div>
    )
}

export default AdminPage;

