import { FormatMoney } from 'format-money-js'
import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types'

RadialChart.propTypes = {
  labels: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired,
  total : PropTypes.number.isRequired
}

export default function RadialChart ({ labels, series, total }) {

  const
    options = {
      chart      : {
        height: 450,
        type  : 'radialBar'
      },
      theme      : {
        palette: 'palette8'
      },
      stroke     : {
        lineCap: 'round'
      },
      plotOptions: {
        radialBar: {
          hollow    : {
            margin    : 15,
            size      : '55%',
            background: '#ffffff'
          },
          dataLabels: {
            showOn: 'always',
            name  : {
              fontSize: '16px',
              color   : '#888',
              offsetY : -10,
              show    : true
            },
            value : {
              color     : '#111',
              fontSize  : '30px',
              fontWeight: 'bold',
              show      : true,
              formatter : function (w) {
                return `${w}%`
              }
            },
            total : {
              show     : true,
              label    : 'Total',
              formatter: function () {
                return new FormatMoney({ symbol: '$', decimals: 2 }).from(
                  total
                ).toString()
              }
            }
          }
        }
      },
      labels
    }

  return (

    <ReactApexChart
      type="radialBar"
      series={series}
      height={450}
      options={options}
      className="w-full mx-0"
    />

  )
}
