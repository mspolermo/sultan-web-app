import React, {FC} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IGoods } from "../types/types";
import '../App.css'

interface BreadcrumbsProps {
    goods: IGoods []
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({goods}) => {

    const location = useLocation()
    //console.log(location)

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
                                    : (goods[crumb.toString()].title)
                    }
                        </div>
                    </Link>
                </div>
            )

        })
//(crumb.toString())
 //(goods[crumb.toString()].title)
    return (
        <div className="breadcrumbs">
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