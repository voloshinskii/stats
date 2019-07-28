import React from 'react';

const dict = {
    "z": "Задержанных",
    "p_chely": "Пострадавших среди митингующих",
    "p_mysor": "Пострадавших среди полицейских",
    "total": "Всего вышло на улицы"
}

class Donate extends React.Component {
    render() {
        const {...restProps} = this.props;
        return (
            <div className="donate" {...restProps}>
                <h3>Пожертвовать <a href="https://tvrain.ru/donate/" target="_blank">Дождю</a></h3>
                <p>-Бесплатный эфир</p>
                <h3>Пожертвовать <a href="https://ovdinfo.org/" target="_blank">ОВД-Инфо</a></h3>
                <p>-Статистика по задержаниям</p>
                <p>-Правовая помощь задержанным</p>
                <h3>Пожертвовать <a href="https://yasobe.ru/na/statsvoloshinskiiru" target="_blank">Мне</a></h3>
                <p>-Всё самое важное на одной странице</p>
            </div>
        );
    }
}

export default Donate;