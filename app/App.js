var style = require("./app.less")
console.log(style);

import React  from 'react'

export default class App extends React.Component {
  render() {
    return (
      <header>
        <div className={style.page}>Webpack is doing its thing with React and ES2015
          <h1 className={style.bold}>You</h1>
        </div>
      </header>
    );
  }
}
