import { DealType } from "../types";

export const CREATE_DEAL = "CREATE_DEAL";
export const TOGGLE_PUBLISH = "TOGGLE_PUBLISH";
export const DELETE_DEAL = "DELETE_DEAL";

export const createDeal = (deal: DealType) => {
  return {
    type: CREATE_DEAL,
    payload: {
      deal,
    },
  };
};

export const togglePublish = (deal: DealType) => {
  return {
    type: TOGGLE_PUBLISH,
    payload: {
      deal,
    },
  };
};

export const deleteDeal = (deal: DealType) => {
  return {
    type: DELETE_DEAL,
    payload: {
      deal,
    },
  };
};
