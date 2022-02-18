import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineSearch, MdOutlineSpaceDashboard, MdFolderSpecial } from 'react-icons/md';
import {
  BiHeart,
  BiCog,
  BiLogOut,
} from 'react-icons/bi';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { FaToolbox } from 'react-icons/fa';

import profile from 'src/assets/profile.png';

export default function SideBar() {
  const handleSideBarClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  };

  const handleSearchBarClick = () => {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar.classList.contains('active')) {
      sidebar.classList.add('active');
    }
    const searchFocus = document.querySelector('.input_search');
    searchFocus.focus();
  };

  const logOut = (e) => {
    e.preventDefault();
    console.log('LogOut futur');
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo_content" onClick={handleSideBarClick}>
          <Link
            className=""
            to="/"
            key="Dashboard"
          >
            <div className="logo">
              <MdOutlineSpaceDashboard className="react_icons" />
              <div className="logo_name">Dashboard</div>
            </div>
          </Link>
          <GiHamburgerMenu className="" id="sidebar_btn" />
        </div>
        <ul className="nav_list">
          <li className="search_link">
            <form>
              <label htmlFor="search" className="nav_items">
                <MdOutlineSearch className="react_icons react_icons_search" onClick={handleSearchBarClick} />
                <input type="text" placeholder="Recherche..." className="input_search" name="search" />
                <span className="tooltip">Search</span>
              </label>
            </form>
          </li>
          <NavLink
            className="nav_items"
            activeClassName="nav_items-active"
            to="/create"
            key="Créer"
          >
            <BsPlusCircleDotted className="react_icons" />
            <span className="links_name">Créer</span>
            <span className="tooltip">Créer</span>
          </NavLink>
          <NavLink
            className="nav_items"
            activeClassName="nav_items-active"
            to="/inventories"
            key="/Inventaires"
          >
            <MdFolderSpecial className="react_icons" />
            <span className="links_name">Inventaires</span>
            <span className="tooltip">Inventaires</span>
          </NavLink>
          <NavLink
            className="nav_items"
            activeClassName="nav_items-active"
            to="/templates"
            key="Templates"
          >
            <FaToolbox className="react_icons" />
            <span className="links_name">Templates</span>
            <span className="tooltip">Templates</span>
          </NavLink>
          <NavLink
            className="nav_items"
            activeClassName="nav_items-active"
            to="/favorites"
            key="favs"
          >
            <BiHeart className="react_icons" />
            <span className="links_name">Favs</span>
            <span className="tooltip">Favs</span>
          </NavLink>

          <NavLink
            className="nav_items"
            activeClassName="nav_items-active"
            to="/settings"
            key="Paramètres"
          >
            <BiCog className="react_icons" />
            <span className="links_name">Settings</span>
            <span className="tooltip">Settings</span>
          </NavLink>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <Link
              className=""
              to="/myProfil"
              key="Mon Profil"
            >
              <div className="profile_details">
                <img src={profile} alt="yourself" className="profile_logo" />
                <div className="name_job">
                  <div className="name">Paul Hennin</div>
                  <div className="job"> Web Designer</div>
                </div>
              </div>
            </Link>
            <Link to="/" key="logout">
              <BiLogOut className="react_icons" id="log_out" onClick={logOut} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

SideBar.propTypes = {

};
