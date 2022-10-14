import React, { createContext, FC, useReducer } from 'react';
import { ViewProps } from 'react-native';
import { AppartmentDetails } from './types';
import { appartmentsReducer } from './reducers';

export type Location = {
  lat: number;
  lng: number;
  city: string;
  postalCode: number;
  countryCode: string;
  addressLine1: string;
  countryName: string;
};

export type ImageType = {
  url: string;
  is_portrait: boolean;
  position: number;
  unit_group_ids?: number[];
  tags?: string[];
};

type UnitGroup = {
  id: number;
  bedroom_count: number;
  lowest_price_per_night: number | null;
  lowest_price_per_month: number | null;
};

export interface Appartment {
  id: number;
  external_id: string;
  review_widget_id: number | null;
  name: string;
  city: string;
  city_id: number;
  street: string;
  location: Location;
  distance: number;
  images: ImageType[];
  lowest_price_per_night: number | null;
  lowest_price_per_month: number | null;
  unit_groups: UnitGroup[];
}

export type InitialStateType = {
  message: string;
  success: boolean;
  appartments: Appartment[];
  appartment?: AppartmentDetails | undefined;
};

const initialState: InitialStateType = {
  message: '',
  success: false,
  appartments: [],
  appartment: undefined,
};

const AppContext = createContext<{ state: InitialStateType; dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: FC<ViewProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appartmentsReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
