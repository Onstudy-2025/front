import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface ComponentProps {
  icon: ReactNode;
  title: string;
  getStyle: (isActive: boolean) => string;
  link: string;
}

export const NavButton: FC<ComponentProps> = (props) => {
  const { icon, title, getStyle, link } = props;

  return (
    <NavLink className={({ isActive }) => getStyle(isActive)} to={link}>
      {icon}
      <p>{title}</p>
    </NavLink>
  );
};
