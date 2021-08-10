import * as S from '../styles/styles'
import Link from 'next/link'

const Hidden = () => (
  <>
    <S.Wrapper>
      <S.Header>Página secreta</S.Header>
      <S.Logo src="/img/aperta.jpg" />
      <Link href="https://rule34.xxx/">
        <S.SAC>Reclame AQUI!</S.SAC>
      </Link>
    </S.Wrapper>
  </>
)

export default Hidden
