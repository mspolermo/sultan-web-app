export interface IGoods {
    id: number,
    image: string,
    title: string,
    sizeType: string,
    size: number,
    barcode: number,
    producer: string,
    brand: string,
    desription: string,
    price: number,
    careType: Array<string>
  }

  export interface IBasketGoods {
    id: number,
    image: string,
    title: string,
    sizeType: string,
    size: number,
    barcode: number,
    producer: string,
    brand: string,
    desription: string,
    price: number,
    careType: Array<string>,
    basketCount: number
  }
