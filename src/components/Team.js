import React, { Component } from 'react'
import styled from 'styled-components'

const TEAMS = [
  { id: 0, title: 'Phoenix Suns', sport: 'Basketball', emoji: '🏀' },
  { id: 1, title: 'Juventus', sport: 'Soccer', emoji: '⚽️' },
  { id: 2, title: 'Kolkata Knight Riders', sport: 'Cricket', emoji: '🏏' }
]

export default class Team extends Component {
  render() {
    const { match } = this.props
    const team = TEAMS.find(t => t.title === match.params.title)

    return (
      <TeamWrapper>
        <h3>{team.title}</h3>
        <p>{team.sport}</p>
        <p>{team.emoji}</p>
      </TeamWrapper>
    )
  }
}

const TeamWrapper = styled.div`
  h3 {
    font-size: 200%;
    margin: 20px 0;
  }
  p {
    font-size: 100%;
    margin: 10px 0;
  }
`
