import { Link } from "react-router-dom";
import { Logo } from "../Logo";

interface HeaderProps {
  onOpenModal: () => void;
  onRequestClose: () => void;
  modalIsOpen: boolean;
}

export function Header({ onOpenModal, modalIsOpen, onRequestClose }: HeaderProps) {
  const genericHamburgerLine = 'block my-1 w-6 h-0.5 bg-blue-500 rounded-full transform transition duration-500 ease-in-out'

  return (
    <header
      className="w-full p-5 flex items-center justify-between md:justify-center
      bg-gray-700 border-b border-gray-600">
      <Link to="/" className="flex items-center justify-between">
        <Logo />
      </Link>
      <div className="flex md:hidden items-center gap-2">
        <span className="text-sm text-gray-100">Aulas</span>
        <div
            className="flex flex-col justify-center items-center cursor-pointer"
            onClick={!modalIsOpen ? onOpenModal : onRequestClose}
          >
            <span 
              aria-hidden="true"
              className={`${genericHamburgerLine} ${modalIsOpen ? 'rotate-45 translate-y-2.5' : ''}`}
            />
            <span 
              aria-hidden="true"
              className={`${genericHamburgerLine} ${modalIsOpen ? 'opacity-0' : ''}`}
            />
            <span 
              aria-hidden="true"
              className={`${genericHamburgerLine} ${modalIsOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
            />
          </div>
      </div>
    </header>
  )
}
