import { connect } from "react-redux";
import { togglePublish, deleteDeal } from "../../../redux/actions";
import DealsTableRow from "./DealsTableRow";
import { DealType } from "../../../types";

type DispatchType = (arg0: {
  type: string;
  payload: { deal: DealType };
}) => void;

const mapDispatchToProps = (dispatch: DispatchType) => ({
  onTogglePublish: (deal: DealType) => dispatch(togglePublish(deal)),
  onDeleteDeal: (deal: DealType) => dispatch(deleteDeal(deal)),
});

export default connect(undefined, mapDispatchToProps)(DealsTableRow);