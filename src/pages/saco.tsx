import * as S from '../styles/styles'
import Link from 'next/link'

const SAC = () => (
  <>
    <S.Wrapper>
      <S.Header>Bem vindo ao S.A.C.O</S.Header>
      <S.Subtitle>Serviço de Atendimento ao Cidadão Oprimido</S.Subtitle>
      <Link href="/">
        <S.Logo src="/img/aperta.jpg" />
      </Link>
      <Link href="https://rule34.xxx/">
        <S.SAC>Reclame AQUI!</S.SAC>
      </Link>
    </S.Wrapper>
  </>
)

export default SAC
