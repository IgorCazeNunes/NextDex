export default {
  grid: {
    container: '120rem',
  },

  border: {
    radius: '1rem',
  },

  font: {
    family:
      "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      small: '1.2rem',
      medium: '1.6rem',
      large: '2.6rem',
      xlarge: '3.2rem',
      huge: '10rem',
    },
  },

  colors: {
    type: {
      color: {
        bug: '#8CB230',
        dark: '#58575f',
        dragon: '#0f6ac0',
        electric: '#eed535',
        fairy: '#ed6ec6',
        fighting: '#d04164',
        fire: '#fd7d24',
        flying: '#748fc9',
        ghost: '#556aae',
        grass: '#62b957',
        ground: '#dd7748',
        ice: '#61cec0',
        normal: '#9da0aa',
        poison: '#a552cc',
        psychic: '#ea5d60',
        rock: '#baab82',
        steel: '#417d9a',
        water: '#4a90da',
      },
      background: {
        bug: '#8bd674',
        dark: '#6f6e78',
        dragon: '#7383b9',
        electric: '#f2cb55',
        fairy: '#eba8c3',
        fighting: '#eb4971',
        fire: '#ffa756',
        flying: '#83a2e3',
        ghost: '#8571be',
        grass: '#8bbe8a',
        ground: '#f78551',
        ice: '#91d8df',
        normal: '#b5b9c4',
        poison: '#9f6e97',
        psychic: '#ff6568',
        rock: '#d4c294',
        steel: '#4c91b2',
        water: '#58abf6',
      },
    },
    background: {
      white: '#ffffff',
      primary: '#ea5d60',
      default: '#f2f2f2',
      inputPressed: '#e2e2e2',
      modal: '#17171b.5',
    },
    gradient: {
      vector:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
      vectorGray:
        'linear-gradient(100.59deg, #E5E5E5 0%, rgba(245, 245, 245, 0) 100%)',
      vectorWhite: 'linear-gradient(135deg, #ECECEC 0%, #F5F5F5 100%)',
      pokeball: 'linear-gradient(180deg, #F5F5F5 50%, #FFFFFF 94.81%)',
      pokeballGray: 'linear-gradient(135deg, #ECECEC 0%, #F5F5F5 100%)',
      pokeballWhite:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
      pokemonName:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 76.04%)',
      pokemonCircle:
        'linear-gradient(334.58deg, rgba(255, 255, 255, 0.35) 16.24%, rgba(255, 255, 255, 0) 44.6%)',
    },
    text: {
      white: '#ffffff',
      black: '#17171b',
      grey: '#747476',
      number: '#17171b.6',
    },
    height: {
      short: '#ffc5e6',
      medium: '#aebfd7',
      tall: '#aaacb8',
    },
    weight: {
      light: '#99cd7c',
      normal: '#57b2dc',
      heavy: '#5a92a5',
    },
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },

  breakpoints: {
    sm: 'min-width: 414px',
    md: 'min-width: 768px',
    lg: 'min-width: 1024px',
    xl: 'min-width: 1366px',
  },
} as const;
