import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { assoc, times, assocPath } from 'ramda';
import validate from './lib/validate'
import Input from 'src/components/form/Input';

export default function NewInventory() {
  const [state, setState] = useState({
    inventoryName: '',
    nbBags: null,
    bags: {},
    error: null,
  });

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
          value={state.inventoryName}
          onChange={(v) => setState(assoc('inventoryName', v.target.value))}
        />
        <Input
          name="nbBags"
          labelValue="Nombre de sacs"
          type="number"
          classname="lineinput"
          placeholder="Entrez le nombre de sacs"
          value={state.nbBags}
          onChange={(v) => validate(v, 'nbBags', setState)}
          error={state.error}
        />
        {state.nbBags && times(index => {
          console.log('');
          return (
            <Input
              labelValue={`Bagage ${index + 1}`}
              name="nbBags"
              type="text"
              classname="lineinput"
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
