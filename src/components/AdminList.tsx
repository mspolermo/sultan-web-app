import React, {FC, useEffect, useMemo, useState} from "react";
import { IGoods } from "../types/types";
import AdminItem from "./AdminItem";
import GoodsItem from "./GoodsItem";

interface AdminListProps {
    products: IGoods[];
}

const AdminList: FC<AdminListProps> = ({products}) => {
    return (
        <div>
            <h1>Список товаров:</h1>
            {products.map( product => 
              <AdminItem
                key={product.id} 
                product={product}
                />
            )}
        </div>
    )
}

export default AdminList