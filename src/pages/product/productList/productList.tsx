import { useEffect } from "react"
import { connect, type ConnectedProps } from "react-redux"
import { getProductList } from "./productList.thunks"
import { Link } from "react-router-dom"
import { PATH } from "../../../constants/paths"
import { handlePrice } from "../../../helpers/string"
import style from "./ProductList.module.scss"

const mapStateToProps = (state: AppState) => ({
  productList: state.productList.productList
})

const mapDispatchToProps = {
  getProductList
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

const ProductList = (props: Props) => {
  const { getProductList, productList } = props

  useEffect(() => {
    getProductList()
  }, [getProductList])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Product List</h2>
        <Link to={PATH.PRODUCT + "/create"} className={style.addButton}>
          Add Product
        </Link>
      </div>

      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th className={style.textCenter}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product: any, index: number) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{handlePrice(product.price)}</td>
                <td className={style.textCenter}>
                  <Link className={`${style.btn} ${style.primary}`} to={product.id}>Detail</Link>
                  <button className={`${style.btn} ${style.warning}`}>Edit</button>
                  <button className={`${style.btn} ${style.danger}`}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default connector(ProductList)
