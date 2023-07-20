
import { Fixture } from '../../types'
import { GameContainer, TeamLeft, TeamRight, Logo } from './Game.styles';

interface GameProps {
  fixture: Fixture
}

const Game = (props: GameProps) => {
  const { fixture } = props;

  return (
    <GameContainer>
      <TeamLeft>
        {fixture.home.label}
        <Logo src={fixture.home.logo} alt='logo' />
      </TeamLeft> v 
      <TeamRight>
        <Logo src={fixture.away.logo} alt='logo' />
        {fixture.away.label}
      </TeamRight>
    </GameContainer>
  );
};

export default Game;