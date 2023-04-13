
import React, {FC, useEffect, useState} from "react";
import { IGoods } from "../types/types";
import CaretypeCheckbox from "./UI/checkbox/CaretypeCheckbox";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

interface AddNewProductProps {
    create?: any;
}

const AddNewProduct: FC<AddNewProductProps> =({create}) => {

    const [product, setProduct] = useState<IGoods | undefined> (undefined)
    const createProduct = (e:any) => {
        e.preventDefault()
        setProduct({id: Date.now(), title: title, image: imgURL, sizeType: sizeType, size: size, barcode: barcode, producer: producer, brand: brand, desription: desription, price: price, careType: careType})
        //console.log(product)
    }
    useEffect (() => {
        if (product !== undefined) {
            create({...product})
        }
    },[product])

    

    const [title, setTitle] = useState('')
    const titleChanger = (value:string) => {
        setTitle(value);
    }

    const [imgURL, setimgURL] = useState('')
    const imgURLChanger = (value:string) => {
        setimgURL(value);
    }

    const [sizeType, setsizeType] = useState('')
    const sizeTypeChanger = (value:string) => {
        setsizeType(value);
    }

    const [size, setSize] = useState(0)
    const sizeChanger = (value:number) => {
        setSize(value);
    }

    const [barcode, setBarcode] = useState(0)
    const barcodeChanger = (value:number) => {
        setBarcode(value);
    }
    
    const [producer, setProducer] = useState('')
    const producerChanger = (value:string) => {
        setProducer(value);
    }

    const [brand, setBrand] = useState('')
    const brandChanger = (value:string) => {
        setBrand(value);
    }

    const [desription, setDesription] = useState('')
    const desriptionChanger = (value:string) => {
        setDesription(value);
    }

    const [price, setPrice] = useState(0)
    const priceChanger = (value:number) => {
        setPrice(value);
    }

    const [careType, setCareType ] = useState<any>(["requerType"])
    const careTypeChanger = (value:Array<string>) => {
        if (value[0] == 'add') {
            let addingType = [...careType, value[1]]
            setCareType(addingType)
        } else if (value[0] == 'remove') {
            let removingType = [...careType]
            let index = removingType.indexOf(value[1], 0)
            removingType.splice(index, 1)
            setCareType(removingType)
        }
    }

    return (
        <div className="admin-form">
            <div className="admin-form__body ">
                <div className="admin-form__column">
                    <div className="admin-form__block">
                        <p className="admin-form__field-name">Название</p>
                        <MyInput value={title} onChange={titleChanger} placeholder = "Title" />    
                    </div>
                    <div className="admin-form__block">
                        <p className="admin-form__field-name">Ссылка на картинку</p>    
                        <MyInput value={imgURL} onChange={imgURLChanger} placeholder = "ImageURL" />
                    </div>
                    <div className="admin-form__block">
                        <MySelect
                                    value={sizeType}
                                    onChange={sizeTypeChanger}
                                    defaultValue='Тип размера'
                                    options={[
                                        {value: 'weight', name: 'Вес (гр)'},
                                        {value: 'volume', name: 'Объем (мл)'}
                                    ]}
                        />
                    </div>
                    <div className="admin-form__block">
                        <p className="admin-form__field-name">Размер</p>
                        <MyInput value={size} type={'number'} onChange={sizeChanger} placeholder = 'Размер' />
                    </div>
                    <div className="admin-form__block">
                        <p className="admin-form__field-name">Штрихкод</p>
                        <MyInput value={barcode} type={'number'} onChange={barcodeChanger} placeholder = 'Штрихкод' />
                    </div>
                    <div className="admin-form__block">
                        <p className="admin-form__field-name">Производитель</p>
                        <MyInput value={producer} onChange={producerChanger} placeholder = 'Производитель' />
                    </div>
                    <div className="admin-form__block">
                        <p className="admin-form__field-name">Бренд</p>
                        <MyInput value={brand} onChange={brandChanger} placeholder = 'Бренд' />
                    </div>
                    <div className="admin-form__block">
                        <p className="admin-form__field-name">Описание</p>
                        <MyInput value={desription} onChange={desriptionChanger} placeholder = 'Описание' />
                    </div>
                    <div className="admin-form__block">
                        <p className="admin-form__field-name">Цена</p>
                        <MyInput value={price} type={'number'} onChange={priceChanger} placeholder = 'Цена' />
                    </div>
                </div>
                <div className="admin-form__column">
                    <div className="admin-form__block">Тип использования товара:</div>
                    <div className="admin-form__block-checkboxes">
                        <div className="admin-form__checkbox-list">
                            <CaretypeCheckbox name='Уход за телом' value='body' onClick={careTypeChanger} /> 
                            <CaretypeCheckbox name='Уход за руками' value='hands' onClick={careTypeChanger} />
                            <CaretypeCheckbox name='Уход за ногами' value='legs' onClick={careTypeChanger} />  
                            <CaretypeCheckbox name='Уход за лицом' value='face' onClick={careTypeChanger} />
                            <CaretypeCheckbox name='Уход за волосами' value='hair' onClick={careTypeChanger} /> 
                            <CaretypeCheckbox name='Средства для загара' value='sun' onClick={careTypeChanger} />
                            <CaretypeCheckbox name='Средства для бритья' value='shaving' onClick={careTypeChanger} />  
                            <CaretypeCheckbox name='Подарочные наборы' value='present' onClick={careTypeChanger} />
                            <CaretypeCheckbox name='Гигиеническая продукция' value='hygienic' onClick={careTypeChanger} />
                            <CaretypeCheckbox name='Гигиена полости рта' value='mouth' onClick={careTypeChanger} /> 
                            <CaretypeCheckbox name='Бумажная продукция' value='paper' onClick={careTypeChanger} />                  
                            <button className="admin-form__btn" onClick={createProduct}>Добавить позицию</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>               
    )
}

export default AddNewProduct