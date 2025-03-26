import { NavLink, Outlet } from "react-router-dom";
import s from './Root.module.css'

export const Root = () => {
    return (
      <>
        <ul>
            <li>
              <NavLink to={'/login'}>login</NavLink>
            </li>
            <li>
              <NavLink to={'/register'}>register</NavLink>
            </li>
        </ul>
        <nav className={s.div}>
          <NavLink className={({ isActive, isPending }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'Todo'}>
            ToDo
          </NavLink>
          <NavLink className={({ isActive, isPending }) => isActive ? s.active : isPending ? s.loading : s.btn} to={'Notes'}>
            Notes
          </NavLink>
        </nav>
        <div>
          <Outlet />
        </div>
      </>
    )
  };