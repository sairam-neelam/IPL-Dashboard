import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedMatchDetails

  return (
    <div className="latest-match-card">
      <div className="left-container">
        <div className="match-details-container">
          <p className="latest-match-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="match-info">{venue}</p>
          <p className="match-info">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-competing-team-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="match-stat-container2">
        <div className="match-stat-container">
          <p className="stat-heading">First Innings</p>
          <p className="stat">{firstInnings}</p>
          <p className="stat-heading">Second Innings</p>
          <p className="stat">{secondInnings}</p>
          <p className="stat-heading">Man Of The Match</p>
          <p className="stat">{manOfTheMatch}</p>
          <p className="stat-heading">Umpires</p>
          <p className="stat">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch

/* <div className="match-stat-container2">{renderStatContainer()}</div> 
const renderStatContainer = () => (
    <div className="match-stat-container">
      <p className="stat-heading">First Innings</p>
      <p className="stat">{firstInnings}</p>
      <p className="stat-heading">Second Innings</p>
      <p className="stat">{secondInnings}</p>
      <p className="stat-heading">Man Of The Match</p>
      <p className="stat">{manOfTheMatch}</p>
      <p className="stat-heading">Umpires</p>
      <p className="stat">{umpires}</p>
    </div>
  ) */
