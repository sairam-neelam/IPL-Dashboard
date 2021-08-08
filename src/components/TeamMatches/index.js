import {Component} from 'react'
import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchData: {},
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(updatedData)
    this.setState({isLoading: false, teamMatchData: updatedData})
  }

  renderLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderMatchCard = () => {
    const {teamMatchData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchData

    return (
      <div className="team-matches-card-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-matches-container">
          {recentMatches.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-container-${id} team-container-common`}>
        {isLoading ? this.renderLoader() : this.renderMatchCard()}
      </div>
    )
  }
}

export default TeamMatches
