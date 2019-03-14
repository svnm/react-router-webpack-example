import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Team from './Team'

const TEAMS = [
  { id: 0, title: 'Phoenix Suns', sport: 'Basketball', emoji: '🏀' },
  { id: 1, title: 'Juventus', sport: 'Soccer', emoji: '⚽️' },
  { id: 2, title: 'Kolkata Knight Riders', sport: 'Cricket', emoji: '🏏' }
]

export default class Teams extends Component {
  render() {
    const { match } = this.props

    return (
      <TeamsWrapper>
        <h2>Teams</h2>
        <TeamsNav>
          <nav>
            {TEAMS.map((t, i) => {
              return (
                <Link key={i} to={`${match.url}/${t.title}`}>
                  {t.title}
                </Link>
              )
            })}
          </nav>
        </TeamsNav>

        <Route path={`${match.path}/:title`} component={Team} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a team.</h3>}
        />
      </TeamsWrapper>
    )
  }
}

const TeamsWrapper = styled.div``

const TeamsNav = styled.div`
  display: flex;

  nav {
    display: flex;

    a {
      display: block;
      margin-right: 20px;
      color: black;
      text-decoration: none;
    }
  }
`
