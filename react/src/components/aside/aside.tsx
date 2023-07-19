import { FunctionComponent} from 'react';
import { Container, HeaderText } from './aside.styles';
import FixtureList from '../fixture-list';
import { Fixture } from '../../types'

interface AsideProps {
  headerText: string
  fixtures: Fixture[]
  selectedNewMatch: (arg0: number) => void
}

const Header: FunctionComponent<AsideProps> = ({  headerText, fixtures, selectedNewMatch }) => {
  return (
    <Container>
      <HeaderText>{headerText}</HeaderText >
      <FixtureList data={fixtures} selectedNewMatch={selectedNewMatch}/>
    </Container>
  );
};

export default Header;
