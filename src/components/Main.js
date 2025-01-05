import { subComponent } from 'queflow'
import Intro from './Intro.js';
 
const Main = new subComponent('Main', {
  template: () => {
    return `
      <Intro/>
    `
  },
  
  stylesheet: {
    '.silver' : `
      color: rgb(200, 200, 200);
    `
  }
})

export default Main