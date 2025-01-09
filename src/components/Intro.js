import { subComponent } from 'queflow'
    
const Intro = new subComponent('Intro', {
  template: () => {
    return `
      <section>
        <h1 class='silver'>Silver Text</h1>
        <Text { txt: 'Hello World', class: 'silver'} />
        <img src="./src/assets/athens.png">
      </section>
    `
  },

  stylesheet: {
    'section': `
      width: 100%;
      height: 100vh;
      background: black;
      position: fixed;
      top: 0;
      text-align: center;
    `
  }
})

export default Intro