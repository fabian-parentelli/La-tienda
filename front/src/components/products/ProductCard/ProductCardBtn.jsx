import { useCartContext } from "../../../context/CartContext";
import { useAlertContext } from "../../../context/AlertContext";

const ProductCardBtn = ({ product }) => {

    const { showAlert } = useAlertContext();
    const { addToCart, isInCart, updQuantity } = useCartContext();

    const handleCart = () => {
        const isCart = isInCart(product._id);
        if (isCart) {
            updQuantity(product._id, isCart.quantity + 1);
            showAlert(`Agargaste 1 ${product.name} al pedido`, 'info');
        } else {
            addToCart({
                _id: product._id,
                quantity: 1,
                stock: product.stock ? product?.quantity : false,
                price: product?.location && product?.location !== 'none'
                    ? Math.round(product.price - (product.price * product.discount / 100))
                    : product.price,
                name: `${product.name} ${product.brand} ${product.description}`,
                img: product.img
            });
            showAlert('Producto agragdo al carrito', 'info');
        };
    };

    return (
        <button className="btn btnC" onClick={handleCart}>
            Agregar
        </button>
    );
};

export default ProductCardBtn;