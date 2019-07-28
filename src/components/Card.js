import React from 'react';

const dict = {
    "z": "Задержанных",
    "p_chely": "Пострадавших среди митингующих",
    "p_mysor": "Пострадавших среди полицейских",
    "total": "Всего на улицы вышло"
}

class Card extends React.Component {
    render() {
        const {count, k, data, ...restProps} = this.props;
        return (
            <div className="card" {...restProps}>
                <div className="int">> {count}</div>
                <div className="d">{dict[k]}</div>
                <div className="data">{data}</div>
            </div>
        );
    }
}

export default Card;