module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    // [
    //   "@babel/preset-typescript",
    //   {
    //     "isTsx": true
    //   }
    // ],
    
  ]
}
