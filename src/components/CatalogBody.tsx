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
        if (productType !==undefined) {
            onProductTypeChange?.(productType.toString())
            setProductType(undefined)
        }
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
            <div className="catalog-head">
                <div className="container catalog-head__container"> 
                    <h2 className="catalog-head__heading">КОСМЕТИКА И ГИГИЕНА</h2>
                    <div className="catalog-head__block">
                        <span className="catalog-head__text">Сортировка: </span>
                        <MySelect
                            className="catalog-head__select" 
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
            </div>
            <div className="nav-top">    
                <div className="container nav-top__container"> 
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'body'name = 'Уход за&nbsp;телом'onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'hands' name = 'Уход за&nbsp;руками' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'legs' name = 'Уход за&nbsp;ногами' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'face' name = 'Уход за&nbsp;лицом' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'hair' name = 'Уход за&nbsp;волосами' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'sun' name = 'Средства для&nbsp;загара' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'shaving' name = 'Средства для&nbsp;бритья' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'present' name = 'Подарочные наборы' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'hygienic' name = 'Гигиеническая продукция' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'mouth' name = 'Гигиена полости рта' onClick={filerGoods} />
                    <FilterButton className='nav-top__btn' value={selectedFilter} careType = 'paper' name = 'Бумажная продукция' onClick={filerGoods} />
                </div>
            </div>
            <div className="catalog-body">
                <div className="container catalog-body__container">
                    <div className="catalog-body__left"> 
                        <h4 className="catalog-body__heading">Подбор по параметрам</h4>
                        <p className="catalog-body__price">Цена ₸</p>
                        <div className="catalog-body__pricing">
                        <MyInput
                            className="catalog-body__input-price" 
                            value={minPrice}
                            onChange={minPricing}
                            placeholder = "0"
                        />
                        <p className="catalog-body__slicer">-</p>
                            <MyInput
                            className="catalog-body__input-price"  
                            value={maxPrice}
                            onChange={maxPricing}
                            placeholder = "10 000"
                        />
                        </div>
                        <h5 className="catalog-body__second-heading">Производитель</h5>
                        <div className="catalog-body__search-querry">
                            <MyInput 
                                className="catalog-body__input-search"  
                                value={searchProdicerQuery}
                                onChange={queryGoods}
                                placeholder = "Поиск"
                            />
                            <div className="catalog-body__img">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>
                            </div>
                        </div> 
                        <CheckboxList 
                            value={checkbox}
                            onClick={checkboxing}
                            filtredGoodsList={sortedFiltreadSearchedPriceGoods}
                            className ='catalog-body__'
                        />
                        <div className='catalog-body__filter-left'> 
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'body'name = 'Уход за телом'onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'hands' name = 'Уход за руками' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'legs' name = 'Уход за ногами' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'face' name = 'Уход за лицом' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'hair' name = 'Уход за волосами' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'sun' name = 'Средства для загара' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'shaving' name = 'Средства для бритья' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'present' name = 'Подарочные наборы' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'hygienic' name = 'Гигиеническая продукция' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'mouth' name = 'Гигиена полости рта' onClick={filerGoods} />
                            <FilterButton className='catalog-body__btn' value={selectedFilter} careType = 'paper' name = 'Бумажная продукция' onClick={filerGoods} />
                        </div>   
                    </div>
                    <GoodsList 
                        goods={pagingPage}
                        goodsWithoutFilters={goods} 
                        productTypeValue={productType}
                        onProductTypeChange={setProductType}
                    />
                    
                </div>
            </div>
                <div className="pagination">
                        {pagesArray.map( p =>
                            <span className="pagination__number"
                                key={p}
                                onClick={() => setPageNumber(p)}
                            >{p}</span>)}
                </div>
      </div>
    );
};

export default CatalogBody;