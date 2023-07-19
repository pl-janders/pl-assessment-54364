
import { Fixture } from '../../types'
import { GameContainer, TeamLeft, TeamRight, Logo } from './Game.styles';

interface GameProps {
  feature: Fixture
}

const Game = (props: GameProps) => {
  const { feature } = props;

  return (
    <GameContainer>
      <TeamLeft>
        {feature.home.label}
        <Logo src={feature.home.logo} alt='logo' />
      </TeamLeft> v 
      <TeamRight>
        <Logo src={feature.away.logo} alt='logo' />
        {feature.away.label}
      </TeamRight>
    </GameContainer>
  );
};

export default Game;