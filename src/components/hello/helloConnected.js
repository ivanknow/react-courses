import React from 'react';
import { connect } from 'react-redux';


const HelloConnected = (props) => {
    const { user: { name } } = props
    
    return (
        <div className='cmp_hello'>
            <p>Hello, {name}!</p>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
  });
  
export default connect(mapStateToProps, null)(HelloConnected);
