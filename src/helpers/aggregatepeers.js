const aggregatePeers = peers => {
  const aggBrowser = name => {
    return peers.filter(p => p.runtimeInfo.name === name).length
  }
  const aggBrowser_ = name => {
    return peers.filter(
      p => !['Chrome', 'Safari', 'Firefox', 'IE'].includes(p.runtimeInfo.name)
    ).length
  }
  const agg = (field, def = 1) => {
    return peers
      .map(p => p.runtimeInfo[field] || def)
      .reduce((a, c) => a + c, 0)
  }

  const rows = []
  const peersPerCountry = {}
  peers.filter(p => p.runtimeInfo.language).forEach(peer => {
    const country = /-(.+)$/.exec(peer.runtimeInfo.language)[1].toLowerCase()
    if (peersPerCountry[country]) {
      peersPerCountry[country].push(peer)
    } else {
      peersPerCountry[country] = [peer]
    }
  })

  Object.keys(peersPerCountry).forEach(country => {
    const chrome = aggBrowser('Chrome')
    const safari = aggBrowser('Safari')
    const firefox = aggBrowser('Firefox')
    const ie = aggBrowser('IE')
    const others = aggBrowser_()
    const cpu = agg('hardwareConcurrency', 2)
    const ram = agg('deviceMemory', 4)
    rows.push({ country, chrome, safari, firefox, ie, others, cpu, ram })
  })

  const all = {
    chrome: rows.map(r => r.chrome).reduce((a, c) => a + c, 0),
    safari: rows.map(r => r.safari).reduce((a, c) => a + c, 0),
    ie: rows.map(r => r.ie).reduce((a, c) => a + c, 0),
    firefox: rows.map(r => r.firefox).reduce((a, c) => a + c, 0),
    others: rows.map(r => r.others).reduce((a, c) => a + c, 0),
    cpu: rows.map(r => r.cpu).reduce((a, c) => a + c, 0),
    ram: rows.map(r => r.ram).reduce((a, c) => a + c, 0),
  }
  return { rows, all }
}

export default aggregatePeers
