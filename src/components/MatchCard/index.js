import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const updatedDetails = {
    result: matchDetails.result,
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    matchStatus: matchDetails.match_status,
  }

  const {result, competingTeam, competingTeamLogo, matchStatus} = updatedDetails
  const matchStatusClassName =
    matchStatus === 'Won' ? 'won-status' : 'lost-status'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
