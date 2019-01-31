import React from 'react'
import PropTypes from 'prop-types'

const putMembers = members => {
  return members.map(member => {
    const { avatar, name, role } = member
    return (
      <div key={name} class="user-w with-status status-green">
        <div class="user-avatar-w">
          <div class="user-avatar">
            <img alt="" src={avatar} />
          </div>
        </div>
        <div class="user-name">
          <h6 class="user-title">{name}</h6>
          <div class="user-role">{role}</div>
        </div>
      </div>
    )
  })
}

const TeamMembersPanel = ({ members }) => {
  return (
    <div class="element-wrapper">
      <h6 class="element-header">Team Members</h6>
      <div class="element-box-tp">
        <div class="input-search-w">
          <input
            class="form-control rounded bright"
            placeholder="Search team members..."
            type="search"
          />
        </div>
        <div class="users-list-w">{putMembers(members)}</div>
      </div>
    </div>
  )
}

TeamMembersPanel.propTypes = {
  members: PropTypes.array.isRequired,
}

export default TeamMembersPanel
