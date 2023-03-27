import React, {FC} from "react";
import GoodsList from '../components/GoodsList';
import goods from '../goods/goods.json'
import '../App.css'

const Catalog: FC = () => {
    return (
        <div>
            <div className="header">HEADER OF CATALOG PAGE</div>
            <GoodsList goods={goods} />
            <GoodsList goods={goods} />
            <GoodsList goods={goods} />
            <div className="footer">FOOTER</div>
      </div>
    );
};

export default Catalog;