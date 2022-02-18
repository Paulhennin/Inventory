import { assoc } from 'ramda';

export default function (v, key, setState) {
  setState(assoc('error', null));
  const input = v.target.value;
  if (typeof input === 'number') {
    setState(assoc(key, input));
  }
  else {
    setState(assoc('error', 'Doit être un nombre'));
  }
}
