var path = require('path');
 
module.exports = {
  entry: "./src/index.jsx", // ������� ����� - �������� ����
  output:{
      path: path.resolve(__dirname, './public'),     // ���� � �������� �������� ������ - ����� public
      publicPath: '/public/',
      filename: "bundle.js"       // �������� ������������ �����
  },
  module:{
      rules:[   //��������� ��� js
          {
              test: /\.jsx?$/, // ���������� ��� ������
              exclude: /(node_modules)/,  // ��������� �� ��������� ����� node_modules
              loader: "babel-loader",   // ���������� ���������
              options:{
                  presets:["env", "react"]    // ������������ �������
              }
          }
      ]
  }
}