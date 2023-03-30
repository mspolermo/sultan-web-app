import React, {FC, useEffect, useMemo, useState} from "react";
import GoodsList from './GoodsList';
import '../App.css'
import MySelect from "./UI/select/MySelect";
import FilterButton from "./UI/button/FilterButton";
import { IGoods } from "../types/types";
import MyInput from "./UI/input/MyInput";
import CheckboxList from "./CheckboxList";

interface CatalogBodyProps {
    goods: IGoods[];
    productTypeValue?: string;
    onProductTypeChange?: (newType: string) => void;
};

const CatalogBody: FC<CatalogBodyProps> = ({goods, productTypeValue, onProductTypeChange}) => {
    const [products, setProducts] = useState(goods)

    //BasketLogic
    const [productType, setProductType] = useState<undefined | string>('');
    useEffect(() => {
        if (productType !==undefined) {onProductTypeChange?.(productType.toString())}
      }, [productType]);

        //Sorting logic
        
    const [selectedSort, setSelectedSort] = useState('')
    const sortGoods = (sort:string) => {
        setSelectedSort(sort);
        setPageNumber(1);
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
        setSelectedFilter(filter);
        setPageNumber(1);
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
    const queryGoods = (sort:string) => {
        setSearchProdicerQuery(sort);
        setPageNumber(1);
    }
    const sortedFiltreadSearchedGoods = useMemo(() => {
        return sortedAndFiltredGoods.filter( (product:IGoods) => product.producer.toLowerCase().includes(searchProdicerQuery.toLowerCase())) 
    }, [searchProdicerQuery, sortedAndFiltredGoods])
    
    const [minPrice, setMinPrice] = useState('')
    const minPricing = (sort:string) => {
        setMinPrice(sort);
        setPageNumber(1);
    }
    const sortedFiltreadSearchedMinGoods = useMemo(() => {
        return sortedFiltreadSearchedGoods.filter( (product:IGoods) => product.price > +minPrice) 
    }, [minPrice, sortedFiltreadSearchedGoods])

    const [maxPrice, setMaxPrice] = useState('')
    const maxPricing = (sort:string) => {
        setMaxPrice(sort);
        setPageNumber(1);
    }
    const sortedFiltreadSearchedPriceGoods = useMemo(() => {
        if (maxPrice !== '') {
            return sortedFiltreadSearchedMinGoods.filter( (product:IGoods) => product.price < +maxPrice)
        }
        return sortedFiltreadSearchedMinGoods
    }, [maxPrice, sortedFiltreadSearchedMinGoods])

    const [checkbox, setCheckbox] = useState()
    const checkboxing = (sort:any) => {
        setCheckbox(sort);
        setPageNumber(1);
    }
    const [checkboxArray, setCheckboxArray] = useState([]);  
    const checkboxArraySost = useMemo( () => {
        if (!checkbox) return
        if (checkbox[0] == 'add') {
            setCheckboxArray ([...checkboxArray, checkbox[1]])
        }else if (checkbox[0] == 'remove'){
            setCheckboxArray(checkboxArray.filter( (producer: string) => producer !== checkbox[1]))
        } 
    }, [checkbox])
    const finalFiltredGoods:any = useMemo( () => {
        if(!checkbox) {
            return sortedFiltreadSearchedPriceGoods
        }
        let goodsByCheckboxArray:any = [];
        for (let i=0; i<checkboxArray.length; i++) {
            let pushItem = sortedFiltreadSearchedPriceGoods.filter( (product:IGoods) => product.producer.includes(checkboxArray[i]))
            pushItem.map( (product:any) => goodsByCheckboxArray.push(product))
        }
        if (goodsByCheckboxArray[0] == undefined) {
            goodsByCheckboxArray = sortedFiltreadSearchedPriceGoods
        }
        return goodsByCheckboxArray

    }, [checkboxArray, sortedFiltreadSearchedPriceGoods])

        //Pagination

    const [pageNumber, setPageNumber] = useState (1)
    const pagesArray = useMemo( () => {
        let totalPages = Math.ceil(finalFiltredGoods.length/ 10)

        let pagesArray = []
        for (let i = 0; i< totalPages; i++) {
            pagesArray.push(i+1)
        } 
        return pagesArray
    }, [finalFiltredGoods])
    const pagingPage = useMemo( () => {
        let choosenPage =  pagesArray.indexOf(pageNumber, 0);
        if (choosenPage + 1 == pagesArray.length) {
            return finalFiltredGoods.slice((choosenPage*10), finalFiltredGoods.length)
        } else {
            return finalFiltredGoods.slice((choosenPage*10), (choosenPage*10 + 10))
        }
    }, [pageNumber, finalFiltredGoods])

    return (
        <div>

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
            <div className="body">
                <div> 
                    <h4>Подбор по параметрам</h4>
                    <p>Цена</p>
                    <MyInput 
                        value={minPrice}
                        onChange={minPricing}
                        placeholder = "0"
                    />
                        <MyInput 
                        value={maxPrice}
                        onChange={maxPricing}
                        placeholder = "10 000"
                    />
                    <h5>Производитель</h5> 
                    <MyInput 
                        value={searchProdicerQuery}
                        onChange={queryGoods}
                        placeholder = "Поиск"
                    />
                    <CheckboxList 
                        value={checkbox}
                        onClick={checkboxing}
                        filtredGoodsList={sortedFiltreadSearchedPriceGoods} 
                    />
                </div>
                <GoodsList 
                    goods={pagingPage} 
                    productTypeValue={productType}
                    onProductTypeChange={setProductType}
                />

            </div>
            <div >
                {pagesArray.map( p =>
                    <span 
                        key={p}
                        onClick={() => setPageNumber(p)}
                    >{p}</span>)}
            </div>
      </div>
    );
};

export default CatalogBody;