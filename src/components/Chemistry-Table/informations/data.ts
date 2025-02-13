import { Element } from '../types.ts';

function calculateValenceElectrons(atomicNumber: number): number {
  // Special cases for transition metals and other exceptions
  const specialCases: Record<number, number> = {
    29: 1, // Cu
    47: 1, // Ag
    79: 1, // Au
    // Add more special cases as needed
  };

  if (specialCases[atomicNumber]) {
    return specialCases[atomicNumber];
  }

  // Regular calculation based on electron configuration
  const electronConfig = [2, 8, 18, 32, 32, 18, 8];
  let remainingElectrons = atomicNumber;
  let shellIndex = 0;

  while (remainingElectrons > 0 && shellIndex < electronConfig.length) {
    const shellCapacity = electronConfig[shellIndex];
    if (remainingElectrons <= shellCapacity) {
      return remainingElectrons;
    }
    remainingElectrons -= shellCapacity;
    shellIndex++;
  }

  return remainingElectrons;
}

const elements: Element[] = [
    { symbol: "H", number: 1, category: "nonmetal", protons: 1, electrons: 1, neutrons: 0, row: 1, column: 1, name: "Hydrogen", valenceelectrons: calculateValenceElectrons(1)},
    { symbol: "He", number: 2, category: "noblegas", protons: 2, electrons: 2, neutrons: 2, row: 1, column: 18, name: "Helium", valenceelectrons: calculateValenceElectrons(2)},
    { symbol: "Li", number: 3, category: "alkalimetal", protons: 3, electrons: 3, neutrons: 4, row: 2, column: 1, name: "Lithium", valenceelectrons: calculateValenceElectrons(3)},
    { symbol: "Be", number: 4, category: "alkalineearthmetal", protons: 4, electrons: 4, neutrons: 5, row: 2, column: 2, name: "Beryllium", valenceelectrons: calculateValenceElectrons(4)},
    { symbol: "B", number: 5, category: "metalloid", protons: 5, electrons: 5, neutrons: 6, row: 2, column: 13, name: "Boron", valenceelectrons: calculateValenceElectrons(5)},
    { symbol: "C", number: 6, category: "nonmetal", protons: 6, electrons: 6, neutrons: 6, row: 2, column: 14, name: "Carbon", valenceelectrons: calculateValenceElectrons(6)},
    { symbol: "N", number: 7, category: "nonmetal", protons: 7, electrons: 7, neutrons: 7, row: 2, column: 15, name: "Nitrogen", valenceelectrons: calculateValenceElectrons(7)},
    { symbol: "O", number: 8, category: "nonmetal", protons: 8, electrons: 8, neutrons: 8, row: 2, column: 16, name: "Oxygen", valenceelectrons: calculateValenceElectrons(8)},
    { symbol: "F", number: 9, category: "nonmetal", protons: 9, electrons: 9, neutrons: 10, row: 2, column: 17, name: "Fluorine", valenceelectrons: calculateValenceElectrons(9)},
    { symbol: "Ne", number: 10, category: "noblegas", protons: 10, electrons: 10, neutrons: 10, row: 2, column: 18, name: "Neon", valenceelectrons: calculateValenceElectrons(10)},
    { symbol: "Na", number: 11, category: "alkalimetal", protons: 11, electrons: 11, neutrons: 12, row: 3, column: 1, name: "Sodium", valenceelectrons: calculateValenceElectrons(11)},
    { symbol: "Mg", number: 12, category: "alkalineearthmetal", protons: 12, electrons: 12, neutrons: 12, row: 3, column: 2, name: "Magnesium", valenceelectrons: calculateValenceElectrons(12)},
    { symbol: "Al", number: 13, category: "posttransitionmetal", protons: 13, electrons: 13, neutrons: 14, row: 3, column: 13, name: "Aluminium", valenceelectrons: calculateValenceElectrons(13)},
    { symbol: "Si", number: 14, category: "metalloid", protons: 14, electrons: 14, neutrons: 14, row: 3, column: 14, name: "Silicon", valenceelectrons: calculateValenceElectrons(14)},
    { symbol: "P", number: 15, category: "nonmetal", protons: 15, electrons: 15, neutrons: 16, row: 3, column: 15, name: "Phosphorus", valenceelectrons: calculateValenceElectrons(15)},
    { symbol: "S", number: 16, category: "nonmetal", protons: 16, electrons: 16, neutrons: 16, row: 3, column: 16, name: "Sulfur", valenceelectrons: calculateValenceElectrons(16)},
    { symbol: "Cl", number: 17, category: "nonmetal", protons: 17, electrons: 17, neutrons: 18, row: 3, column: 17, name: "Chlorine", valenceelectrons: calculateValenceElectrons(17)},
    { symbol: "Ar", number: 18, category: "noblegas", protons: 18, electrons: 18, neutrons: 22, row: 3, column: 18, name: "Argon", valenceelectrons: calculateValenceElectrons(18)},
    { symbol: "K", number: 19, category: "alkalimetal", protons: 19, electrons: 19, neutrons: 20, row: 4, column: 1, name: "Potassium", valenceelectrons: calculateValenceElectrons(19)},
    { symbol: "Ca", number: 20, category: "alkalineearthmetal", protons: 20, electrons: 20, neutrons: 20, row: 4, column: 2, name: "Calcium", valenceelectrons: calculateValenceElectrons(20)},
    { symbol: "Sc", number: 21, category: "transitionmetal", protons: 21, electrons: 21, neutrons: 24, row: 4, column: 3, name: "Scandium", valenceelectrons: calculateValenceElectrons(21)},
    { symbol: "Ti", number: 22, category: "transitionmetal", protons: 22, electrons: 22, neutrons: 26, row: 4, column: 4, name: "Titanium", valenceelectrons: calculateValenceElectrons(22)},
    { symbol: "V", number: 23, category: "transitionmetal", protons: 23, electrons: 23, neutrons: 28, row: 4, column: 5, name: "Vanadium", valenceelectrons: calculateValenceElectrons(23)},
    { symbol: "Cr", number: 24, category: "transitionmetal", protons: 24, electrons: 24, neutrons: 28, row: 4, column: 6, name: "Chromium", valenceelectrons: calculateValenceElectrons(24)},
    { symbol: "Mn", number: 25, category: "transitionmetal", protons: 25, electrons: 25, neutrons: 30, row: 4, column: 7, name: "Manganese", valenceelectrons: calculateValenceElectrons(25)},
    { symbol: "Fe", number: 26, category: "transitionmetal", protons: 26, electrons: 26, neutrons: 30, row: 4, column: 8, name: "Iron", valenceelectrons: calculateValenceElectrons(26)},
    { symbol: "Co", number: 27, category: "transitionmetal", protons: 27, electrons: 27, neutrons: 32, row: 4, column: 9, name: "Cobalt", valenceelectrons: calculateValenceElectrons(27)},
    { symbol: "Ni", number: 28, category: "transitionmetal", protons: 28, electrons: 28, neutrons: 31, row: 4, column: 10, name: "Nickel", valenceelectrons: calculateValenceElectrons(28)},
    { symbol: "Cu", number: 29, category: "transitionmetal", protons: 29, electrons: 29, neutrons: 35, row: 4, column: 11, name: "Copper", valenceelectrons: calculateValenceElectrons(29)},
    { symbol: "Zn", number: 30, category: "transitionmetal", protons: 30, electrons: 30, neutrons: 35, row: 4, column: 12, name: "Zinc", valenceelectrons: calculateValenceElectrons(30)},
    { symbol: "Ga", number: 31, category: "posttransitionmetal", protons: 31, electrons: 31, neutrons: 39, row: 4, column: 13, name: "Gallium", valenceelectrons: calculateValenceElectrons(31)},
    { symbol: "Ge", number: 32, category: "metalloid", protons: 32, electrons: 32, neutrons: 41, row: 4, column: 14, name: "Germanium", valenceelectrons: calculateValenceElectrons(32)},
    { symbol: "As", number: 33, category: "metalloid", protons: 33, electrons: 33, neutrons: 42, row: 4, column: 15, name: "Arsenic", valenceelectrons: calculateValenceElectrons(33)},
    { symbol: "Se", number: 34, category: "nonmetal", protons: 34, electrons: 34, neutrons: 45, row: 4, column: 16, name: "Selenium", valenceelectrons: calculateValenceElectrons(34)},
    { symbol: "Br", number: 35, category: "nonmetal", protons: 35, electrons: 35, neutrons: 45, row: 4, column: 17, name: "Bromine", valenceelectrons: calculateValenceElectrons(35)},
    { symbol: "Kr", number: 36, category: "noblegas", protons: 36, electrons: 36, neutrons: 48, row: 4, column: 18, name: "Krypton", valenceelectrons: calculateValenceElectrons(36)},
    { symbol: "Rb", number: 37, category: "alkalimetal", protons: 37, electrons: 37, neutrons: 48, row: 5, column: 1, name: "Rubidium", valenceelectrons: calculateValenceElectrons(37)},
    { symbol: "Sr", number: 38, category: "alkalineearthmetal", protons: 38, electrons: 38, neutrons: 50, row: 5, column: 2, name: "Strontium", valenceelectrons: calculateValenceElectrons(38)},
    { symbol: "Y", number: 39, category: "transitionmetal", protons: 39, electrons: 39, neutrons: 50, row: 5, column: 3, name: "Yttrium", valenceelectrons: calculateValenceElectrons(39)},
    { symbol: "Zr", number: 40, category: "transitionmetal", protons: 40, electrons: 40, neutrons: 51, row: 5, column: 4, name: "Zirconium", valenceelectrons: calculateValenceElectrons(40)},
    { symbol: "Nb", number: 41, category: "transitionmetal", protons: 41, electrons: 41, neutrons: 52, row: 5, column: 5, name: "Niobium", valenceelectrons: calculateValenceElectrons(41)},
    { symbol: "Mo", number: 42, category: "transitionmetal", protons: 42, electrons: 42, neutrons: 54, row: 5, column: 6, name: "Molybdenum", valenceelectrons: calculateValenceElectrons(42)},
    { symbol: "Tc", number: 43, category: "transitionmetal", protons: 43, electrons: 43, neutrons: 55, row: 5, column: 7, name: "Technetium", valenceelectrons: calculateValenceElectrons(43)},
    { symbol: "Ru", number: 44, category: "transitionmetal", protons: 44, electrons: 44, neutrons: 57, row: 5, column: 8, name: "Ruthenium", valenceelectrons: calculateValenceElectrons(44)},
    { symbol: "Rh", number: 45, category: "transitionmetal", protons: 45, electrons: 45, neutrons: 58, row: 5, column: 9, name: "Rhodium", valenceelectrons: calculateValenceElectrons(45)},
    { symbol: "Pd", number: 46, category: "transitionmetal", protons: 46, electrons: 46, neutrons: 59, row: 5, column: 10, name: "Palladium", valenceelectrons: calculateValenceElectrons(46)},
    { symbol: "Ag", number: 47, category: "transitionmetal", protons: 47, electrons: 47, neutrons: 61, row: 5, column: 11, name: "Silver", valenceelectrons: calculateValenceElectrons(47)},
    { symbol: "Cd", number: 48, category: "transitionmetal", protons: 48, electrons: 48, neutrons: 64, row: 5, column: 12, name: "Cadmium", valenceelectrons: calculateValenceElectrons(48)},
    { symbol: "In", number: 49, category: "posttransitionmetal", protons: 49, electrons: 49, neutrons: 66, row: 5, column: 13, name: "Indium", valenceelectrons: calculateValenceElectrons(49)},
    { symbol: "Sn", number: 50, category: "posttransitionmetal", protons: 50, electrons: 50, neutrons: 69, row: 5, column: 14, name: "Tin", valenceelectrons: calculateValenceElectrons(50)},
    { symbol: "Sb", number: 51, category: "metalloid", protons: 51, electrons: 51, neutrons: 70, row: 5, column: 15, name: "Antimony", valenceelectrons: calculateValenceElectrons(51)},
    { symbol: "Te", number: 52, category: "metalloid", protons: 52, electrons: 52, neutrons: 74, row: 5, column: 16, name: "Tellurium", valenceelectrons: calculateValenceElectrons(52)},
    { symbol: "I", number: 53, category: "nonmetal", protons: 53, electrons: 53, neutrons: 75, row: 5, column: 17, name: "Iodine", valenceelectrons: calculateValenceElectrons(53)},
    { symbol: "Xe", number: 54, category: "noblegas", protons: 54, electrons: 54, neutrons: 77, row: 5, column: 18, name: "Xenon", valenceelectrons: calculateValenceElectrons(54)},
    { symbol: "Cs", number: 55, category: "alkalimetal", protons: 55, electrons: 55, neutrons: 78, row: 6, column: 1, name: "Caesium", valenceelectrons: calculateValenceElectrons(55)},
    { symbol: "Ba", number: 56, category: "alkalineearthmetal", protons: 56, electrons: 56, neutrons: 82, row: 6, column: 2, name: "Barium", valenceelectrons: calculateValenceElectrons(56)},
    { symbol: "La", number: 57, category: "lanthanide", protons: 57, electrons: 57, neutrons: 82, row: 6, column: 3, name: "Lanthanum", valenceelectrons: calculateValenceElectrons(57)},
    { symbol: "Hf", number: 72, category: "transitionmetal", protons: 72, electrons: 72, neutrons: 106, row: 6, column: 4, name: "Hafnium", valenceelectrons: calculateValenceElectrons(72)},
    { symbol: "Ta", number: 73, category: "transitionmetal", protons: 73, electrons: 73, neutrons: 108, row: 6, column: 5, name: "Tantalum", valenceelectrons: calculateValenceElectrons(73)},
    { symbol: "W", number: 74, category: "transitionmetal", protons: 74, electrons: 74, neutrons: 110, row: 6, column: 6, name: "Tungsten", valenceelectrons: calculateValenceElectrons(74)},
    { symbol: "Re", number: 75, category: "transitionmetal", protons: 75, electrons: 75, neutrons: 111, row: 6, column: 7, name: "Rhenium", valenceelectrons: calculateValenceElectrons(75)},
    { symbol: "Os", number: 76, category: "transitionmetal", protons: 76, electrons: 76, neutrons: 114, row: 6, column: 8, name: "Osmium", valenceelectrons: calculateValenceElectrons(76)},
    { symbol: "Ir", number: 77, category: "transitionmetal", protons: 77, electrons: 77, neutrons: 115, row: 6, column: 9, name: "Iridium", valenceelectrons: calculateValenceElectrons(77)},
    { symbol: "Pt", number: 78, category: "transitionmetal", protons: 78, electrons: 78, neutrons: 117, row: 6, column: 10, name: "Platinum", valenceelectrons: calculateValenceElectrons(78)},
    { symbol: "Au", number: 79, category: "transitionmetal", protons: 79, electrons: 79, neutrons: 118, row: 6, column: 11, name: "Gold", valenceelectrons: calculateValenceElectrons(79)},
    { symbol: "Hg", number: 80, category: "transitionmetal", protons: 80, electrons: 80, neutrons: 120, row: 6, column: 12, name: "Mercury", valenceelectrons: calculateValenceElectrons(80)},
    { symbol: "Tl", number: 81, category: "posttransitionmetal", protons: 81, electrons: 81, neutrons: 123, row: 6, column: 13, name: "Thallium", valenceelectrons: calculateValenceElectrons(81)},
    { symbol: "Pb", number: 82, category: "posttransitionmetal", protons: 82, electrons: 82, neutrons: 126, row: 6, column: 14, name: "Lead", valenceelectrons: calculateValenceElectrons(82)},
    { symbol: "Bi", number: 83, category: "posttransitionmetal", protons: 83, electrons: 83, neutrons: 128, row: 6, column: 15, name: "Bismuth", valenceelectrons: calculateValenceElectrons(83)},
    { symbol: "Po", number: 84, category: "metalloid", protons: 84, electrons: 84, neutrons: 128, row: 6, column: 16, name: "Polonium", valenceelectrons: calculateValenceElectrons(84)},
    { symbol: "At", number: 85, category: "nonmetal", protons: 85, electrons: 85, neutrons: 129, row: 6, column: 17, name: "Astatine", valenceelectrons: calculateValenceElectrons(85)},
    { symbol: "Rn", number: 86, category: "noblegas", protons: 86, electrons: 86, neutrons: 136, row: 6, column: 18, name: "Radon", valenceelectrons: calculateValenceElectrons(86)},
    { symbol: "Fr", number: 87, category: "alkalimetal", protons: 87, electrons: 87, neutrons: 136, row: 7, column: 1, name: "Francium", valenceelectrons: calculateValenceElectrons(87)},
    { symbol: "Ra", number: 88, category: "alkalineearthmetal", protons: 88, electrons: 88, neutrons: 138, row: 7, column: 2, name: "Radium", valenceelectrons: calculateValenceElectrons(88)},
    { symbol: "Ac", number: 89, category: "actinide", protons: 89, electrons: 89, neutrons: 138, row: 7, column: 3, name: "Actinium", valenceelectrons: calculateValenceElectrons(89)},
    { symbol: "Rf", number: 104, category: "transitionmetal", protons: 104, electrons: 104, neutrons: 157, row: 7, column: 4, name: "Rutherfordium", valenceelectrons: calculateValenceElectrons(104)},
    { symbol: "Db", number: 105, category: "transitionmetal", protons: 105, electrons: 105, neutrons: 158, row: 7, column: 5, name: "Dubnium", valenceelectrons: calculateValenceElectrons(105)},
    { symbol: "Sg", number: 106, category: "transitionmetal", protons: 106, electrons: 106, neutrons: 160, row: 7, column: 6, name: "Seaborgium", valenceelectrons: calculateValenceElectrons(106)},
    { symbol: "Bh", number: 107, category: "transitionmetal", protons: 107, electrons: 107, neutrons: 161, row: 7, column: 7, name: "Bohrium", valenceelectrons: calculateValenceElectrons(107)},
    { symbol: "Hs", number: 108, category: "transitionmetal", protons: 108, electrons: 108, neutrons: 163, row: 7, column: 8, name: "Hassium", valenceelectrons: calculateValenceElectrons(108)},
    { symbol: "Mt", number: 109, category: "transitionmetal", protons: 109, electrons: 109, neutrons: 165, row: 7, column: 9, name: "Meitnerium", valenceelectrons: calculateValenceElectrons(109)},
    { symbol: "Ds", number: 110, category: "transitionmetal", protons: 110, electrons: 110, neutrons: 167, row: 7, column: 10, name: "Darmstadtium", valenceelectrons: calculateValenceElectrons(110)},
    { symbol: "Rg", number: 111, category: "transitionmetal", protons: 111, electrons: 111, neutrons: 170, row: 7, column: 11, name: "Roentgenium", valenceelectrons: calculateValenceElectrons(111)},
    { symbol: "Cn", number: 112, category: "transitionmetal", protons: 112, electrons: 112, neutrons: 174, row: 7, column: 12, name: "Copernicium", valenceelectrons: calculateValenceElectrons(112)},
    { symbol: "Nh", number: 113, category: "posttransitionmetal", protons: 113, electrons: 113, neutrons: 176, row: 7, column: 13, name: "Nihonium", valenceelectrons: calculateValenceElectrons(113)},
    { symbol: "Fl", number: 114, category: "posttransitionmetal", protons: 114, electrons: 114, neutrons: 180, row: 7, column: 14, name: "Flerovium", valenceelectrons: calculateValenceElectrons(114)},
    { symbol: "Mc", number: 115, category: "posttransitionmetal", protons: 115, electrons: 115, neutrons: 182, row: 7, column: 15, name: "Moscovium", valenceelectrons: calculateValenceElectrons(115)},
    { symbol: "Lv", number: 116, category: "posttransitionmetal", protons: 116, electrons: 116, neutrons: 184, row: 7, column: 16, name: "Livermorium", valenceelectrons: calculateValenceElectrons(116)},
    { symbol: "Ts", number: 117, category: "nonmetal", protons: 117, electrons: 117, neutrons: 186, row: 7, column: 17, name: "Tennessine", valenceelectrons: calculateValenceElectrons(117)},
    { symbol: "Og", number: 118, category: "noblegas", protons: 118, electrons: 118, neutrons: 190, row: 7, column: 18, name: "Oganesson", valenceelectrons: calculateValenceElectrons(118)},
    { symbol: "Ce", number: 58, category: "lanthanide", protons: 58, electrons: 58, neutrons: 82, row: 9, column: 3, name: "Cerium", valenceelectrons: calculateValenceElectrons(58)},
    { symbol: "Pr", number: 59, category: "lanthanide", protons: 59, electrons: 59, neutrons: 84, row: 9, column: 4, name: "Praseodymium", valenceelectrons: calculateValenceElectrons(59)},
    { symbol: "Nd", number: 60, category: "lanthanide", protons: 60, electrons: 60, neutrons: 84, row: 9, column: 5, name: "Neodymium", valenceelectrons: calculateValenceElectrons(60)},
    { symbol: "Pm", number: 61, category: "lanthanide", protons: 61, electrons: 61, neutrons: 86, row: 9, column: 6, name: "Promethium", valenceelectrons: calculateValenceElectrons(61)},
    { symbol: "Sm", number: 62, category: "lanthanide", protons: 62, electrons: 62, neutrons: 89, row: 9, column: 7, name: "Samarium", valenceelectrons: calculateValenceElectrons(62)},
    { symbol: "Eu", number: 63, category: "lanthanide", protons: 63, electrons: 63, neutrons: 90, row: 9, column: 8, name: "Europium", valenceelectrons: calculateValenceElectrons(63)},
    { symbol: "Gd", number: 64, category: "lanthanide", protons: 64, electrons: 64, neutrons: 92, row: 9, column: 9, name: "Gadolinium", valenceelectrons: calculateValenceElectrons(64)},
    { symbol: "Tb", number: 65, category: "lanthanide", protons: 65, electrons: 65, neutrons: 93, row: 9, column: 10, name: "Terbium", valenceelectrons: calculateValenceElectrons(65)},
    { symbol: "Dy", number: 66, category: "lanthanide", protons: 66, electrons: 66, neutrons: 95, row: 9, column: 11, name: "Dysprosium", valenceelectrons: calculateValenceElectrons(66)},
    { symbol: "Ho", number: 67, category: "lanthanide", protons: 67, electrons: 67, neutrons: 96, row: 9, column: 12, name: "Holmium", valenceelectrons: calculateValenceElectrons(67)},
    { symbol: "Er", number: 68, category: "lanthanide", protons: 68, electrons: 68, neutrons: 100, row: 9, column: 13, name: "Erbium", valenceelectrons: calculateValenceElectrons(68)},
    { symbol: "Tm", number: 69, category: "lanthanide", protons: 69, electrons: 69, neutrons: 101, row: 9, column: 14, name: "Thulium", valenceelectrons: calculateValenceElectrons(69)},
    { symbol: "Yb", number: 70, category: "lanthanide", protons: 70, electrons: 70, neutrons: 102, row: 9, column: 15, name: "Ytterbium", valenceelectrons: calculateValenceElectrons(70)},
    { symbol: "Lu", number: 71, category: "lanthanide", protons: 71, electrons: 71, neutrons: 104, row: 9, column: 16, name: "Lutetium", valenceelectrons: calculateValenceElectrons(71)},
    { symbol: "Th", number: 90, category: "actinide", protons: 90, electrons: 90, neutrons: 142, row: 11, column: 3, name: "Thorium", valenceelectrons: calculateValenceElectrons(90)},
    { symbol: "Pa", number: 91, category: "actinide", protons: 91, electrons: 91, neutrons: 140, row: 11, column: 4, name: "Protactinium", valenceelectrons: calculateValenceElectrons(91)},
    { symbol: "U", number: 92, category: "actinide", protons: 92, electrons: 92, neutrons: 143, row: 11, column: 5, name: "Uranium", valenceelectrons: calculateValenceElectrons(92)},
    { symbol: "Np", number: 93, category: "actinide", protons: 93, electrons: 93, neutrons: 144, row: 11, column: 6, name: "Neptunium", valenceelectrons: calculateValenceElectrons(93)},
    { symbol: "Pu", number: 94, category: "actinide", protons: 94, electrons: 94, neutrons: 145, row: 11, column: 7, name: "Plutonium", valenceelectrons: calculateValenceElectrons(94)},
    { symbol: "Am", number: 95, category: "actinide", protons: 95, electrons: 95, neutrons: 146, row: 11, column: 8, name: "Americium", valenceelectrons: calculateValenceElectrons(95)},
    { symbol: "Cm", number: 96, category: "actinide", protons: 96, electrons: 96, neutrons: 150, row: 11, column: 9, name: "Curium", valenceelectrons: calculateValenceElectrons(96)},
    { symbol: "Bk", number: 97, category: "actinide", protons: 97, electrons: 97, neutrons: 152, row: 11, column: 10, name: "Berkelium", valenceelectrons: calculateValenceElectrons(97)},
    { symbol: "Cf", number: 98, category: "actinide", protons: 98, electrons: 98, neutrons: 152, row: 11, column: 11, name: "Californium", valenceelectrons: calculateValenceElectrons(98)},
    { symbol: "Es", number: 99, category: "actinide", protons: 99, electrons: 99, neutrons: 153, row: 11, column: 12, name: "Einsteinium", valenceelectrons: calculateValenceElectrons(99)},
    { symbol: "Fm", number: 100, category: "actinide", protons: 100, electrons: 100, neutrons: 154, row: 11, column: 13, name: "Fermium", valenceelectrons: calculateValenceElectrons(100)},
    { symbol: "Md", number: 101, category: "actinide", protons: 101, electrons: 101, neutrons: 155, row: 11, column: 14, name: "Mendelevium", valenceelectrons: calculateValenceElectrons(101)},
    { symbol: "No", number: 102, category: "actinide", protons: 102, electrons: 102, neutrons: 156, row: 11, column: 15, name: "Nobelium", valenceelectrons: calculateValenceElectrons(102)},
    { symbol: "Lr", number: 103, category: "actinide", protons: 103, electrons: 103, neutrons: 158, row: 11, column: 16, name: "Lawrencium", valenceelectrons: calculateValenceElectrons(103)},
  ];
  export default elements;