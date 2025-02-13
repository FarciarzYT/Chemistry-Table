import { Element } from '../informations/types';
import { categoryColors } from '../informations/constants';

interface ElementCellProps {
    element: Element;
    onClick: (element: Element) => void;
}

export const ElementCell: React.FC<ElementCellProps> = ({ element, onClick }) => {
    return (
        <div
            className={`${categoryColors[element.category]} rounded-2xl cursor-pointer select-none text-white p-4 text-center w-20 h-20 neon-glow`}
            style={{ gridColumnStart: element.column, gridRowStart: element.row }}
            onClick={() => onClick(element)}
        >
            <div className="text-2xl font-bold">{element.symbol}</div>
            <div className="text-sm">{element.number}</div>
        </div>
    );
};