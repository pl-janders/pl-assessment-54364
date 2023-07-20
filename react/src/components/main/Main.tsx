import { useEffect, useState } from 'react';
import { update } from '../../pages/home/PredictionsSlice';
import { RootState } from '../../store';
import { Fixture } from '../../types'
import Game from '../game';
import { Container, InputButton, Label } from './Main.styles';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
interface MainProps {
  fixture: Fixture
}

const Main = (props: MainProps) => {
  const [prediction, setPrediction] = useState('');
  const { fixture } = props;
  const dispatch = useDispatch()
  const predictedGames = useSelector((state: RootState) => state.predictions);

  useEffect(() => {
    const id = fixture.id;
    if(predictedGames.predictions) {
      const foundIds = predictedGames.predictions.find(o => o.id === id);
      let selection = foundIds ? foundIds.prediction : ''
      setPrediction(selection);
    }

  }, [fixture])

  const selectResult = (label: string) => {
    dispatch(update({id: fixture.id, prediction: label}))
    setPrediction(label);
  }

  return (
    <Container>
      <div>
        <Game fixture={fixture} />
        <p><b>Time:</b> {new Date(fixture.time).toLocaleString('en-GB')}  <b>Stadium:</b> {fixture.location} <b>Referee:</b> {fixture.referee}</p>
      </div>
      
      <div>
        <p>Your Prediction</p>
        <div>    
            <InputButton checked={prediction === fixture.home.label} type="radio" id="clubA" value={fixture.home.label} name="fixture" onChange={() => selectResult(fixture.home.label)}/>
            <Label htmlFor="clubA">{fixture.home.label}</Label>
     
            <InputButton checked={prediction === 'Draw'} type="radio" id="draw" value="draw" name="fixture" onChange={() => selectResult('Draw')} />
            <Label htmlFor="draw">Draw</Label>
      
            <InputButton checked={prediction === fixture.away.label}  type="radio" id="clubB" value={fixture.away.label} name="fixture" onChange={() => selectResult(fixture.away.label)}/>
            <Label htmlFor="clubB">{fixture.away.label}</Label>
        </div> 
      </div>
    </Container>
  );
};

export default Main;