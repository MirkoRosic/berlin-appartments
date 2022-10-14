import { Appartment } from '../context/context';
import { AppartmentDetails, Response } from '../context/types';

export const getAll = async (): Promise<Response<Appartment[]>> => {
  try {
    const response = await fetch(
      'https://api.limehome.com/properties/v1/public/properties/?cityId=32&adults=1'
    );
    const data: Response<Appartment[]> = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error as string,
      payload: [],
    };
  }
};

export const getOne = async (id: number): Promise<Response<AppartmentDetails>> => {
  try {
    const response = await fetch(`https://api.limehome.com/properties/v1/public/properties/${id}`);
    const data: Response<AppartmentDetails> = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error as string,
      payload: undefined,
    };
  }
};
