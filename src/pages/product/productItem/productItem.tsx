import { useEffect } from "react";
import { connect, type ConnectedProps } from "react-redux";
import { getProductItem } from "./productItem.thunks";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { handlePrice } from "../../../helpers/string";
import { PATH } from "../../../constants/paths";

const mapStateToProps = (state: AppState) => ({
  productItem: state.productItem.productItem,
});

const mapDispatchToProps = {
  getProductItem,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

function ProductItem(props: Props) {
  const navigate = useNavigate();
  const { productItem, getProductItem } = props;

  const { idProduct } = useParams<{ idProduct?: string }>();
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get("id");

  useEffect(() => {
  const id = queryId || idProduct;
  if (!id) {
    navigate(PATH.NOT_FOUND);
    return;
  }
  getProductItem(id);
}, [queryId, idProduct, getProductItem, navigate]);

  return (
    <>
      {productItem && (
        <>
          <h2>{productItem.name}</h2>
          <p>Price: {handlePrice(productItem.price)}</p>
          <p>Quantity: {productItem.quantity}</p>
        </>
      )}
    </>
  );
}

export default connector(ProductItem);
