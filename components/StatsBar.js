const stats = [
  { number: '12+', label: 'Years of Excellence' },
  { number: '84', label: 'Countries Covered' },
  { number: '9.4K', label: 'Happy Travelers' },
  { number: '320', label: 'Curated Packages' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
