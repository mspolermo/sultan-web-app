import React, {FC, useMemo, useState} from "react";
import FilterButton from "./UI/button/FilterButton";
import MySelect from "./UI/select/MySelect";

interface GoodsSortingProps {
    products: any;
    setProducts: any;
}

const GoodsSorting: FC<GoodsSortingProps> = ({products, setProducts}) => {

    const [selectedSort, setSelectedSort] = useState('')
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
    console.log(sortGoods)

    function getSortedGoods () {
        if(selectedSort) {
            return 
        }
        return products
    }

    

    const filterValues = ['body']
    const [selectedFilter, setSelectedFilter] = useState ('')
    const filerGoods = (filter:string) => {
        setSelectedFilter(filter)

        console.log(filter)
    }

    return (
        <div>
            <FilterButton
                value={filterValues}
                name = 'Уход за телом'
                onClick={filerGoods} 
            />
            <MySelect
                value={selectedSort}
                onChange={sortGoods}
                defaultValue='Сортировкаccc'
                options={[
                    {value: 'title-up', name: 'По названию: Возрастание'},
                    {value: 'title-down', name: 'По названию: Убывание'},
                    {value: 'price-up', name: 'По цене: Возрастание'},
                    {value: 'price-down', name: 'По цене: Убывание'}
                ]}
            />
        </div>
    );
};

export default GoodsSorting