import React, {FC, useEffect, useMemo, useState} from "react";
import { Link, Route } from "react-router-dom";
import AddNewProduct from "../components/AddNewProduct";
import AdminList from "../components/AdminList";
import { IGoods } from "../types/types";

interface AdminPageProps {
    onGoodsUpdate : (products :IGoods []) => void;
    JSONfile: IGoods []
}

const AdminPage: FC<AdminPageProps> =({onGoodsUpdate, JSONfile}) => {


    // const Breadcrumbs = ({ ...rest, match }) => (
    //     <span>
    //         <Link to={match.url || ''} className={match.isExact ? 'breadcrumb active' : 'breadcrumb'}>
    //             {match.url.substr(match.url.lastIndexOf('/')+1, match.url.length)}
    //         </Link>
    //         <Route path={`${match.url}/:path`} component={Breadcrumbs} />
    //     </span>
    //   )

    const [products, setProducts] = useState(JSONfile)
    useEffect( () => {
        if (products) {
            onGoodsUpdate?.(products)
        } 
    }, [products])



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


    const [removeThing, setRemoveThing] = useState<undefined | IGoods>();
    useMemo(() => {

        let index = products.findIndex ( (order:any) => order.id === removeThing?.id)
    
        if (index!== -1) {
            products.splice(index, 1);
          
            setProducts([...products])
        }
    }, [removeThing])


    const [editThing, setEditThing] = useState<undefined | IGoods> ()
    useMemo(() => {
            if (editThing !==undefined) {
                let editProduct: IGoods = editThing
                let index = products.findIndex ( (order:any) => order.id === editProduct.id)
                console.log(index)
                if (index!== -1) {
                    products.splice(index, 1);
                
                    setProducts([editProduct, ...products])
                    console.log('изменили')
                }
            }

    }, [editThing])


    useEffect(() => {

        const rememberMe = localStorage.getItem('storageProducts')
        if (typeof rememberMe === 'string') {
            const parse = JSON.parse(rememberMe) // ok
            setProducts(parse)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('storageProducts', JSON.stringify(products))
    }, [products])


    const handleFormJson = () => {
        setProducts(JSONfile)
    }


    if (products.length == 0) {
        setProducts(JSONfile)
    }

    return (
        <div>
            

            <button onClick={handleFormJson}>Загрузить список из JSON-файла</button>
            <AddNewProduct create={createProduct}/>
            <AdminList products={products} onRemove={setRemoveThing} onEdit={setEditThing}/>
        </div>
    )
}

export default AdminPage;

