import style from './GridContainer.module.scss';

export function GridContainer({ children, columns, gap }) {

    const inlinestyle = {
    display: `grid`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}`,
    };

    return (
        <div className={style.grid} style={{ ...inlinestyle}}>
            {children}
        </div>
    )
}