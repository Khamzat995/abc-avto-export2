import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ShopTopFilter from "./ShopTopFilter";
import { toggleShopTopFilter } from "../../helpers/product";

const ShopTopActionFilter = ({
  getFilterSortParams,
  productCount,
  sortedProductCount,
  products,
  getSortParams
}) => {
  return (
    <Fragment>
      <div className="shop-top-bar mb-35">
        <div className="select-shoing-wrap">
          <div className="shop-select">
            <select
              onChange={e => getFilterSortParams("filterSort", e.target.value)}
            >
              <option value="default">По умолчанию</option>
              <option value="priceHighToLow">Цена - от высокой к низкой</option>
              <option value="priceLowToHigh">Цена - от низкой к высокой</option>
            </select>
          </div>
          <p>
            Показаны {sortedProductCount} из {productCount} товаров
          </p>
        </div>
        <div className="filter-active">
          <button onClick={e => toggleShopTopFilter(e)}>
            <i className="fa fa-plus"></i> фильтр
          </button>
        </div>
      </div>

      {/* shop top filter */}
      <ShopTopFilter products={products} getSortParams={getSortParams} />
    </Fragment>
  );
};

ShopTopActionFilter.propTypes = {
  getFilterSortParams: PropTypes.func,
  getSortParams: PropTypes.func,
  productCount: PropTypes.number,
  products: PropTypes.array,
  sortedProductCount: PropTypes.number
};

export default ShopTopActionFilter;
