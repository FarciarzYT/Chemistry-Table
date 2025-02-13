import { Element } from '../informations/types';


interface ElementDetailsProps {
    element: Element;
    onClose: () => void;
    onShow3D: (element: Element) => void;
}

export const ElementDetails: React.FC<ElementDetailsProps> = ({ element, onClose, onShow3D }) => {
    if (!element) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 ease-in-out">
            <div className="relative bg-gray-700 p-8 rounded-3xl max-w-md w-full text-center popup-shadow popup-show">
                <div className='bg-gray-950 rounded-3xl'>
                    <h2 className="text-4xl font-bold mb-2">{element.symbol} - {element.number}</h2>
                    <h3 className='text-5xl font-bold mb-6'>{element.name}</h3>
                </div>
                <div className='bg-gray-800 rounded popup-description'>
                    <p><strong>Category:</strong> {element.category}</p>
                    <p><strong>Protons:</strong> {element.protons}</p>
                    <p><strong>Electrons:</strong> {element.electrons}</p>
                    <p><strong>Neutrons:</strong> {element.neutrons}</p>
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded select-none"
                    >
                        Close
                    </button>
                    <button
                        onClick={() => onShow3D(element)}
                        className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded select-none"
                    >
                        Show 3D Model
                    </button>
                </div>
            </div>
        </div>
    );
};