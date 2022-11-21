// import { RouteComponentProps } from 'react-router-dom';
import { GetProducsOptions } from '../../api/productsDetailsAPI';
import { FetchShopProductsAction } from '../../store/actions/productDetailsAction';
import { ShopProducts } from '../../store/reducers/productDetailsReducer';

export interface AllProductsStateProps {
  shopProducts: ShopProducts;
}

// export interface AllProductsOwnProps extends RouteComponentProps {}
export interface AllProductsOwnProps {}

export interface AllProductsDispatchToProps {
  fetchShopProducts(options: GetProducsOptions): FetchShopProductsAction;
}

export type AllProductsPageProps = AllProductsStateProps &
  AllProductsOwnProps &
  AllProductsDispatchToProps;
