import './../index.css';
import './NeonGlow.css';
export default function ChemistryTable() {

  const elements = [
    { symbol: "H", number: 1, category: "nonmetal", protons: 1, electrons: 1, neutrons: 0, row: 1, column: 1 },
    { symbol: "He", number: 2, category: "noblegas", protons: 2, electrons: 2, neutrons: 2, row: 1, column: 18 },
    { symbol: "Li", number: 3, category: "alkalimetal", protons: 3, electrons: 3, neutrons: 4, row: 2, column: 1 },
    { symbol: "Be", number: 4, category: "alkalineearthmetal", protons: 4, electrons: 4, neutrons: 5, row: 2, column: 2 },
    { symbol: "B", number: 5, category: "metalloid", protons: 5, electrons: 5, neutrons: 6, row: 2, column: 13 },
    { symbol: "C", number: 6, category: "nonmetal", protons: 6, electrons: 6, neutrons: 6, row: 2, column: 14 },
    { symbol: "N", number: 7, category: "nonmetal", protons: 7, electrons: 7, neutrons: 7, row: 2, column: 15 },
    { symbol: "O", number: 8, category: "nonmetal", protons: 8, electrons: 8, neutrons: 8, row: 2, column: 16 },
    { symbol: "F", number: 9, category: "nonmetal", protons: 9, electrons: 9, neutrons: 10, row: 2, column: 17 },
    { symbol: "Ne", number: 10, category: "noblegas", protons: 10, electrons: 10, neutrons: 10, row: 2, column: 18 },
    { symbol: "Na", number: 11, category: "alkalimetal", protons: 11, electrons: 11, neutrons: 12, row: 3, column: 1 },
    { symbol: "Mg", number: 12, category: "alkalineearthmetal", protons: 12, electrons: 12, neutrons: 12, row: 3, column: 2 },
    { symbol: "Al", number: 13, category: "posttransitionmetal", protons: 13, electrons: 13, neutrons: 14, row: 3, column: 13 },
    { symbol: "Si", number: 14, category: "metalloid", protons: 14, electrons: 14, neutrons: 14, row: 3, column: 14 },
    { symbol: "P", number: 15, category: "nonmetal", protons: 15, electrons: 15, neutrons: 16, row: 3, column: 15 },
    { symbol: "S", number: 16, category: "nonmetal", protons: 16, electrons: 16, neutrons: 16, row: 3, column: 16 },
    { symbol: "Cl", number: 17, category: "nonmetal", protons: 17, electrons: 17, neutrons: 18, row: 3, column: 17 },
    { symbol: "Ar", number: 18, category: "noblegas", protons: 18, electrons: 18, neutrons: 22, row: 3, column: 18 },
    { symbol: "K", number: 19, category: "alkalimetal", protons: 19, electrons: 19, neutrons: 20, row: 4, column: 1 },
    { symbol: "Ca", number: 20, category: "alkalineearthmetal", protons: 20, electrons: 20, neutrons: 20, row: 4, column: 2 },
    { symbol: "Sc", number: 21, category: "transitionmetal", protons: 21, electrons: 21, neutrons: 24, row: 4, column: 3 },
    { symbol: "Ti", number: 22, category: "transitionmetal", protons: 22, electrons: 22, neutrons: 26, row: 4, column: 4 },
    { symbol: "V", number: 23, category: "transitionmetal", protons: 23, electrons: 23, neutrons: 28, row: 4, column: 5 },
    { symbol: "Cr", number: 24, category: "transitionmetal", protons: 24, electrons: 24, neutrons: 28, row: 4, column: 6 },
    { symbol: "Mn", number: 25, category: "transitionmetal", protons: 25, electrons: 25, neutrons: 30, row: 4, column: 7 },
    { symbol: "Fe", number: 26, category: "transitionmetal", protons: 26, electrons: 26, neutrons: 30, row: 4, column: 8 },
    { symbol: "Co", number: 27, category: "transitionmetal", protons: 27, electrons: 27, neutrons: 32, row: 4, column: 9 },
    { symbol: "Ni", number: 28, category: "transitionmetal", protons: 28, electrons: 28, neutrons: 31, row: 4, column: 10 },
    { symbol: "Cu", number: 29, category: "transitionmetal", protons: 29, electrons: 29, neutrons: 35, row: 4, column: 11 },
    { symbol: "Zn", number: 30, category: "transitionmetal", protons: 30, electrons: 30, neutrons: 35, row: 4, column: 12 },
    { symbol: "Ga", number: 31, category: "posttransitionmetal", protons: 31, electrons: 31, neutrons: 39, row: 4, column: 13 },
    { symbol: "Ge", number: 32, category: "metalloid", protons: 32, electrons: 32, neutrons: 41, row: 4, column: 14 },
    { symbol: "As", number: 33, category: "metalloid", protons: 33, electrons: 33, neutrons: 42, row: 4, column: 15 },
    { symbol: "Se", number: 34, category: "nonmetal", protons: 34, electrons: 34, neutrons: 45, row: 4, column: 16 },
    { symbol: "Br", number: 35, category: "nonmetal", protons: 35, electrons: 35, neutrons: 45, row: 4, column: 17 },
    { symbol: "Kr", number: 36, category: "noblegas", protons: 36, electrons: 36, neutrons: 48, row: 4, column: 18 },
    { symbol: "Rb", number: 37, category: "alkalimetal", protons: 37, electrons: 37, neutrons: 48, row: 5, column: 1 },
    { symbol: "Sr", number: 38, category: "alkalineearthmetal", protons: 38, electrons: 38, neutrons: 50, row: 5, column: 2 },
    { symbol: "Y", number: 39, category: "transitionmetal", protons: 39, electrons: 39, neutrons: 50, row: 5, column: 3 },
    { symbol: "Zr", number: 40, category: "transitionmetal", protons: 40, electrons: 40, neutrons: 51, row: 5, column: 4 },
    { symbol: "Nb", number: 41, category: "transitionmetal", protons: 41, electrons: 41, neutrons: 52, row: 5, column: 5 },
    { symbol: "Mo", number: 42, category: "transitionmetal", protons: 42, electrons: 42, neutrons: 54, row: 5, column: 6 },
    { symbol: "Tc", number: 43, category: "transitionmetal", protons: 43, electrons: 43, neutrons: 55, row: 5, column: 7 },
    { symbol: "Ru", number: 44, category: "transitionmetal", protons: 44, electrons: 44, neutrons: 57, row: 5, column: 8 },
    { symbol: "Rh", number: 45, category: "transitionmetal", protons: 45, electrons: 45, neutrons: 58, row: 5, column: 9 },
    { symbol: "Pd", number: 46, category: "transitionmetal", protons: 46, electrons: 46, neutrons: 59, row: 5, column: 10 },
    { symbol: "Ag", number: 47, category: "transitionmetal", protons: 47, electrons: 47, neutrons: 61, row: 5, column: 11 },
    { symbol: "Cd", number: 48, category: "transitionmetal", protons: 48, electrons: 48, neutrons: 64, row: 5, column: 12 },
    { symbol: "In", number: 49, category: "posttransitionmetal", protons: 49, electrons: 49, neutrons: 66, row: 5, column: 13 },
    { symbol: "Sn", number: 50, category: "posttransitionmetal", protons: 50, electrons: 50, neutrons: 69, row: 5, column: 14 },
    { symbol: "Sb", number: 51, category: "metalloid", protons: 51, electrons: 51, neutrons: 70, row: 5, column: 15 },
    { symbol: "Te", number: 52, category: "metalloid", protons: 52, electrons: 52, neutrons: 74, row: 5, column: 16 },
    { symbol: "I", number: 53, category: "nonmetal", protons: 53, electrons: 53, neutrons: 75, row: 5, column: 17 },
    { symbol: "Xe", number: 54, category: "noblegas", protons: 54, electrons: 54, neutrons: 77, row: 5, column: 18 },
    { symbol: "Cs", number: 55, category: "alkalimetal", protons: 55, electrons: 55, neutrons: 78, row: 6, column: 1 },
    { symbol: "Ba", number: 56, category: "alkalineearthmetal", protons: 56, electrons: 56, neutrons: 82, row: 6, column: 2 },
    { symbol: "La", number: 57, category: "lanthanide", protons: 57, electrons: 57, neutrons: 82, row: 6, column: 3 },
    { symbol: "Hf", number: 72, category: "transitionmetal", protons: 72, electrons: 72, neutrons: 106, row: 6, column: 4 },
    { symbol: "Ta", number: 73, category: "transitionmetal", protons: 73, electrons: 73, neutrons: 108, row: 6, column: 5 },
    { symbol: "W", number: 74, category: "transitionmetal", protons: 74, electrons: 74, neutrons: 110, row: 6, column: 6 },
    { symbol: "Re", number: 75, category: "transitionmetal", protons: 75, electrons: 75, neutrons: 111, row: 6, column: 7 },
    { symbol: "Os", number: 76, category: "transitionmetal", protons: 76, electrons: 76, neutrons: 114, row: 6, column: 8 },
    { symbol: "Ir", number: 77, category: "transitionmetal", protons: 77, electrons: 77, neutrons: 115, row: 6, column: 9 },
    { symbol: "Pt", number: 78, category: "transitionmetal", protons: 78, electrons: 78, neutrons: 117, row: 6, column: 10 },
    { symbol: "Au", number: 79, category: "transitionmetal", protons: 79, electrons: 79, neutrons: 118, row: 6, column: 11 },
    { symbol: "Hg", number: 80, category: "transitionmetal", protons: 80, electrons: 80, neutrons: 120, row: 6, column: 12 },
    { symbol: "Tl", number: 81, category: "posttransitionmetal", protons: 81, electrons: 81, neutrons: 123, row: 6, column: 13 },
    { symbol: "Pb", number: 82, category: "posttransitionmetal", protons: 82, electrons: 82, neutrons: 126, row: 6, column: 14 },
    { symbol: "Bi", number: 83, category: "posttransitionmetal", protons: 83, electrons: 83, neutrons: 128, row: 6, column: 15 },
    { symbol: "Po", number: 84, category: "metalloid", protons: 84, electrons: 84, neutrons: 128, row: 6, column: 16 },
    { symbol: "At", number: 85, category: "nonmetal", protons: 85, electrons: 85, neutrons: 129, row: 6, column: 17 },
    { symbol: "Rn", number: 86, category: "noblegas", protons: 86, electrons: 86, neutrons: 136, row: 6, column: 18 },
    { symbol: "Fr", number: 87, category: "alkalimetal", protons: 87, electrons: 87, neutrons: 136, row: 7, column: 1 },
    { symbol: "Ra", number: 88, category: "alkalineearthmetal", protons: 88, electrons: 88, neutrons: 138, row: 7, column: 2 },
    { symbol: "Ac", number: 89, category: "actinide", protons: 89, electrons: 89, neutrons: 138, row: 7, column: 3 },
    { symbol: "Rf", number: 104, category: "transitionmetal", protons: 104, electrons: 104, neutrons: 157, row: 7, column: 4 },
    { symbol: "Db", number: 105, category: "transitionmetal", protons: 105, electrons: 105, neutrons: 158, row: 7, column: 5 },
    { symbol: "Sg", number: 106, category: "transitionmetal", protons: 106, electrons: 106, neutrons: 160, row: 7, column: 6 },
    { symbol: "Bh", number: 107, category: "transitionmetal", protons: 107, electrons: 107, neutrons: 161, row: 7, column: 7 },
    { symbol: "Hs", number: 108, category: "transitionmetal", protons: 108, electrons: 108, neutrons: 163, row: 7, column: 8 },
    { symbol: "Mt", number: 109, category: "transitionmetal", protons: 109, electrons: 109, neutrons: 165, row: 7, column: 9 },
    { symbol: "Ds", number: 110, category: "transitionmetal", protons: 110, electrons: 110, neutrons: 167, row: 7, column: 10 },
    { symbol: "Rg", number: 111, category: "transitionmetal", protons: 111, electrons: 111, neutrons: 170, row: 7, column: 11 },
    { symbol: "Cn", number: 112, category: "transitionmetal", protons: 112, electrons: 112, neutrons: 174, row: 7, column: 12 },
    { symbol: "Nh", number: 113, category: "posttransitionmetal", protons: 113, electrons: 113, neutrons: 176, row: 7, column: 13 },
    { symbol: "FI", number: 114, category: "posttransitionmetal", protons: 114, electrons: 114, neutrons: 180, row: 7, column: 14 },
    { symbol: "Mc", number: 115, category: "posttransitionmetal", protons: 115, electrons: 115, neutrons: 182, row: 7, column: 15 },
    { symbol: "Lv", number: 116, category: "posttransitionmetal", protons: 116, electrons: 116, neutrons: 184, row: 7, column: 16 },
    { symbol: "Ts", number: 117, category: "nonmetal", protons: 117, electrons: 117, neutrons: 186, row: 7, column: 17 },
    { symbol: "Og", number: 118, category: "noblegas", protons: 118, electrons: 118, neutrons: 190, row: 7, column: 18 },
    { symbol: "Ce", number: 58, category: "lanthanide", protons: 58, electrons: 58, neutrons: 82, row: 9, column: 3 },
    { symbol: "Pr", number: 59, category: "lanthanide", protons: 59, electrons: 59, neutrons: 84, row: 9, column: 4 },
    { symbol: "Nd", number: 60, category: "lanthanide", protons: 60, electrons: 60, neutrons: 84, row: 9, column: 5 },
    { symbol: "Pm", number: 61, category: "lanthanide", protons: 61, electrons: 61, neutrons: 86, row: 9, column: 6 },
    { symbol: "Sm", number: 62, category: "lanthanide", protons: 62, electrons: 62, neutrons: 89, row: 9, column: 7 },
    { symbol: "Eu", number: 63, category: "lanthanide", protons: 63, electrons: 63, neutrons: 90, row: 9, column: 8 },
    { symbol: "Gd", number: 64, category: "lanthanide", protons: 64, electrons: 64, neutrons: 92, row: 9, column: 9 },
    { symbol: "Tb", number: 65, category: "lanthanide", protons: 65, electrons: 65, neutrons: 93, row: 9, column: 10 },
    { symbol: "Dy", number: 66, category: "lanthanide", protons: 66, electrons: 66, neutrons: 95, row: 9, column: 11 },
    { symbol: "Ho", number: 67, category: "lanthanide", protons: 67, electrons: 67, neutrons: 96, row: 9, column: 12 },
    { symbol: "Er", number: 68, category: "lanthanide", protons: 68, electrons: 68, neutrons: 100, row: 9, column: 13 },
    { symbol: "Tm", number: 69, category: "lanthanide", protons: 69, electrons: 69, neutrons: 101, row: 9, column: 14 },
    { symbol: "Yb", number: 70, category: "lanthanide", protons: 70, electrons: 70, neutrons: 102, row: 9, column: 15 },
    { symbol: "Lu", number: 71, category: "lanthanide", protons: 71, electrons: 71, neutrons: 104, row: 9, column: 16 },
    { symbol: "Th", number: 90, category: "actinide", protons: 90, electrons: 90, neutrons: 142, row: 11, column: 3 },
    { symbol: "Pa", number: 91, category: "actinide", protons: 91, electrons: 91, neutrons: 140, row: 11, column: 4 },
    { symbol: "U", number: 92, category: "actinide", protons: 92, electrons: 92, neutrons: 143, row: 11, column: 5 },
    { symbol: "Np", number: 93, category: "actinide", protons: 93, electrons: 93, neutrons: 144, row: 11, column: 6 },
    { symbol: "Pu", number: 94, category: "actinide", protons: 94, electrons: 94, neutrons: 145, row: 11, column: 7 },
    { symbol: "Am", number: 95, category: "actinide", protons: 95, electrons: 95, neutrons: 146, row: 11, column: 8 },
    { symbol: "Cm", number: 96, category: "actinide", protons: 96, electrons: 96, neutrons: 150, row: 11, column: 9 },
    { symbol: "Bk", number: 97, category: "actinide", protons: 97, electrons: 97, neutrons: 152, row: 11, column: 10 },
    { symbol: "Cf", number: 98, category: "actinide", protons: 98, electrons: 98, neutrons: 152, row: 11, column: 11 },
    { symbol: "Es", number: 99, category: "actinide", protons: 99, electrons: 99, neutrons: 153, row: 11, column: 12 },
    { symbol: "Fm", number: 100, category: "actinide", protons: 100, electrons: 100, neutrons: 154, row: 11, column: 13 },
    { symbol: "Md", number: 101, category: "actinide", protons: 101, electrons: 101, neutrons: 155, row: 11, column: 14 },
    { symbol: "No", number: 102, category: "actinide", protons: 102, electrons: 102, neutrons: 156, row: 11, column: 15 },
    { symbol: "Lr", number: 103, category: "actinide", protons: 103, electrons: 103, neutrons: 158, row: 11, column: 16 }
  ];

  const categoryColors = {
    actinide: "bg-pink-400",
    lanthanide: "bg-cyan-400",
    noblegas: "bg-cyan-700",
    alkalimetal: "bg-red-600",
    alkalineearthmetal: "bg-orange-500",
    transitionmetal: "bg-blue-600",
    posttransitionmetal: "bg-purple-800",
    metalloid: "bg-lime-500",
    nonmetal: "bg-green-700",


  };
  
return (
  <div className="black-background">
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Tablica Mendelejewa</h1>
      <div className="grid grid-cols-18 gap-2 auto-rows-auto">
        {elements.map((element) => (
          <div 
            key={element.number} 
            className={`${categoryColors[element.category] || "bg-gray-500"} cursor-pointer select-none text-white p-4 rounded-lg text-center col-span-${element.colSpan || 1} row-span-${element.rowSpan || 1} neon-glow`}
            style={{ gridColumnStart: element.column, gridRowStart: element.row }}
          >
            <div className="text-2xl font-bold ">{element.symbol}</div>
            <div className="text-sm">{element.number}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}