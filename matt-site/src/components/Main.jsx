import React, { useState } from 'react'
import { Route, withRouter } from "react-router-dom";
import NavBar from './NavBar'
import Header from './Header'
import SportPage from './SportPage';
import '../Sass/Main.scss'

function Main() {

  const [sportData, setSportData] = useState(
    [
      {data: 'Baseball',
        sport: 'Baseball'
      },
      {data: 'Basketball',
       sport: 'Basketball'  
      },
      {data: 'Football',
       sport: 'Football'
      }
    ]

  )

  let stuff = [
    {name: "Josh",
    sport: "Baseball",
    img: ""
  },{
    name: "Chris",
    sport: "Basketball",
    img: ""
  },{
    name: "Matt",
    sport: "Football",
    img: ""
  },{
    name: "Sammie",
    sport: "Multisport",
    img: ""
  },{
    name: "Sammie",
    sport: "Other",
    img: ""
  }
]

let Baseball = [
  {
    name: 'babe ruth',
    sport: 'Baseball',
    team: 'Yankees'
},
  {
    name: 'David Ortiz',
    sport: 'Baseball',
    team: 'Red Sox'
  },
  {
    name: 'naota',
    sport: 'Baseball',
    team: 'White Sox'
  },
  {
    name: 'Josh R',
    sport: 'Baseball',
    team: 'Cardinals'
  }

]

let Basketball = [
  {
    name: 'Michael Jordan',
    sport: 'Basketball',
    team: 'Chicago Bulls'
  },
  {
    name: 'Lebron James',
    sport: 'Basketball',
    team: 'Miami Heat'
  },
  {
    name: 'Kevin Durant',
    sport: 'Basketball',
    team: 'Oklahoma Thunder'
  }

]

let Football = [
  {
    name: 'Tom Brady',
    sport: 'Football',
    team: 'Patriots'
  },
  {
    name: 'Payton Manning',
    sport: 'Football',
    team: 'Giants'
  }
]

let Multisport = [
  {
    name: 'Billie Jean',
    sport: 'Multisport',
    team: 'Patriots'
  },
  {
    name: 'Captain America',
    sport: 'Multisport',
    team: 'Giants'
  },
  {
    name: 'Iron Man',
    sport: 'Multisport',
    team: 'Giants'
  }

]

let Other = [
  {
    name: 'Jim',
    sport: 'Other',
    team: 'Patriots'
  },
  {
    name: 'Mike',
    sport: 'Other',
    team: 'Giants'
  },
  {
    name: 'Pam',
    sport: 'Other',
    team: 'Giants'
  }

]

let sports = [
  {data: Baseball,
    sport: 'Baseball'
  },
  {data: Basketball,
   sport: 'Basketball'  
  },
  {data: Football,
   sport: 'Football'
  },{
    data: Multisport,
    sport:'Multisport'
  },{
    data: Other,
    sport:'Other'
  }
]

  return (
<>
<Header/>

<NavBar data={stuff}/>
{

  stuff.map((item) => (
    <Route path={`/${item.sport}`}>
      <SportPage data={item} cards={sports.find((item2)=> (
        item2.sport === item.sport
      ))}/>
    </Route>
  ))
}

</>
  );
}

export default withRouter(Main);
