import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import aggregatePeers from '../../helpers/aggregatepeers'

const n = number => numeral(number).format('0,0')
const putRows = rows => {
  let i = 0
  return rows.map(row => {
    const { chrome, safari, ie, firefox, others, cpu, ram } = row
    return (
      <tr key={i++}>
        <td class="text-center">
          <img
            alt=""
            src={require(`../../assets/flags-icons/${row.country}.png`)}
            width="25px"
          />
        </td>
        <td class="text-center">{n(chrome)}</td>
        <td class="text-center">{n(safari)}</td>
        <td class="text-center">{n(ie)}</td>
        <td class="text-center">{n(firefox)}</td>
        <td class="text-center">{n(others)}</td>
        <td class="text-center">{n(cpu)} Cores</td>
        <td class="text-center">{n(ram)} GBs</td>
      </tr>
    )
  })
}

const PeersPanel = ({ peers }) => {
  const { rows, all } = aggregatePeers(peers)

  return (
    <div class="element-wrapper">
      <h6 class="element-header">Geo-Distribution</h6>
      <div class="element-box-tp">
        <div class="controls-above-table">
          <div class="row">
            <div class="col-sm-6">
              <a class="btn btn-sm btn-secondary" href="#">
                New Cluster
              </a>
            </div>
            <div class="col-sm-6">
              <form class="form-inline justify-content-sm-end">
                <select class="form-control form-control-sm rounded bright">
                  <option value="">Select Region</option>
                  <option value="us">United States</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-lg table-v2 table-striped">
            <thead>
              <tr>
                <th>Region</th>
                <th>Chrome</th>
                <th>Safari</th>
                <th>IE</th>
                <th>Firefox</th>
                <th>Others</th>
                <th>Σ CPU</th>
                <th>Σ RAM</th>
              </tr>
            </thead>
            <tbody>{putRows(rows)}</tbody>
            <tfoot>
              <tr>
                <td />
                <td class="text-center">{n(all.chrome)}</td>
                <td class="text-center">{n(all.safari)}</td>
                <td class="text-center">{n(all.ie)}</td>
                <td class="text-center">{n(all.firefox)}</td>
                <td class="text-center">{n(all.others)}</td>
                <td class="text-center">{n(all.cpu)} Total Cores</td>
                <td class="text-center">{n(all.ram)} Total GBs</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="controls-below-table">
          <div class="table-records-info">
            Showing records 1 - {rows.length}
          </div>
        </div>
      </div>
    </div>
  )
}

PeersPanel.propTypes = {
  peers: PropTypes.array.isRequired,
}

export default PeersPanel
