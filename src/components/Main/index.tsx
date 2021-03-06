import Link from 'next/link'
import * as S from '../../styles/styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.jpg" />
    <S.Description>
      Total de dias de Brunau SEM apertar a mente de alguém: 0
    </S.Description>
    <S.Note>
      SiM eSsE sItE tA fEiO <br />
      SiM fOi PrOpOsItAl <br />
      SiM vOcE fOi <Link href="/saco">ApErTaDo</Link>
    </S.Note>
    <S.Link href="http://twitch.tv/pohabrunau">
      <S.TwitchImg src="/img/twitch.svg" />
    </S.Link>
  </S.Wrapper>
)

export default Main
