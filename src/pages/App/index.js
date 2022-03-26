// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import Inventories from '../Inventories';
import NewInventory from '../NewInventory';
import Profil from '../Profil';
import Settings from '../Settings';
import Templates from '../Templates';
import Inventory from '../Inventory';
import Home from '../Home';
import Search from '../Search';
import Favorites from '../Favorites';

const json = [
  {
    id: '24sdq341c24s',
    name: 'Rome',
    date: '10/10/2021',
    bags: [
      {
        containerName: 'Sac à dos',
        items: [
          {
            item: 'PC',
            numbersToTake: '1',
            numbersInBag: '1',
            allInBag: true,
          },
          {
            item: 'Caleçon',
            numbersToTake: '8',
            numbersInBag: '4',
            allInBag: false,
          },
          {
            item: 'Chaussettes',
            numbersToTake: '8',
            numbersInBag: '8',
            allInBag: true,
          },
        ],
      },
      {
        containerName: 'Valise',
        items: [
          {
            item: 'Pulls',
            numbersToTake: '8',
            numbersInBag: '4',
            allInBag: false,
          },
          {
            item: 'Tee-shirts',
            numbersToTake: '8',
            numbersInBag: '8',
            allInBag: true,
          },
        ],
      },
      {
        containerName: 'Sac à dos',
        items: [
          {
            item: 'cables',
            numbersToTake: '8',
            numbersInBag: '8',
            allInBag: true,
          },
        ],
      },
    ],
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

// == Composant
export default function App() {
  return (
    <div className="">
      <SideBar />
      <div className="main">
        <Switch>
          <Route
            key="Home"
            exact
            path="/"
          >
            <Home />
          </Route>
          <Route
            key="Recherche"
            exact
            path="/search"
          >
            <Search />
          </Route>
          <Route
            key="Créer"
            exact
            path="/create"
          >
            <NewInventory />
          </Route>
          <Route
            key="Inventories"
            exact
            path="/inventories"
          >
            <Inventories
              json={json}
            />
          </Route>
          <Route
            key="Inventory"
            exact
            path="/inventory/:id"
          >
            <Inventory
              json={json}
            />
          </Route>
          <Route
            key="Templates"
            exact
            path="/templates"
          >
            <Templates />
          </Route>
          <Route
            key="Favoris"
            exact
            path="/favorites"
          >
            <Favorites />
          </Route>
          <Route
            key="Paramètres"
            exact
            path="/settings"
          >
            <Settings />
          </Route>
          <Route
            key="Profil"
            exact
            path="/myProfil"
          >
            <Profil />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
