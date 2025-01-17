import React from "react";
import noop from "lodash/noop";
import { DealType, DealErrorType } from "../../types";
import "./NewDealForm.scss";

const DEFAULT_DEAL: DealType = {
  institution: "",
  dealType: "",
  dealSize: "",
  isPublished: false,
};

const DEFAULT_DEAL_ERRORS: DealErrorType = {
  institution: "",
  dealType: "",
  dealSize: "",
};

type DealFormProps = {
  onCreateDeal: (deal: DealType) => any;
};

const DealForm = (props: DealFormProps) => {
  const { onCreateDeal = noop } = props;
  const [newDeal, setNewDeal] = React.useState(DEFAULT_DEAL);
  const [errors, setErrors] = React.useState(DEFAULT_DEAL_ERRORS);

  const handleUpdateProperty = (e: React.ChangeEvent<any>) => {
    const name = e.target.name;
    let value = e.target.value;
    let errTxt = '';
    const englishCharPattern = /^[A-Za-z0-9 .,!?$&()'-]+$/;
    
    if (name === 'dealSize') {
      value = value.replace(/[^0-9]/g, '');
    }

    if (!value.trim()) {
      errTxt = 'This field cannot be empty.';
    } else if (!englishCharPattern.test(value)) {
      errTxt = 'Only English characters are allowed.';
    } else {
      errTxt = '';
    }

    setNewDeal({ ...newDeal, [name]: value })
    setErrors({ ...errors, [name]: errTxt })
  };

  const handleCreateDeal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onCreateDeal({ ...newDeal });
    // Reset state for the next deal input.
    setNewDeal({ ...DEFAULT_DEAL });
  };

  const hasErrors = Boolean(errors.institution || errors.dealType || errors.dealSize);
  const hasBlanks =  Boolean(!newDeal.institution || !newDeal.dealType || !newDeal.dealSize);
  const disable = hasErrors || hasBlanks;

  return (
    <form className='NewDealForm tile'>
      <div className='tile--header'>Add New Deal</div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Institution</label>
        <input
          className='NewDealForm--input'
          value={newDeal.institution}
          placeholder='LS Credit Union'
          onChange={handleUpdateProperty}
          required
          name='institution'
        />
        {errors.institution && <div className='NewDealForm--div--error'>{errors.institution}</div>}
      </div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Deal Type</label>
        <input
          className='NewDealForm--input'
          value={newDeal.dealType}
          placeholder='Consumer Auto'
          onChange={handleUpdateProperty}
          required
          name='dealType'
        />
        {errors.dealType && <div className='NewDealForm--div--error'>{errors.dealType}</div>}
      </div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Deal Size</label>
        <input
          className='NewDealForm--input'
          value={newDeal.dealSize}
          placeholder='$1,000,000'
          onChange={handleUpdateProperty}
          required
          name='dealSize'
        />
        {errors.dealSize && <div className='NewDealForm--div--error'>{errors.dealSize}</div>}
      </div>
      <button disabled={disable} className={disable ? 'NewDealForm--button--disabled': 'NewDealForm--button'} onClick={handleCreateDeal}>
        Create Deal
      </button>
    </form>
  );
};

export default DealForm;
