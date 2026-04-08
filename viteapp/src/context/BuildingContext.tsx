import React, { createContext, useContext, useReducer, type ReactNode } from 'react';

// --- Types ---
export interface Room {
  id: string;
  name: string;
  type: string;
}

export interface Floor {
  id: string;
  number: number;
  rooms: Room[];
}

export interface Budget {
  total: number;
  used: number;
  remaining: number;
  costPerFloor: number;
  costPerRoom: number;
}

export interface BuildingState {
  floors: Floor[];
  budget: Budget;
  constraints: {
    maxFloors: number;
    maxRoomsPerFloor: number;
    minRoomsPerFloor: number;
  };
  history: Array<{ action: string; timestamp: string; details: string }>;
}

// --- Initial State ---
const INITIAL_BUDGET = 5000000; // 50 Lakh

const initialState: BuildingState = {
  floors: [],
  budget: {
    total: INITIAL_BUDGET,
    used: 0,
    remaining: INITIAL_BUDGET,
    costPerFloor: 500000, // 5 Lakh
    costPerRoom: 100000,  // 1 Lakh
  },
  constraints: {
    maxFloors: 10,
    maxRoomsPerFloor: 6,
    minRoomsPerFloor: 1,
  },
  history: [],
};

// --- Actions ---
export type BuildingAction = 
  | { type: 'SET_STATE'; payload: BuildingState }
  | { type: 'RESET' };

// --- Reducer ---
function buildingReducer(state: BuildingState, action: BuildingAction): BuildingState {
  switch (action.type) {
    case 'SET_STATE':
      return action.payload;
    case 'RESET':
      return {
        ...initialState,
        history: [{ action: 'reset', timestamp: new Date().toISOString(), details: 'Building reset to initial state' }]
      };
    default:
      return state;
  }
}

// --- Context ---
const BuildingContext = createContext<{
  state: BuildingState;
  dispatch: React.Dispatch<BuildingAction>;
} | undefined>(undefined);

export function BuildingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(buildingReducer, initialState);

  return (
    <BuildingContext.Provider value={{ state, dispatch }}>
      {children}
    </BuildingContext.Provider>
  );
}

export function useBuilding() {
  const context = useContext(BuildingContext);
  if (context === undefined) {
    throw new Error('useBuilding must be used within a BuildingProvider');
  }
  return context;
}
