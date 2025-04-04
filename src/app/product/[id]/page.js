import PropTypes from 'prop-types';
// utils
import axios, { endpoints } from 'src/utils/axios';
// sections
import { ProductShopDetailsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Product: Details',
};

export default function ProductShopDetailsPage({ params }) {
  const { id } = params;

  return <ProductShopDetailsView id={id} />;
}

ProductShopDetailsPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
};
