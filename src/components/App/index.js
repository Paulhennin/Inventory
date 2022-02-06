// == Import npm
import React from 'react';
import SideBar from './SideBar';
import { Route, Switch } from 'react-router-dom';

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
            <div className="title">Home Content</div>
            <h1>Composant : App</h1>
          </Route>
          <Route
            key="Recherche"
            exact
            path="/search"
          >
            <div className="title">Recherche PAGE</div>
            <h1>Composant : App</h1>
          </Route>
          <Route
            key="Créer"
            exact
            path="/create"
          >
            <div className="title">Créer un nouvel inventaire PAGE</div>
            <h1>Composant : App</h1>
          </Route>
          <Route
            key="Inventories"
            exact
            path="/inventories"
          >
            <div className="title">Tous les inventaires PAGE</div>
            <h1>Composant : App</h1>
          </Route>
          <Route
            key="Templates"
            exact
            path="/templates"
          >
            <div className="title">Tous les templates PAGE</div>
            <h1>Composant : App</h1>
          </Route>
          <Route
            key="Favoris"
            exact
            path="/favorites"
          >
            <div className="title">Tous les templates favoris PAGE</div>
            <h1>Composant : App</h1>
          </Route>
          <Route
            key="Paramètres"
            exact
            path="/settings"
          >
            <div className="title">Paramètres PAGE</div>
            <h1>Composant : App</h1>
          </Route>
          <Route
            key="Profil"
            exact
            path="/myProfil"
          >
            <div className="title">Profil utilisateur PAGE</div>
            <h1>Composant : App</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
