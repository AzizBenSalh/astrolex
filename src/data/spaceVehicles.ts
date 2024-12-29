export const spaceVehicles = {
  rockets: [
    {
      name: 'SpaceX Falcon 9',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933',
      description: 'Two-stage-to-orbit medium lift launch vehicle that can return its first stage for reuse.',
      specs: [
        'Height: 70 meters',
        'Diameter: 3.7 meters',
        'Mass: 549,054 kg',
        'Payload to LEO: 22,800 kg',
        'First Stage: 9 Merlin 1D engines',
        'Second Stage: 1 Merlin Vacuum engine',
        'Success Rate: >98%',
        'Reusability: First stage & fairings',
        'Cost per launch: ~$62 million',
        'First Flight: June 4, 2010'
      ]
    },
    {
      name: 'NASA Space Launch System',
      image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/sls_block1_night.jpg',
      description: "NASA's most powerful rocket, designed for deep space missions including the Artemis program.",
      specs: [
        'Height: 98.1 meters',
        'Core Stage: 4 RS-25 engines',
        'Solid Rocket Boosters: 2',
        'Payload to LEO: 95,000 kg',
        'Payload to Moon: 27,000 kg',
        'Total Thrust: 8.8 million pounds',
        'First Flight: November 16, 2022',
        'Mission Duration: Up to 45 days',
        'Crew Capacity: 4 astronauts',
        'Development Cost: $23.8 billion'
      ]
    },
    {
      name: 'SpaceX Starship',
      image: 'https://www.spacex.com/static/images/starship/STARSHIP_CHOPSTICKS.jpg',
      description: 'Fully reusable spacecraft designed for missions to Mars and beyond.',
      specs: [
        'Height: 120 meters',
        'Diameter: 9 meters',
        'Payload to LEO: 100+ tons',
        'Raptor Engines: 33 (Booster) + 6 (Ship)',
        'Propellant Capacity: 3,400 tons',
        'Material: Stainless Steel',
        'Heat Shield: Ceramic tiles',
        'Intended for: Mars colonization',
        'In-orbit refueling capability',
        'Development Status: Testing phase'
      ]
    }
  ],
  
  rovers: [
    {
      name: 'Perseverance',
      image: 'https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg',
      description: "NASA's most sophisticated Mars rover, searching for signs of ancient microbial life.",
      specs: [
        'Landing: February 18, 2021',
        'Weight: 1,025 kg',
        'Size: 3 x 2.7 x 2.2 meters',
        'Power: MMRTG (nuclear)',
        'Mission Duration: At least 1 Mars year',
        'Landing Site: Jezero Crater',
        'Instruments: 23 cameras',
        'Carries Ingenuity helicopter',
        'Sample collection system',
        'Cost: $2.75 billion'
      ]
    },
    {
      name: 'Curiosity',
      image: 'https://mars.nasa.gov/system/news_items/main_images/8944_1-PIA24173-1280.jpg',
      description: 'Car-sized rover exploring Mars since 2012, studying climate and geology.',
      specs: [
        'Landing: August 6, 2012',
        'Weight: 899 kg',
        'Size: 3 x 2.7 x 2.2 meters',
        'Power: MMRTG (nuclear)',
        'Operating Time: >3,800 sols',
        'Landing Site: Gale Crater',
        'Instruments: 17 cameras',
        'Sample analysis laboratory',
        'Weather station',
        'Cost: $2.5 billion'
      ]
    },
    {
      name: 'Zhurong',
      image: 'https://planetary.s3.amazonaws.com/web/assets/pictures/20210519_zhurong_first_image.jpg',
      description: 'Chinese Mars rover exploring Utopia Planitia, searching for signs of water ice.',
      specs: [
        'Landing: May 14, 2021',
        'Weight: 240 kg',
        'Size: 2.6 x 3 x 1.85 meters',
        'Power: Solar panels',
        'Mission Duration: 90 sols (planned)',
        'Landing Site: Utopia Planitia',
        'Ground-penetrating radar',
        'Surface composition detector',
        'Multispectral cameras',
        'Weather measurement instruments'
      ]
    }
  ]
};