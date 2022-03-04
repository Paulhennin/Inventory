import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export default function Inventory({ json }) {
  const { id } = useParams();
  const inventory = json.find((list) => list.id === id);
  let list;
  if (inventory) {
    const { bags } = inventory;
    list = bags.map((bag) => {
      const { items } = bag;
      const itemList = items.map(({
        item,
        numbersToTake,
        numbersInBag,
        allInBag,
      }) => {
        console.log('');
        return (
          <>
            <span className="inventory_section_bag_items">
              <span className="inventory_section_bag_items_name">
                {item}
              </span>
              <span className={`inventory_section_bag_items_nb ${allInBag && 'allTaken'}`}>
                <span className="inventory_section_bag_items_buttons">
                  <button type="button" className="inventory_button inventory_button_add">+</button>
                  <button type="button" className="inventory_button inventory_button_minus">-</button>
                </span>

                <span className="inventory_section_bag_items_buttons_numbers">
                  <span className="inventory_section_bag_items_buttons_nbInBag">
                    {numbersInBag}
                  </span>
                  <span className="inventory_section_bag_items_buttons_nbToTake">
                    {numbersToTake}
                  </span>
                </span>

                <span className="inventory_section_bag_items_buttons">
                  <button type="button" className="inventory_button inventory_button_add">+</button>
                  <button type="button" className="inventory_button inventory_button_minus">-</button>
                </span>

              </span>
            </span>
          </>
        );
      });
      return (
        <div className="inventory_section_bag">
          <div className="inventory_section_bag_title">
            {bag.name}
          </div>
          {itemList}
        </div>
      );
    });
  }
  console.log(list);
  return (
    <>
      <div className="title">Afficher un seul inventaire PAGE</div>
      <h1>Composant : App</h1>
      <section className="inventory_section">
        {list && list}
      </section>
    </>
  );
}

Inventory.propTypes = {

};
