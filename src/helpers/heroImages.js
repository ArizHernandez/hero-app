
let images = () => ({default: ''})

try {
  images = require.context('../assets', true);
} catch (error) {}

export const heroImages = (image) => images(`./${image}.jpg`).default;