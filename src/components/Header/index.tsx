import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

import { Timer, Scroll } from 'phosphor-react'
import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="imagem de dois triângulos verdes inclinados para a direita"
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
