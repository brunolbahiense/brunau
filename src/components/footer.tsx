import Link from 'next/link'
import * as S from '../styles/footer'

const Footer = () => (
  <S.Footer>
    <S.Description> Desenvolvido por </S.Description>
    <Link href="https://bluis.vercel.app/">
      <S.Bluis src="img/bluis.svg" alt="Logotipo da empresa escrito Bluis" />
    </Link>
  </S.Footer>
)

export default Footer
