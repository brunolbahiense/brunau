import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.jpg" />
    <S.DescriptionImg src="/img/total.svg" />
    <S.Note>
      SiM eSsE sItE tA fEiO <br />
      SiM fOi PrOpOsItAl <br />
      SiM vOcE fOi ApErTaDo
    </S.Note>
    <S.Link href="http://twitch.tv/pohabrunau">
      <S.TwitchImg src="/img/twitch.svg" />
    </S.Link>
  </S.Wrapper>
)

export default Main
