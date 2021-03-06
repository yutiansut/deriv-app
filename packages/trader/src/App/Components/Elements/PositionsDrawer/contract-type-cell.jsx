import React from 'react';
import PropTypes from 'prop-types';
import { IconTradeTypes } from '@deriv/components';
import { getContractTypeDisplay } from 'Constants/contract';

const ContractTypeCell = ({ multiplier, type, is_high_low }) => (
    <div className='contract-type'>
        <div className='contract-type__type-wrapper'>
            <IconTradeTypes
                type={is_high_low ? `${type.toLowerCase()}_barrier` : type.toLowerCase()}
                className='category-type'
                size={24}
            />
        </div>
        <div className='contract-type__type-label'>
            <div>{getContractTypeDisplay(type, is_high_low) || ''}</div>
            {multiplier && <div className='contract-type__type-label-multiplier'>x{multiplier}</div>}
        </div>
    </div>
);

ContractTypeCell.propTypes = {
    type: PropTypes.string,
};

export default ContractTypeCell;
