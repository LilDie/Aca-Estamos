import React from 'react';

const ErrorComponent = ({ statusCode }) => (
  <div style={{textAlign:'center'}}>
    <h1>{statusCode} Not Found</h1>
    <img src={`https://http.cat/${statusCode}`} alt={`HTTP ${statusCode}`} />
    
  </div>
);

export default ErrorComponent;
