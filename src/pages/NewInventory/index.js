import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  assoc,
  times,
  assocPath,
  pipe,
} from 'ramda';
import Input from 'src/components/form/Input';

export default function NewInventory() {
  const [state, setState] = useState({
    inventoryName: '',
    nbBags: '',
    bags: {},
    error: null,
  });
  const handleNumberOnChange = (v) => {
    setState(assoc('error', null));
    const inputParsed = parseInt(v.target.value, 10);
    console.log(typeof inputParsed);
    if (Number.isNaN(inputParsed)) return setState(assoc('error', 'Doit être un nombre'));
    if (inputParsed > 10) return setState(pipe(assoc('error', 'Vous ne pouvez pas avoir plus de 10 bagages'), assoc('nbBags', 10)));
    else setState(assoc('nbBags', inputParsed)); 
  };

  return (
    <div className="new-inventory-section">
      <div className="new-inventory-section_title">
        Créer votre nouvelle liste
      </div>

      <form>
        <Input
          name="nameList"
          labelValue="Nom de la liste"
          type="text"
          classname="lineinput"
          placeholder="Entrez le nom de votre liste"
          inputClassName="lineinput-input"
          value={state.inventoryName}
          onChange={(v) => setState(assoc('inventoryName', v.target.value))}
        />
        <Input
          name="nbBags"
          labelValue="Nombre de sacs"
          type="text"
          classname="lineinput"
          placeholder="Entrez le nombre de sacs"
          value={state.nbBags}
          onChange={handleNumberOnChange}
          inputClassName="lineinput-input input-number"
          error={state.error}
          errorClassName="new-inventory-section_error"
        />
        {state.nbBags && times((index) => {
          console.log('');
          return (
            <Input
              labelValue={`Bagage ${index + 1}`}
              name="nbBags"
              type="text"
              classname="lineinput"
              inputClassName="lineinput-input"
              placeholder="Type de sac"
              value={state.bags[index + 1]}
              onChange={(v) => setState(assocPath(['bags', `${index + 1}`], v.target.value))}
            />
          );
        })(state.nbBags)}
      </form>
    </div>
  );
}

NewInventory.propTypes = {

};
