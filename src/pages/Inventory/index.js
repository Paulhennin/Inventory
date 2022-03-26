import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  addIndex,
  assoc,
  assocPath,
  compose,
  equals,
  map,
  path,
  prop,
} from 'ramda';

const mapIndexed = addIndex(map);

const handleItemChange = (item) => {
  console.log(item);
  const hiddenItem = document.getElementById(item);
  hiddenItem.classList.toggle('hidden');
};

export default function Inventory({ json }) {
  const { id } = useParams();
  const inventory = json.find((list) => list.id === id);
  const [state, setState] = useState(inventory);

  const onChangeNumber = (e, indexObject, indexContainer) => {
    console.log(e.target.name);
    setState(assocPath(['bags', indexContainer, 'items', indexObject, e.target.name], e.target.value), state);

    if (equals('numbersInBag', e.target.name)) {
      const nbToTake = path(['bags', indexContainer, 'items', indexObject, 'numbersToTake'], state);

      if (equals(e.target.value, nbToTake)) {
        console.log('coucou');
        setState(compose(
          assocPath(['bags', indexContainer, 'items', indexObject, e.target.name], e.target.value),
          assocPath(['bags', indexContainer, 'items', indexObject, 'allInBag'], true),
        )(state));
      }
      else {
        setState(compose(
          assocPath(['bags', indexContainer, 'items', indexObject, 'allInBag'], false),
        )(state));
      }
    }
  };
  console.log(state);

  const handleMaxItem = (indexObject, indexContainer, numbersToTake, item) => {
    setState(compose(
      assocPath(['bags', indexContainer, 'items', indexObject, 'numbersInBag'], numbersToTake),
      assocPath(['bags', indexContainer, 'items', indexObject, 'allInBag'], true),
    )(state));
    handleItemChange(item);
  };

  return (
    <>
      <div className="title">Afficher un seul inventaire PAGE</div>
      <h1>Composant : App</h1>
      <section className="inventory_section">
        {mapIndexed((container, indexContainer) => {
          const { items, containerName } = container;
          return (
            <>
              <div className="inventory_section_list">
                <div className="inventory_section_list_name">
                  {containerName}
                </div>
                <div className="inventory_section_list_items">
                  {mapIndexed((object, indexObject) => {
                    const {
                      item,
                      allInBag,
                      numbersInBag,
                      numbersToTake,
                    } = object;
                    return (
                      <>
                        <div className={`inventory_section_list_item ${!allInBag ? 'items_border' : ''}`} style={indexObject % 2 === 0 ? { backgroundColor: '#BBB' } : {}}>
                          <div className="inventory_section_list_item_name" onDoubleClick={() => handleItemChange(item)}>
                            {item}
                          </div>
                          <div className="inventory_section_list_item_numbers">
                            <span style={{ width: '45%', textAlign: 'center' }}>
                              {numbersInBag}
                            </span>
                            <span style={{ width: '45%', textAlign: 'center' }}>
                              {numbersToTake}
                            </span>
                          </div>
                        </div>
                        <div className="hidden" id={item}>
                          <input type="text" name="numbersInBag" placeholder={numbersInBag} onChange={(e) => onChangeNumber(e, indexObject, indexContainer)} value={numbersInBag} />
                          <input type="text" name="numbersToTake" placeholder={numbersToTake} onChange={(e) => onChangeNumber(e, indexObject, indexContainer)} value={numbersToTake} />
                          
                          <button type="button" onClick={() => handleMaxItem(indexObject, indexContainer, numbersToTake, item)}>Max</button>
                          <button type="button" onClick={() => handleItemChange(item)}>Ok</button>
                        </div>
                      </>
                    );
                  })(items)}
                </div>
              </div>
            </>
          );
        })(prop('bags', state))}
      </section>
    </>
  );
}

Inventory.propTypes = {

};
