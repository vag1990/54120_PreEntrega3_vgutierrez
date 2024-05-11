import "ItemCount.css";

export default function ItemCount({ stock, count, increment, decrement }) {
    return (
        <div className="contenedorItemCount">
            <div className="contenedorCounter">
                <button className="contenedorBotonCounter" onClick={decrement} disabled={count === 0}> - </button>
                <span className="contenedorBotonCounter">{count}</span>
                <button className="contenedorBotonCounter" onClick={increment} disabled={count >= 0}> - </button>
            </div>
        </div>
    );
}