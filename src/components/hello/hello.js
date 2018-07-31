import React from 'react';

const Hello = ({name = 'Ivan'})=>(
    <div className="cmp_hello">
        <p>Hello, {name}!</p>
    </div>
);

export default Hello;