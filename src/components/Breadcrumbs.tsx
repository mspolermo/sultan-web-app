import React, {FC} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IGoods } from "../types/types";

interface BreadcrumbsProps {
    goods: IGoods []
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({goods}) => {

    const location = useLocation()

    let currentLink:any = []
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map ( (crumb:any ) => {
            currentLink.push(`/${crumb}`)
            return (
                <div className="breadcrumbs__block"key={crumb}>
                    <Link to={currentLink.join('')}>
                        <div className="breadcrumbs__crumb">
                        {
                        (crumb.toString() == 'catalog')
                            ? ('Каталог')
                            : (crumb.toString() == 'basket') 
                                ? ('Корзина')
                                : (crumb.toString() == 'admin')
                                    ? ('Страница администрирования сайта')
                                    : (crumb.toString())
                    }
                        </div>
                    </Link>
                </div>
            )
        })

//Для вывода имени товара вместо id, нужно заменить строки 
//(это работает в лайфсервере, но ложит прод)        
//(crumb.toString())
//(goods[crumb.toString()].title)

    return (
        <div className="breadcrumbs" data-testid="breadcrumbs-elem">
            <div className="container breadcrumbs__container">
               <Link to='/'>
                    <div className="breadcrumbs__crumb">
                        Главная
                    </div>
                </Link>
                {crumbs} 
            </div>   
        </div>
    )
}

export default Breadcrumbs