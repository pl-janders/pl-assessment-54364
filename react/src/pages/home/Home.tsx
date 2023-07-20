import { useCallback, useEffect, useState } from 'react'
import { Fixture } from '../../types'
//import axios from 'axios'

import Header from '../../components/header'
import Aside from '../../components/aside'
import Main from '../../components/main'

import { fixtures } from '../../data';
import { GridContainer, Grid } from './Home.styles'

function Home() {
  const fixtureData: Fixture[] = fixtures;
//   const fetchFixtures = async () => {
//     const response = await axios.get("http://localhost:3000/");
//     if (response && response.data) console.log(response);
//   }

//   useEffect(() => {
//     void fetchFixtures()
//   }, []);

  const [activeGame, setActiveGame] = useState<Fixture>(fixtureData[0])
  
  const updateMainSection = useCallback((newMatchId: number) => {
    const newMatch: Fixture | undefined = fixtureData.find(x => x.id === newMatchId )
    if (newMatch) {
      setActiveGame(newMatch); 
    }
  }, [fixtureData]);

  return (
    <GridContainer>
      <Header text="Fixture Predictor" />
      <Grid>
        <Aside headerText="Premier League" fixtures={fixtureData} selectedNewMatch={updateMainSection} />
        <Main fixture={activeGame}/>
      </Grid>
    </GridContainer>  
  )
}
export default Home
