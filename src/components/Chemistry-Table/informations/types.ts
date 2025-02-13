export interface Element {
    symbol: string;
    number: number;
    category: ElementCategory;
    protons: number;
    electrons: number;
    neutrons: number;
    row: number;
    column: number;
    name: string;
    valenceelectrons: number;
}

export type ElementCategory =
    | 'actinide'
    | 'lanthanide'
    | 'noblegas'
    | 'alkalimetal'
    | 'alkalineearthmetal'
    | 'transitionmetal'
    | 'posttransitionmetal'
    | 'metalloid'
    | 'nonmetal';
