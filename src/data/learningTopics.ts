export const learningTopics = {
  fundamentals: {
    title: 'Astronomy Fundamentals',
    topics: [
      {
        id: 'celestial-mechanics',
        title: 'Celestial Mechanics',
        description: 'Understanding the motion of celestial bodies and the forces that govern them.',
        subtopics: [
          {
            title: "Kepler's Laws",
            content: `Kepler's three laws of planetary motion form the foundation of orbital mechanics:
              1. Planets move in elliptical orbits with the Sun at one focus
              2. A line joining a planet and the Sun sweeps out equal areas in equal times
              3. The square of a planet's orbital period is proportional to the cube of its semi-major axis`,
            mathematics: [
              'Elliptical orbit equations',
              'Angular momentum conservation',
              'Orbital period calculations'
            ],
            applications: [
              'Satellite orbit prediction',
              'Interplanetary mission planning',
              'Exoplanet detection methods'
            ]
          },
          {
            title: 'Gravitational Forces',
            content: `Newton's law of universal gravitation explains the attractive force between masses:
              F = G(m₁m₂)/r², where G is the gravitational constant`,
            mathematics: [
              'Gravitational field equations',
              'Escape velocity calculations',
              'Tidal force analysis'
            ],
            applications: [
              'Spacecraft trajectory planning',
              'Tidal effect predictions',
              'Galaxy rotation curves'
            ]
          }
        ]
      },
      {
        id: 'astronomical-coordinates',
        title: 'Astronomical Coordinate Systems',
        description: 'Systems used to locate celestial objects in the sky.',
        subtopics: [
          {
            title: 'Celestial Sphere',
            content: 'The apparent projection of celestial objects onto an imaginary sphere surrounding Earth',
            concepts: [
              'Right ascension and declination',
              'Altitude and azimuth',
              'Celestial equator and poles'
            ]
          },
          {
            title: 'Time Systems',
            content: 'Different time scales used in astronomy',
            types: [
              'Sidereal time',
              'Solar time',
              'Universal Time Coordinated (UTC)'
            ]
          }
        ]
      }
    ]
  },
  
  astrophysics: {
    title: 'Astrophysics',
    topics: [
      {
        id: 'stellar-physics',
        title: 'Stellar Physics',
        description: 'The physics governing star formation, evolution, and death.',
        subtopics: [
          {
            title: 'Nuclear Fusion',
            content: 'The process powering stars through nuclear fusion of hydrogen into helium',
            physics: [
              'Proton-proton chain',
              'CNO cycle',
              'Energy generation rates'
            ],
            mathematics: [
              'Nuclear binding energy',
              'Reaction cross-sections',
              'Temperature dependence'
            ]
          },
          {
            title: 'Stellar Evolution',
            content: 'The life cycles of stars from birth to death',
            stages: [
              'Protostellar phase',
              'Main sequence',
              'Red giant phase',
              'Final stages (white dwarf, neutron star, or black hole)'
            ]
          }
        ]
      },
      {
        id: 'cosmology',
        title: 'Cosmology',
        description: 'Study of the universe origin, evolution, and large-scale structure.',
        subtopics: [
          {
            title: 'Big Bang Theory',
            content: 'The leading theory explaining the universe origin and evolution',
            evidence: [
              'Cosmic microwave background',
              'Light element abundances',
              'Galaxy redshift observations'
            ],
            mathematics: [
              'Friedmann equations',
              'Scale factor evolution',
              'Critical density calculations'
            ]
          },
          {
            title: 'Dark Matter and Energy',
            content: 'Mysterious components making up 95% of the universe',
            observations: [
              'Galaxy rotation curves',
              'Gravitational lensing',
              'Cosmic acceleration'
            ]
          }
        ]
      }
    ]
  },
  
  observational: {
    title: 'Observational Astronomy',
    topics: [
      {
        id: 'telescopes',
        title: 'Telescope Science',
        description: 'Understanding different types of telescopes and their applications.',
        subtopics: [
          {
            title: 'Optical Telescopes',
            content: 'Principles of collecting and focusing visible light',
            concepts: [
              'Angular resolution',
              'Light gathering power',
              'Focal length and magnification'
            ],
            mathematics: [
              'Diffraction limit',
              'Aperture calculations',
              'Optical aberrations'
            ]
          },
          {
            title: 'Radio Astronomy',
            content: 'Studying celestial objects through radio waves',
            techniques: [
              'Interferometry',
              'Aperture synthesis',
              'Spectral line observations'
            ]
          }
        ]
      }
    ]
  },
  
  spaceScience: {
    title: 'Space Science',
    topics: [
      {
        id: 'space-environment',
        title: 'Space Environment',
        description: 'Understanding conditions in space and their effects.',
        subtopics: [
          {
            title: 'Solar Wind',
            content: 'Stream of charged particles from the Sun affecting space weather',
            effects: [
              'Auroras',
              'Satellite communications',
              'Power grid disruptions'
            ]
          },
          {
            title: 'Radiation Belts',
            content: "Earth's Van Allen radiation belts and their significance",
            implications: [
              'Spacecraft shielding',
              'Astronaut safety',
              'Satellite orbits'
            ]
          }
        ]
      },
      {
        id: 'space-technology',
        title: 'Space Technology',
        description: 'Technologies enabling space exploration and research.',
        subtopics: [
          {
            title: 'Rocket Propulsion',
            content: 'Principles of rocket engines and space propulsion',
            physics: [
              'Thrust equations',
              'Specific impulse',
              'Delta-v calculations'
            ]
          },
          {
            title: 'Space Instrumentation',
            content: 'Scientific instruments used in space missions',
            types: [
              'Spectrometers',
              'Particle detectors',
              'Imaging systems'
            ]
          }
        ]
      }
    ]
  }
};