import React, {FC, useEffect, useMemo, useState} from "react";
import { IGoods } from "../types/types";
import AdminItem from "./AdminItem";
import GoodsItem from "./GoodsItem";

interface AdminListProps {
    products: IGoods[];
    onRemove? : (removeItem :IGoods) => void;
    onEdit? : (removeItem :any) => void;
}

const AdminList: FC<AdminListProps> = ({products, onRemove, onEdit}) => {

    const [removeThing, setRemoveThing] = useState<undefined | IGoods>();
    useEffect( () => {
        if (removeThing) {
            onRemove?.(removeThing) 
        }
    }, [removeThing])

    const [editThing, setEditThing] = useState<undefined | IGoods> ();


    useEffect (() => {
        onEdit?.(editThing);
    }, [editThing])
    

    return (
        <div>
            <h1>Список товаров:</h1>
            {products.map( product => 
              <AdminItem
                key={product.id} 
                product={product}
                onRemove={setRemoveThing}
                onEdit={setEditThing}
                />
            )}
        </div>
    )
}

export default AdminList