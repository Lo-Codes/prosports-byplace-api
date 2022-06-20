const express = require('express')
const app = express()
const cors = require ('cors')
const PORT = 8000

app.use(cors())

const state = {
    'Alabama': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Alaska': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Arizona': {
        'baseball': 'Arizona Diamondbacks',
        'hockey': 'Arizona Coyotes',
        'basketball': 'Phoenix Suns',
        'football': 'Arizona Cardinals'
    },
    'Arkansas': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'California': {
        'baseball': 'San Diego Padres, Los Angeles Angels of Anaheim, Los Angeles Dodgers, Oakland Athletics, San Fransisco Giants',
        'hockey': 'Anaheim Ducks, Los Angeles Kings, San Jose Sharks',
        'basketball': 'Los Angeles Clippers, Los Angeles Lakers, Sacramento Kings, Golden State Warriors',
        'football': 'Los Angeles Chargers, Los Angeles Rams, San Fransisco Giants'
    },
    'Colorado': {
        'baseball': 'Colorado Rockies',
        'hockey': 'Colorado Avalanche',
        'basketball': 'Denver Nuggets',
        'football': 'Denver Broncos'
    },
    'Connecticut': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Delaware': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Florida': {
        'baseball': 'Florida Marlins, Tampa Bay Rays',
        'hockey': 'Florida Panthers, Tampa Bay Lightning',
        'basketball': 'Miami Heat, Orlando Magic',
        'football': 'Jacksonville Jaguars, Miami Dolphins, Tampa Bay Buccaneers'
    },
    'Georgia': {
        'baseball': 'Atlanta Braves',
        'hockey': 'none',
        'basketball': 'Atlanta Hawks',
        'football': 'Atlanta Falcons'
    },
    'Hawaii': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Idaho': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Illinois': {
        'baseball': 'Chicago Cubs, Chicago White Sox',
        'hockey': 'Chicago Blackhawks',
        'basketball': 'Chicago Bulls',
        'football': 'Chicago Bears'
    },
    'Indiana': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'Indiana Pacers',
        'football': 'Indianapolis Colts'
    },
    'Iowa': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Kansas': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Kentucky': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Louisiana': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'New Orleans Pelicans',
        'football': 'New Orleans Saints'
    },
    'Maine': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Maryland': {
        'baseball': 'Baltimore Orioles',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'Baltimore Ravens, Washington Commanders*, *=based in Washington Metropoltian area play in Maryland'
    },
    'Massachusetts': {
        'baseball': 'Boston Red Sox',
        'hockey': 'Boston Bruins',
        'basketball': 'Boston Celtics',
        'football': 'New England Patriots'
    },
    'Michigan': {
        'baseball': 'Detroit Tigers',
        'hockey': 'Detroit Red Wings',
        'basketball': 'Detroit Pistons',
        'football': 'Detroit Lions'
    },
    'Minnesota': {
        'baseball': ' Minnesota Twins',
        'hockey': 'Minnesota Wild',
        'basketball': 'Minnesota Timberwolves',
        'football': 'Minnesota Vikings'
    },
    'Mississippi': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Missouri': {
        'baseball': 'Kansas City Royals, St.Louis Cardinals',
        'hockey': 'St.Louis Blues',
        'basketball': 'none',
        'football': 'Kansas City Chiefs'
    },
    'Montana': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Nebraska': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Nevada': {
        'baseball': 'none',
        'hockey': 'Vegas Golden Knights',
        'basketball': 'none',
        'football': 'Las Vegas Raiders'
    },
    'New Hampshire': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'New Jersey': {
        'baseball': 'none',
        'hockey': 'New Jersey Devils',
        'basketball': 'none',
        'football': 'New York Giants*, New York Jets*, *=New York Metropolitan teams that play in New Jersey'
    },
    'New Mexico': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'New York': {
        'baseball': 'New York Mets, New York Yankees',
        'hockey': 'Buffalo Sabres, New York Islanders, New York Rangers',
        'basketball': 'Brooklyn Nets, New York Knicks',
        'football': 'Buffalo Bills, New York Giants*, New York Jets*, *=Teams play in New Jersey'
    },
    'North Carolina': {
        'baseball': 'none',
        'hockey': 'Carolina Hurricanes',
        'basketball': 'Charlotte Hornets',
        'football': 'Carolina Panthers'
    },
    'North Dakota': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Ohio': {
        'baseball': 'Cincinnati Reds, Cleveland Guardians',
        'hockey': 'Columbus Blue Jackets',
        'basketball': 'Cleveland Cavaliers',
        'football': 'Cincinnati Bengals, Cleveland Browns'
    },
    'Oklahoma': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'Oklahoma City Thunder',
        'football': 'none'
    },
    'Oregon': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'Portland Trail Blazers',
        'football': 'none'
    },
    'Pennsylvania': {
        'baseball': 'Philadelphia Phillies, Pittsburgh Pirates',
        'hockey': 'Philadelphia Flyers, Pittsburgh Penguins',
        'basketball': 'Philadelphia 76ers',
        'football': 'Philadelphia Eagles, Pittsburgh Steelers'
    },
    'Rhode Island': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'South Carolina': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'South Dakota': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Tennessee': {
        'baseball': 'none',
        'hockey': 'Nashville Predators',
        'basketball': 'Memphis Grizzlies',
        'football': 'Tennessee Titans'
    },
    'Texas': {
        'baseball': 'Houston Astros, Texas Rangers',
        'hockey': 'Dallas Stars',
        'basketball': 'Dallas Mavericks, Houston Rockets, San Antonio Spurs',
        'football': 'Dallas Cowboys, Houston Texans'
    },
    'Utah': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'Utah Jazz',
        'football': 'none'
    },
    'Vermont': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Virginia': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Washington': {
        'baseball': 'Seattle Mariners',
        'hockey': 'Seattle Kraken',
        'basketball': 'none',
        'football': 'Seattle Seahawks'
    },
    'Washington D.C.': {
        'baseball': 'Washington Nationals',
        'hockey': 'Washington Capitals',
        'basketball': 'Washington Wizards',
        'football': 'Washington Commanders*, *=play in Maryland'
    },
    'West Virginia': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Wisconsin': {
        'baseball': 'Milwaukee Brewers',
        'hockey': 'none',
        'basketball': 'Milwaukee Bucks',
        'football': 'Green Bay Packers'
    },
    'Wyoming': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    },
    'Canada': {
        'baseball': 'Toronto Blue Jays',
        'hockey': 'Calgary Flames, Edmonton Oilers, Montreal Canadiens, Ottawa Senators, Toronto Maple Leafs, Winnipeg Jets, Vancouver Canucks',
        'basketball': 'Toronto Raptors',
        'football': 'none'
    },
    'unkown': {
        'baseball': 'none',
        'hockey': 'none',
        'basketball': 'none',
        'football': 'none'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')   
})

app.get('/api/:name',(request,response)=>{
    const stateName = request.params.name.toLowerCase()
    if(state [stateName] ){
        response.json(state [stateName] )
    }else{
        response.json(state['none'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})