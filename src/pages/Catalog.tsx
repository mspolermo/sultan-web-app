import React, {FC, useMemo, useState} from "react";
import GoodsList from '../components/GoodsList';
import goods from '../goods/goods.json'
import '../App.css'
import MySelect from "../components/UI/select/MySelect";
import FilterButton from "../components/UI/button/FilterButton";
import { IGoods } from "../types/types";
import MyInput from "../components/UI/input/MyInput";
import CheckboxList from "../components/CheckboxList";


const Catalog: FC = () => {

    const [products, setProducts] = useState(goods)
    const [selectedSort, setSelectedSort] = useState('')
    const sortGoods = (sort:string) => {
        setSelectedSort(sort);
    }
    const sortedGoods:any = useMemo( () => {
        if (!selectedSort) {
            return products
        } 
        let typeOfSort = (selectedSort.split('-'))
        if ((typeOfSort[0] == 'title') && (typeOfSort.length == 1)) {
            return ([...products].sort((a, b) => a[typeOfSort[0] as keyof typeof a].toString().localeCompare(b[typeOfSort[0] as keyof typeof b].toString())));
        } else if ((typeOfSort[0] == 'title') && (typeOfSort.length == 2)) {
            return  ([...products].sort((a, b) => a[typeOfSort[0] as keyof typeof a].toString().localeCompare(b[typeOfSort[0] as keyof typeof b].toString())).reverse())
        } else if ((typeOfSort[0] == 'price') && (typeOfSort.length == 1)) {
            return [...products].sort((a, b) => +a[typeOfSort[0] as keyof typeof a] - +b[typeOfSort[0] as keyof typeof b])
        } else if ((typeOfSort[0] == 'price') && (typeOfSort.length == 2)) {
            return [...products].sort((a, b) =>  +b[typeOfSort[0] as keyof typeof b] - +a[typeOfSort[0] as keyof typeof a])
        }
    }, [selectedSort, products])


    const [selectedFilter, setSelectedFilter] = useState()
    const filerGoods = (filter: any) => {
        setSelectedFilter(filter)
    }
    const sortedAndFiltredGoods:any = useMemo( () => {
        if(!selectedFilter) {
            return sortedGoods
        }
        let typeOfFilter: {careType: string} = selectedFilter;
        let typeOfFilterValue = typeOfFilter.careType
        return sortedGoods.filter( (product:IGoods) => product.careType.includes(typeOfFilterValue)
        )
    }, [selectedFilter, sortedGoods])


    const [searchProdicerQuery, setSearchProdicerQuery] = useState('')
    const sortedFiltreadSearchedGoods = useMemo(() => {
        return sortedAndFiltredGoods.filter( (product:IGoods) => product.producer.toLowerCase().includes(searchProdicerQuery.toLowerCase())) 
      }, [searchProdicerQuery, sortedAndFiltredGoods])
    
      const [minPrice, setMinPrice] = useState('')
      const sortedFiltreadSearchedMinGoods = useMemo(() => {
        return sortedFiltreadSearchedGoods.filter( (product:IGoods) => product.price > +minPrice) 
      }, [minPrice, sortedFiltreadSearchedGoods])

      const [maxPrice, setMaxPrice] = useState('')
      const sortedFiltreadSearchedPriceGoods = useMemo(() => {
        if (maxPrice !== '') {
            return sortedFiltreadSearchedMinGoods.filter( (product:IGoods) => product.price < +maxPrice)
        }
        return sortedFiltreadSearchedMinGoods
      }, [maxPrice, sortedFiltreadSearchedMinGoods])

    return (
        <div>
            
            <div className="header">HEADER OF CATALOG PAGE</div>
            <div> 
                <h4>Подбор по параметрам</h4>
                <p>Цена</p>
                <MyInput 
                    value={minPrice}
                    onChange={setMinPrice}
                    placeholder = "0"
                />
                    <MyInput 
                    value={maxPrice}
                    onChange={setMaxPrice}
                    placeholder = "10 000"
                />
                <h5>Производитель</h5> 
                <MyInput 
                    value={searchProdicerQuery}
                    onChange={setSearchProdicerQuery}
                    placeholder = "Поиск"
                />
                <CheckboxList />              
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <h3>КОСМЕТИКА И ГИГИЕНА</h3>
                <div>
                    <span>Сортировка: </span>
                    <MySelect
                        value={selectedSort}
                        onChange={sortGoods}
                        defaultValue='Название'
                        options={[
                            
                            {value: 'price', name: 'Цена: По возрастанию'},
                            {value: 'price-down', name: 'Цена: По убыванию'},
                            {value: 'title', name: 'Название: По возрастанию'},
                            {value: 'title-down', name: 'Название: По убыванию'}
                        ]}
                    />
                </div> 

            </div>
            <div> 
                <FilterButton value={selectedFilter} careType = 'body'name = 'Уход за телом'onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'hands' name = 'Уход за руками' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'legs' name = 'Уход за ногами' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'face' name = 'Уход за лицом' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'hair' name = 'Уход за волосами' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'sun' name = 'Средства для загара' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'shaving' name = 'Средства для бритья' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'present' name = 'Подарочные наборы' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'hygienic' name = 'Гигиеническая продукция' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'mouth' name = 'Гигиена полости рта' onClick={filerGoods} />
                <FilterButton value={selectedFilter} careType = 'paper' name = 'Бумажная продукция' onClick={filerGoods} />
            </div>
            <GoodsList goods={sortedFiltreadSearchedPriceGoods} />
            <div className="footer">FOOTER</div>
      </div>
    );
};

export default Catalog;