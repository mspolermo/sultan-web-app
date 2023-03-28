import React, {FC, useState} from "react";
import GoodsList from '../components/GoodsList';
import goods from '../goods/goods.json'
import '../App.css'
import MySelect from "../components/UI/select/MySelect";
import { IGoods } from "../types/types";

const Catalog: FC = () => {

    const [selectedSort, setSelectedSort] = useState('')

    const [products, setProducts] = useState(goods)

    const sortGoods = (sort:string) => {
        setSelectedSort(sort);

        let element = [...products][0];
        let sortDirection = sort.split('-')[1];
        sort = sort.split('-')[0];

        if ((typeof element[sort as keyof typeof element] == 'string') && (sortDirection == 'down')) {
            setProducts(([...products].sort((a, b) => a[sort as keyof typeof a].toString().localeCompare(b[sort as keyof typeof b].toString()))).reverse())
        }else if (typeof element[sort as keyof typeof element] == 'string') {
            setProducts(([...products].sort((a, b) => a[sort as keyof typeof a].toString().localeCompare(b[sort as keyof typeof b].toString()))))
        }else if ((typeof element[sort as keyof typeof element] == 'number') && (sortDirection == 'down')){
        setProducts([...products].sort((a, b) =>  +b[sort as keyof typeof b] - +a[sort as keyof typeof a]))    
        }else {
            setProducts([...products].sort((a, b) => +a[sort as keyof typeof a] - +b[sort as keyof typeof b]))
        }
    }
    

    return (
        <div>
            <div className="header">HEADER OF CATALOG PAGE</div>
            <MySelect
                value={selectedSort}
                onChange={sortGoods}
                defaultValue='Сортировка'
                options={[
                    {value: 'title-up', name: 'По названию: Возрастание'},
                    {value: 'title-down', name: 'По названию: Убывание'},
                    {value: 'price-up', name: 'По цене: Возрастание'},
                    {value: 'price-down', name: 'По цене: Убывание'}
                ]}
            />


            <GoodsList goods={products} />
            <div className="footer">FOOTER</div>
      </div>
    );
};

export default Catalog;