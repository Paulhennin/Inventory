import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Inventories({ json }) {
  const [travelList, setTravelList] = useState([]);
  const [data, setData] = useState(json);

  const handleOnDelete = () => {
    console.log('Yoh');
  };

  useEffect(() => {
    const list = data.map((t, i) => {
      const classname = i % 2 ? 'inventories_section-lines' : 'inventories_section-lines-odd';
      return (
        <div key={t.id} className={classname}>
          <span className="inventories_section-name">
            <Link to={`inventory/${t.id}`}>
              {t.name}
            </Link>
          </span>
          <span className="inventories_section-date">{t.date}</span>
          <span className="inventories_section-edit" onClick={handleOnDelete}>
            <span className="inventories_section-edit_text">+</span>
          </span>
        </div>
      );
    });
    setTravelList(list);
  }, [data]);
  return (
    <>
      <section className="inventories_section">
        <div className="inventories_section-header">
          <span>Vos listes</span>
        </div>
        <div className="inventories_section-body">
          {travelList}
        </div>
      </section>
    </>
  );
}

Inventories.propTypes = {

};
