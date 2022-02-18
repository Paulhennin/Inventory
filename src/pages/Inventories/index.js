import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const json = [
  {
    id: '24sdq341c24s',
    name: 'Rome',
    date: '10/10/2021',
  },
  {
    id: '24sdq341c24a',
    name: 'Australie',
    date: '10/10/2020',
  },
  {
    id: '24sdq341c24b',
    name: 'Japon',
    date: '10/10/2019',
  },
  {
    id: '24sdq341c2d4',
    name: 'Canada',
    date: '10/10/2018',
  },
  {
    id: '24sdq341c24H',
    name: 'US',
    date: '10/10/2017',
  },
];

export default function Inventories() {
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
          <span className="inventories_section-name">{t.name}</span>
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
