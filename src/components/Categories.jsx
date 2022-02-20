import React from 'react';
import vector from '../common/Vector.svg';

const Cetegories = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <ul className="d-flex align-items-center">
          <li className="allCategory">
            <b>Все</b>
          </li>
          <li>
            <b>Мясные</b>
          </li>
          <li>
            <b>Вегетарианская</b>
          </li>
          <li>
            <b>Гриль</b>
          </li>
          <li>
            <b>Острые</b>
          </li>
          <li>
            <b>Закрытые</b>
          </li>
        </ul>
        <div className="sortPopUp d-flex justify-content-around align-items-center">
          <p>
            <img src={vector} width="10px" />
          </p>
          <p>
            <b style={{ fontSize: '14px' }}>Сортировка по:</b>
            <u className="m-2" style={{ color: '#FE5F1E' }}>
              популярности
            </u>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cetegories;
