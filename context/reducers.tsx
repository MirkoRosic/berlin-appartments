import type { InitialStateType } from './context';

export enum ActionType {
  GET_ALL = 'GET_ALL',
  GET_ONE = 'GET_ONE',
}

interface Action {
  type: ActionType;
  payload: InitialStateType;
}

export const appartmentsReducer = (state: InitialStateType, action: Action): InitialStateType => {
  switch (action.type) {
    case ActionType.GET_ALL:
      return {
        ...state,
        message: action.payload.message,
        success: action.payload.success,
        appartments: action.payload.appartments,
      };
    case ActionType.GET_ONE:
      return {
        ...state,
        message: action.payload.message,
        success: action.payload.success,
        appartment: action.payload.appartment,
      };
    default:
      return state;
  }
};
