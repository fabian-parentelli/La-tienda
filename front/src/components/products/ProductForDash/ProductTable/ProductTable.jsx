import { useState } from "react";
import Icons from "../../../Icons/Icons";
import Copy from "../../../tools/Copy/Copy";
import Modal from "../../../tools/Modal/Modal";
import Tooltip from "../../../tools/Tooltip/Tooltip";
import ImgHover from "../../../tools/ImgHover/ImgHover";
import ProdTabModImg from "./modals/ProdTabModImg";
import ProdTabModUpd from "./modals/ProdTabModUpd/ProdTabModUpd";

const ProductTable = ({ products, handleUpdImg, handleUpdtae }) => {

    const [modal, setModal] = useState({ open: false, data: null, type: null });

    return (
        <div className='column'>
            <table>

                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>marca</th>
                        <th>descripción</th>
                        <th>precio</th>
                        <th>Stock</th>
                        <th>sale</th>
                        <th>box</th>
                        <th>unid</th>
                        <th>Categoría</th>
                        <th>sub-cat</th>
                        <th><Icons type="chart" color="#ecf0f1" size="20px" bold={1.3} /></th>
                        <th>upd</th>
                        <th>Stock</th>
                        <th>Act</th>
                    </tr>
                </thead>

                <tbody>
                    {products && products.map(prod => (
                        <tr key={prod._id}>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: prod, type: 'img' })}
                            >
                                <ImgHover img={prod.img} border={false} />
                            </td>

                            <td className="pcolorA">
                                <p>{prod.name}</p>
                                <Copy data={prod._id} size="6px" />
                            </td>
                            <td className="pcolorA">{prod.brand}</td>
                            <td className="pcolorA">{prod.description}</td>
                            <td>{prod.price}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.discount}</td>
                            <td>{prod.box}</td>
                            <td className="pcolorA">{prod.unit}</td>
                            <td className="pcolorA">{prod.category}</td>
                            <td className="pcolorA">{prod.subCategory}</td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: prod, type: 'gra' })}
                            >
                                <Tooltip text='Estadística' backgroundColor="#2C5469" position="left">
                                    <Icons type='chart' color='#2C5469' size="25px" />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => setModal({ open: true, data: prod, type: 'upd' })}
                            >
                                <Tooltip text='Actualizar' backgroundColor="#2C5469" position="left">
                                    <Icons type='arrows' color='#2C5469' size="25px" />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => handleUpdtae({ ...prod, stock: !prod.stock })}
                            >
                                <Tooltip text={prod.stock ? 'Desactivar' : 'Activar'} backgroundColor="#2C5469" position="left">
                                    <Icons type={prod.stock ? 'success' : 'error'} color={prod.stock ? '#2C5469' : '#fa5d44'} size="25px" />
                                </Tooltip>
                            </td>

                            <td
                                className="tdBack"
                                onClick={() => handleUpdtae({ ...prod, active: !prod.active })}
                            >
                                <Tooltip text={prod.active ? 'Desactivar' : 'Activar'} backgroundColor="#2C5469" position="left">
                                    <Icons type={prod.active ? 'success' : 'error'} color={prod.active ? '#2C5469' : '#fa5d44'} size="25px" />
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null, type: null })} btn={false}>
                {modal.type === 'img' && <ProdTabModImg product={modal.data} setModal={setModal} handleUpdImg={handleUpdImg} handleUpdtae={handleUpdtae} />}
                {modal.type === 'gra' && <p>Modal Estadísticas</p>}
                {modal.type === 'upd' && <ProdTabModUpd product={modal.data} setModal={setModal} handleUpdtae={handleUpdtae} />}
            </Modal>
        </div>
    );
};

export default ProductTable;