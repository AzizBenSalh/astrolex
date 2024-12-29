import { Link } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
  mobile?: boolean;
  dropdownItems?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

export function NavLink({ href, label, active, mobile, dropdownItems }: NavLinkProps) {
  const baseStyles = active
    ? "text-white"
    : "text-gray-300 hover:text-purple-400";
    
  const mobileStyles = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium"
    : "px-3 py-2 rounded-md text-sm font-medium";

  const link = (
    <Link to={href} className={`${baseStyles} ${mobileStyles}`}>
      {label}
    </Link>
  );

  if (dropdownItems && !mobile) {
    return (
      <NavDropdown items={dropdownItems}>
        {link}
      </NavDropdown>
    );
  }

  return link;
}