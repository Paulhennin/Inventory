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
            <Inventories />
          </Route>
          <Route
            key="Inventory"
            exact
            path="/inventory/:id"
          >
            <Inventory />
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
