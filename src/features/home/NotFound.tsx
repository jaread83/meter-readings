import React from 'react';
import { useNavigate } from 'react-router-dom';
import Panel from '../../components/Panel';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Panel title="Page Not Found">
      <p>Oh dear, it looks like you have found yourself at a dead end.</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Back
      </button>
    </Panel>
  );
};

export default NotFound;
