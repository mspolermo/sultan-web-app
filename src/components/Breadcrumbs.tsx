import React, {FC} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IGoods } from "../types/types";

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
                <div key={crumb}>
                    <Link to={currentLink.join('')}>{
                        (crumb.toString() == 'catalog')
                            ? ('Каталог')
                            : (crumb.toString() == 'basket') 
                                ? ('Корзина')
                                : (crumb.toString() == 'admin')
                                    ? ('Страница администрирования сайта')
                                    : (goods[crumb.toString()].title)
                    }</Link>
                </div>
            )

        })
 //goods[crumb.toString()].title)
    return (
        <div>
            <Link to='/'>Главная</Link>
            {crumbs}
        </div>
    )
}

export default Breadcrumbs