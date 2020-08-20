import React from 'react';

import './FAB.css';

export default function FAB({ children, onClick }) {
  return (
    <button type="button" className="fab-container" onClick={onClick}>
      {children}
    </button>
  );
}
