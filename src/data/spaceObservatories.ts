export const spaceObservatories = {
  telescopes: [
    {
      name: 'James Webb Space Telescope',
      image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/webb_banner.jpg',
      description: 'The largest and most powerful space telescope ever built, observing the universe in infrared.',
      specs: [
        'Launch: December 25, 2021',
        'Primary Mirror: 6.5 meters',
        'Location: L2 Lagrange Point',
        'Wavelength Coverage: 0.6-28 micrometers',
        'Operating Temperature: -233°C',
        'Sun Shield: 21.197 x 14.162 meters',
        'Expected Lifetime: 5-10 years',
        'Cost: $10 billion',
        '18 hexagonal mirror segments',
        'Distance from Earth: 1.5 million km'
      ],
      capabilities: [
        'Observing first galaxies',
        'Studying exoplanet atmospheres',
        'Detecting biosignatures',
        'Imaging protoplanetary disks',
        'Analyzing cosmic chemistry'
      ]
    },
    {
      name: 'Hubble Space Telescope',
      image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_latest.jpg',
      description: "NASA's flagship space telescope, operating since 1990 and revolutionizing our view of the cosmos.",
      specs: [
        'Launch: April 24, 1990',
        'Primary Mirror: 2.4 meters',
        'Orbit: 540 km altitude',
        'Resolution: 0.04 arcseconds',
        'Wavelength Range: UV to NIR',
        'Weight: 11,110 kg',
        '5 major servicing missions',
        'Over 1.5 million observations',
        'Over 19,000 peer-reviewed papers',
        'Cost: $4.7 billion (initial)'
      ],
      discoveries: [
        'Age of the universe',
        'Black hole confirmation',
        'Exoplanet atmospheres',
        'Galaxy evolution',
        'Dark energy evidence'
      ]
    }
  ],
  
  satellites: [
    {
      name: 'International Space Station',
      image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/iss064e027012.jpg',
      description: 'The largest human-made object in space, serving as a microgravity and space environment research laboratory.',
      specs: [
        'Length: 109 meters',
        'Width: 51 meters',
        'Mass: 419,725 kg',
        'Orbital Height: 408 km',
        'Speed: 7.66 km/s',
        'Crew Size: Up to 7',
        'Assembly Start: 1998',
        'Continuous Human Presence: 20+ years',
        'Cost: >$150 billion',
        'Partners: 15 nations'
      ],
      research: [
        'Microgravity experiments',
        'Human physiology studies',
        'Earth observation',
        'Space technology testing',
        'Educational outreach'
      ]
    },
    {
      name: 'Starlink Satellites',
      image: 'https://www.spacex.com/static/images/starlink/STARLINK_MOBILE.jpg',
      description: "SpaceX's satellite internet constellation providing global broadband coverage.",
      specs: [
        'Mass: 260 kg each',
        'Orbit: 550 km',
        'Lifespan: 5-7 years',
        'Total Planned: 42,000',
        'Currently in Orbit: >4,000',
        'Internet Speed: 100-200 Mbps',
        'Latency: 20-40 ms',
        'Solar Array Power: 2.2 kW',
        'Autonomous collision avoidance',
        'Cost per Satellite: ~$250,000'
      ]
    }
  ]
};