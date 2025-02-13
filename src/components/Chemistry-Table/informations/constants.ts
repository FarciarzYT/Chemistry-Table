import { ElementCategory } from './types';

export const categoryColors: Record<ElementCategory, string> = {
    actinide: "bg-pink-500 hover:bg-pink-600 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
    lanthanide: "bg-blue-300 hover:bg-blue-400 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(147,197,253,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
    noblegas: "bg-teal-500 hover:bg-teal-600 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(20,184,166,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
    alkalimetal: "bg-red-500 hover:bg-red-600 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(239,68,68,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
    alkalineearthmetal: "bg-orange-400 hover:bg-orange-500 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(251,146,60,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
    transitionmetal: "bg-indigo-500 hover:bg-indigo-600 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
    posttransitionmetal: "bg-purple-500 hover:bg-purple-600 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
    metalloid: "bg-yellow-400 hover:bg-yellow-500 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(250,204,21,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
    nonmetal: "bg-green-500 hover:bg-green-600 hover:scale-120 hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.5),0_0_15px_5px_rgba(255,255,255,0.5)]",
};
