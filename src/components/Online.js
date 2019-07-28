import React from 'react';
import './index.css';
class Online extends React.Component {
    render() {
        const {count, ...restProps} = this.props;
        return (
            <div className="record" {...restProps}>
                <div className="red-dot" />{count}
            </div>
        );
    }
}

export default Online;