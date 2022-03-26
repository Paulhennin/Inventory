import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  assoc,
  times,
  assocPath,
  pipe,
  map
} from 'ramda';
import Input from 'src/components/form/Input';
import ChasingLightButtons from 'src/components/buttons/ChasingLightButtons';

const formatedData = (state) => {
  const { bags, inventoryName } = state;
  const bagsNames = Object.values(bags);
  const data = {
    name: inventoryName,
    bags: map((bag) => {
      console.log('');
      return {
        name: bag,
      };
    })(bagsNames),
  };
  console.log(data);
};
export default function NewInventory() {
  const [state, setState] = useState({
    inventoryName: '',
    nbBags: 0,
    bags: {},
    error: false,
    errorMessage: undefined,
  });
  const [showNbBags, setShowNbBags] = useState(false);

  const handleNumberOnChange = (v) => {
    setShowNbBags(false);
    setState(assoc('error', false));
    const inputParsed = parseInt(v.target.value, 10);
    if (inputParsed === 0) return setState(assoc('nbBags', inputParsed));
    if (Number.isNaN(inputParsed)) return setState(pipe(assoc('error', true), assoc('errorMessage', 'Doit être un nombre')));
    if (inputParsed > 10) return setState(pipe(assoc('error', true), assoc('errorMessage', 'Vous ne pouvez pas avoir plus de 10 bagages'), assoc('nbBags', 10)));
    setState(assoc('nbBags', inputParsed));
    setShowNbBags(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ça fait rien pour le moment !');
    const mergedData = formatedData(state);
    console.log(mergedData);
  };
  console.log(state);
  return (
    <div className="new-inventory-section">
      <div className="new-inventory-section_title">
        Créer votre nouvelle liste
      </div>

      <form className="new-inventory-section_form">
        <div className="new-inventory-section_form_mainblock">
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
            type="number"
            classname="lineinput"
            placeholder="Entrez le nombre de sacs"
            value={state.nbBags}
            onChange={handleNumberOnChange}
            // onChange={(v) => setState(assoc('nbBags', v.target.value))}
            inputClassName="lineinput-input input-number"
            error={state.error}
            errorMessage={state.errorMessage}
            errorClassName="new-inventory-section_error"
            validate={{ min: 0, max: 10 }}
          />
        </div>
        <div className="new-inventory-section_form_secondblock">
          {state.nbBags ? times((index) => {
            console.log('');
            return (
              <Input
                labelValue={`Bagage ${index + 1}`}
                name={`${index + 1}`}
                type="text"
                classname="lineinput_second"
                inputClassName="lineinput-input_second"
                blocClassName="lineinput_block"
                placeholder="Type de rangement"
                value={state.bags[index + 1]}
                onChange={(v) => setState(assocPath(['bags', `${index + 1}`], v.target.value))}
              />
            );
          })(state.nbBags) : ''}
        </div>
        <div className="new-inventory-section_form_buttonblock">
          <ChasingLightButtons click={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

NewInventory.propTypes = {

};
