
import { Fixture } from '../../types'
import Game from '../game';
import { List, Button } from './FixtureList.styles';
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

interface FixtureListProps {
  data: Fixture[]
  selectedNewMatch: (arg0: number) => void
}

const FixtureList = (props: FixtureListProps) => {
  const predictedGames = useSelector((state: RootState) => state.predictions)
  const { data, selectedNewMatch } = props;

  const listItems = data.map((item: Fixture) => {
    const {id} = item;
    let prediction = '?';
    if(predictedGames.predictions) {
      const foundIds = predictedGames.predictions.find(o => o.id === id);
      prediction = foundIds ? foundIds.prediction : '?'
    }
    return (
      <li key={id}>
        <Button onClick={() => {selectedNewMatch(id)}}>
          <Game feature={item} />
          <p>Predicted: {prediction}</p>
        </Button>
      </li>
    )
  })

  return <List>{listItems}</List>
};

export default FixtureList;