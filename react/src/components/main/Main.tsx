import { update } from '../../pages/home/PredictionsSlice';
import { Fixture } from '../../types'
import Game from '../game';
import { Container, InputButton, Label } from './Main.styles';
import { useDispatch } from 'react-redux'

interface MainProps {
  fixture: Fixture
}

const Main = (props: MainProps) => {
  const { fixture } = props;
  const dispatch = useDispatch()
  
  return (
    <Container>
      <div>
        <Game feature={fixture} />
        <p><b>Time:</b> {new Date(fixture.time).toLocaleString('en-GB')}  <b>Stadium:</b> {fixture.location} <b>Referee:</b> {fixture.referee}</p>
      </div>
      
      <div>
        <p>Your Prediction</p>
        <div>    
            <InputButton type="radio" id="clubA" value={fixture.home.label} name="fixture" onClick={() => dispatch(update({id:fixture.id, prediction: fixture.home.label}))}/>
            <Label htmlFor="clubA">{fixture.home.label}</Label>
     
            <InputButton type="radio" id="draw" value="draw" name="fixture" onClick={() => dispatch(update({id:fixture.id, prediction: 'Draw'}))} />
            <Label htmlFor="draw">Draw</Label>
      
            <InputButton type="radio" id="clubB" value={fixture.away.label} name="fixture" onClick={() => dispatch(update({id:fixture.id, prediction: fixture.away.label}))}/>
            <Label htmlFor="clubB">{fixture.away.label}</Label>
        </div> 
      </div>
    </Container>
  );
};

export default Main;