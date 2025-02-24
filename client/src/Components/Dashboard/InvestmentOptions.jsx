import React from 'react';

const InvestmentOptions = ({ options }) => {
  return (
    <div>
      <h2>Available Investment Options</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <strong>Valuation:</strong> {option.valuation} <br />
            <strong>Equity:</strong> {option.equity} <br />
            <strong>Type:</strong> {option.investmentType} <br />
            {option.investmentType === 'loan' && (
              <span>
                <strong>Interest Rate:</strong> {option.additionalDetails}
              </span>
            )}
            {option.investmentType === 'royalty' && (
              <span>
                <strong>Royalty Percentage:</strong> {option.additionalDetails}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentOptions;
