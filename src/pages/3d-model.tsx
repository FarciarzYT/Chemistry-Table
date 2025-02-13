import { useLocation, useNavigate } from 'react-router-dom';
import { Element } from '@/components/Chemistry-Table/informations/types';
import { ArrowLeft } from 'lucide-react';
import { AtomModel } from '@/components/Chemistry-Table/3d/AtomModel';

interface LocationState {
  element: Element;
}

const ThreeDModelPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { element } = (location.state as LocationState) || {};

  if (!element) {
    return (
      <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">No element selected</h1>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Periodic Table
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black text-white">
      <div className="h-full flex flex-col md:flex-row">
        <div className="p-8 md:w-1/3 relative">
          <button
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Periodic Table
          </button>

          <h1 className="text-4xl font-bold mb-4">{element.name} ({element.symbol})</h1>
          <div className="bg-gray-800 rounded-lg p-6 space-y-3">
            <p><strong>Atomic Number:</strong> {element.number}</p>
            <p><strong>Category:</strong> {element.category}</p>
            <p><strong className='text-red-500'>Protons:</strong> {element.protons}</p>
            <p><strong className='text-blue-500'>Neutrons:</strong> {element.neutrons}</p>
            <p><strong className='text-blue-300'>Electrons:</strong> {element.electrons}</p>
            <p><strong >Valence Electrons:</strong> {element.valenceelectrons}</p>
          </div>
        </div>
        
        <div className="flex-1">
          <AtomModel element={element} />
        </div>
      </div>
    </div>
  );
};

export default ThreeDModelPage; 