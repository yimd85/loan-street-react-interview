import { CREATE_DEAL, TOGGLE_PUBLISH, DELETE_DEAL, } from "./actions";
import { DealType, DealsListType } from "../types";

let nextDealId = 3;

export const initialState: DealsListType = {
  deals: [
    {
      id: 1,
      institution: "LS Credit Union",
      dealSize: "1000000",
      dealType: "Consumer Auto",
      isPublished: true,
    },
    {
      id: 2,
      institution: "LS Credit Union",
      dealSize: "5000000",
      dealType: "Real Estate",
      isPublished: false,
    },
  ],
};

type ActionType = {
  type: string;
  payload: { deal: DealType };
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CREATE_DEAL:
      return {
        ...state,
        deals: [...state.deals, { ...action.payload.deal, id: nextDealId++ }],
      };

    case TOGGLE_PUBLISH:
      const dealsCopy = [...state.deals];
      const ind = state.deals.findIndex(v => v.id === action.payload.deal.id);
      dealsCopy[ind] = {...action.payload.deal, isPublished: !action.payload.deal.isPublished};

      return {
        ...state,
        deals: dealsCopy,
      };

    case DELETE_DEAL:
      return {
        ...state,
        deals: state.deals.filter(v => v.id !== action.payload.deal.id),
      };

    default:
      return state;
  }
};
