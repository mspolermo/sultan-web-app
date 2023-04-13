import React, {FC, useEffect, useState} from "react";
import { IGoods } from "../types/types";
import CaretypeCheckbox from "./UI/checkbox/CaretypeCheckbox";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

interface AdminItemProps {
    product: IGoods;
    onRemove? : (removeItem :IGoods) => void;
    onEdit? : (removeItem :any) => void;
};

const AdminItem: FC<AdminItemProps> = ({product, onRemove, onEdit}) => {
    function removing () {
        onRemove?.(product);
    }

    const [editValue, setEditValue] = useState (false)
    function editing () {
        setEditValue (!editValue)
    }
    
    // useEffect (() => {
    //     onEdit?.([editValue, product]);
    // }, [editValue])

    const [editProduct, setEditProduct] = useState<IGoods | undefined> (undefined)
    const editingProduct = (e:any) => {
        e.preventDefault()
        setEditProduct({id: id, title: title, image: imgURL, sizeType: sizeType, size: size, barcode: barcode, producer: producer, brand: brand, desription: desription, price: price, careType: careType})
        setEditValue (!editValue)
    }
    //console.log(editProduct)
    useEffect (() => {
        if (editProduct !== undefined) {
            onEdit?.(editProduct)
            // create({...product})
        }
    },[editProduct])

    let id = product.id;

    const [title, setTitle] = useState(product.title)
    const titleChanger = (value:string) => {
        setTitle(value);
    }

    const [imgURL, setimgURL] = useState(product.image)
    const imgURLChanger = (value:string) => {
        setimgURL(value);
    }

    const [sizeType, setsizeType] = useState(product.sizeType)
    const sizeTypeChanger = (value:string) => {
        setsizeType(value);
    }

    const [size, setSize] = useState(product.size)
    const sizeChanger = (value:number) => {
        setSize(value);
    }

    const [barcode, setBarcode] = useState(product.barcode)
    const barcodeChanger = (value:number) => {
        setBarcode(value);
    }
    
    const [producer, setProducer] = useState(product.producer)
    const producerChanger = (value:string) => {
        setProducer(value);
    }

    const [brand, setBrand] = useState(product.brand)
    const brandChanger = (value:string) => {
        setBrand(value);
    }

    const [desription, setDesription] = useState(product.desription)
    const desriptionChanger = (value:string) => {
        setDesription(value);
    }

    const [price, setPrice] = useState(product.price)
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
        <div className='admin-list__body'>
            <div className='admin-list__item'>
                <div className='admin-list__info'>
                    <div className='admin-list__line'>
                        <span className='admin-list__text admin-list__text_bold'>ID#</span>
                        <span className='admin-list__text'>{product.id}</span>
                        <span className='admin-list__text admin-list__text_bold'> Название: </span>
                        <span className='admin-list__text'>{product.title}</span>
                    </div>
                    <div className='admin-list__line'>
                        <span className='admin-list__text admin-list__text_bold'>Описание: </span>
                        <span className='admin-list__text'>{product.desription}</span>   
                    </div>
                    <div className='admin-list__line'>
                        <span className='admin-list__text admin-list__text_bold'>Прооизводитель: </span>
                        <span className='admin-list__text'>{product.producer} </span>
                        <span className='admin-list__text admin-list__text_bold'> Бренд: </span>
                        <span className='admin-list__text'>{product.brand}</span>
                    </div>
                    <div className='admin-list__line'>
                        <span className='admin-list__text admin-list__text_bold'>Тип размера: </span>
                        <span className='admin-list__text'>{product.sizeType} </span>
                        <span className='admin-list__text admin-list__text_bold'> Размер: </span>
                        <span className='admin-list__text'>{product.size}</span>
                    </div>
                    <div className='admin-list__line'>
                        <span className='admin-list__text admin-list__text_bold'>Штрихкод: </span>
                        <span className='admin-list__text'>{product.barcode} </span>
                        <span className='admin-list__text admin-list__text_bold'> Цена: </span>
                        <span className='admin-list__text'>{product.price}</span>
                    </div>
                </div>
                <div className='admin-list__careType'>
                    <p className='admin-list__text admin-list__text_bold'>Тип ухода:</p>
                    {product.careType.map( type => 
                        <span className='admin-list__text' key={type}>{type}, </span>)}
                </div>
                <div className='admin-list__img-block'>
                    <img className='admin-list__img' src={product.image} alt={product.image} height={150}/>
                </div>
                <div className='admin-list__block-btns'>
                    <button onClick={removing} className='admin-list__btn'>Удалить</button>
                    <button onClick={editing} className='admin-list__btn'>Редактировать</button>
                </div>
            </div>
            {editValue && <div className="admin-edit">
                    <h3 className="admin-edit__head">Форма редактирования товара</h3>
                    <div className="admin-edit__body">
                        <div className="admin-edit__column">
                            <div className="admin-edit__block">
                                <p className="admin-edit__field-name">Название</p>
                                <MyInput value={title} onChange={titleChanger} placeholder = "Title" />
                            </div>
                            <div className="admin-edit__block">
                                <p className="admin-edit__field-name">Ссылка на картинку</p>
                                <MyInput value={imgURL} onChange={imgURLChanger} placeholder = "ImageURL" />
                            </div>
                            <div className="admin-edit__block">
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
                            <div className="admin-edit__block">
                                <p className="admin-edit__field-name">Размер</p>   
                                <MyInput value={size} type={'number'} onChange={sizeChanger} placeholder = 'Размер' />
                            </div>
                            <div className="admin-edit__block">
                                <p className="admin-edit__field-name">Штрихкод</p> 
                                <MyInput value={barcode} type={'number'} onChange={barcodeChanger} placeholder = 'Штрихкод' />
                            </div>
                            <div className="admin-edit__block">
                                <p className="admin-edit__field-name">Производитель</p> 
                                <MyInput value={producer} onChange={producerChanger} placeholder = 'Производитель' />
                            </div>
                            <div className="admin-edit__block">
                                <p className="admin-edit__field-name">Бренд</p> 
                                <MyInput value={brand} onChange={brandChanger} placeholder = 'Бренд' />
                            </div>
                            <div className="admin-edit__block">
                                <p className="admin-edit__field-name">Описание</p> 
                                <MyInput value={desription} onChange={desriptionChanger} placeholder = 'Описание' />
                            </div>
                            <div className="admin-edit__block">
                                <p className="admin-edit__field-name">Цена</p> 
                                <MyInput value={price} type={'number'} onChange={priceChanger} placeholder = 'Цена' />
                            </div>
                        </div>    
                        <div className="admin-edit__column">
                            <div className="admin-edit__block">Тип использования товара:</div>
                            <div className="admin-edit__block-checkboxes">
                                <div className="admin-edit__checkbox-list">
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
                                </div>
                            </div>
                            <button className="admin-edit__btn" onClick={editingProduct}>Сохранить позицию</button>
                
                        </div>           
                    </div>
            
            
            </div>}
            
        </div>
    )    
}

export default AdminItem