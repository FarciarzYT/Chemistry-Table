import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Element } from './informations/types';
import { ElementCell } from './elements/ElementCell';
import { ElementDetails } from './elements/ElementDetails';
import elements from './informations/data.ts';

interface PeriodicTableProps {
  className?: string;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({ className = '' }) => {

  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const navigate = useNavigate();
  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  const handleShow3D = (element: Element) => {
    navigate('/3d-model/', { state: { element } });
  };

  return (
    <div className={`bg-black min-h-screen w-screen ${className}`}>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">
          Periodic Table
        </h1>
        
        <div className="relative">
          {/* Elements grid */}
          <div className="grid grid-cols-18 gap-1">
            {elements.map((element) => (
              <ElementCell 
                key={element.number} 
                element={element} 
                onClick={handleElementClick}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedElement && (
        <ElementDetails 
          element={selectedElement} 
          onClose={() => setSelectedElement(null)} 
          onShow3D={handleShow3D}
        />
      )}
    </div>
  );
};