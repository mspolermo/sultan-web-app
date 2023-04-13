import React, {FC, useEffect, useMemo, useState} from "react";
import AddNewProduct from "../components/AddNewProduct";
import AdminList from "../components/AdminList";
import { IGoods } from "../types/types";

interface AdminPageProps {
    onGoodsUpdate : (products :IGoods []) => void;
    JSONfile: IGoods [];
}

const AdminPage: FC<AdminPageProps> =({onGoodsUpdate, JSONfile}) => {

    const [products, setProducts] = useState(JSONfile);

    useEffect( () => {
        if (products) {
            onGoodsUpdate?.(products);
        } 
    }, [products]);

    const createProduct = (newProduct:IGoods) => {
        if (newProduct !== undefined) {
            if (newProduct.title == '') {
                alert('Заполните поле Title');
            } else if( newProduct.image == '') {
                alert('Вставте ссылку в поле ImageURL');
            } else if( newProduct.sizeType == '') {
                alert('Выберите тип размера товара');
            } else if( newProduct.size == 0) {
                alert('Выберите число в поле Размер');
            } else if( newProduct.barcode == 0) {
                alert('Выберите число в поле Штрихкод');
            } else if (newProduct.producer == '') {
                alert('Заполните поле Производитель');
            } else if (newProduct.brand == '') {
                alert('Заполните поле Бренд');
            } else if (newProduct.desription == '') {
                alert('Заполните поле Описание');
            } else if( newProduct.price == 0) {
                alert('Выберите число в поле Цена');
            } else if( newProduct.careType.length == 1) {
                alert('Укажите минимум 1 тип товара');
            } else {
                setProducts([...products, newProduct]);
            };
        };
    };


    const [removeThing, setRemoveThing] = useState<undefined | IGoods>();
    useEffect(() => {
        let index = products.findIndex ( (order:any) => order.id === removeThing?.id);
        if (index!== -1) {
            products.splice(index, 1);
            setProducts([...products]);
        };
    }, [removeThing]);


    const [editThing, setEditThing] = useState<undefined | IGoods> ();
    useEffect(() => {
        if (editThing !==undefined) {
            let editProduct: IGoods = editThing;
            let index = products.findIndex ( (order:any) => order.id === editProduct.id);
            if (index!== -1) {
                products.splice(index, 1);
                setProducts([editProduct, ...products]);
            };
        };
    }, [editThing]);

    useEffect(() => {
        const rememberMe = localStorage.getItem('storageProducts');
        if (typeof rememberMe === 'string') {
            const parse = JSON.parse(rememberMe);
            setProducts(parse);
        };
    }, []);

    useEffect(() => {
        setTimeout(function() {
           localStorage.setItem('storageProducts', JSON.stringify(products)); 
        }, 50);   
    }, [products]);

    const handleFormJson = () => {
        setProducts(JSONfile);
    };

    if (products.length == 0) {
        setProducts(JSONfile);
    };

    return (
        <div data-testid="admin-page" className="container">
            <h2 className="admin-page__head">Страница администрирования сайта "Султан"</h2>
            <div className="admin-page__block">
                <AddNewProduct create={createProduct}/>
                <button className="admin-page__btn" onClick={handleFormJson}>Загрузить список из JSON-файла</button>
            </div>
            <AdminList products={products} onRemove={setRemoveThing} onEdit={setEditThing}/>
        </div>
    );
};

export default AdminPage;

