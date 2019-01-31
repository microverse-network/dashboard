import React from 'react'
import faker from 'faker'

const avatar = faker.image.avatar()
const name = faker.name.findName()

const UserMenu = () => {
  return (
    <div class="logged-user-w">
      <div class="logged-user-i">
        <div class="avatar-w">
          <img alt="" src={avatar} />
        </div>
        <div class="logged-user-info-w">
          <div class="logged-user-name">{name}</div>
          <div class="logged-user-role">Administrator</div>
        </div>
        <div class="logged-user-menu">
          <div class="logged-user-avatar-info">
            <div class="avatar-w">
              <img alt="" src={avatar} />
            </div>
            <div class="logged-user-info-w">
              <div class="logged-user-name">{name}</div>
              <div class="logged-user-role">Administrator</div>
            </div>
          </div>
          <div class="bg-icon">
            <i class="os-icon os-icon-wallet-loaded" />
          </div>
          <ul>
            <li>
              <a href="users_profile_small.html">
                <i class="os-icon os-icon-coins-4" />
                <span>Billing Details</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="os-icon os-icon-others-43" />
                <span>Notifications</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="os-icon os-icon-signs-11" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
