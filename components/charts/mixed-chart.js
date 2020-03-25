import React from 'react'
import PropTypes from 'prop-types'
import {Bar} from 'react-chartjs-2'

import colors from '../../styles/colors'

const options = {
  legend: {
    display: false
  },
  tooltips: {
    mode: 'index',
    filter(item) {
      return item.value !== 'NaN'
    }
  },
  scales: {
    xAxes: [{
      stacked: true,
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'DD/MM'
        },
        tooltipFormat: 'DD/MM'
      },
      gridLines: {
        offsetGridLines: true
      },
      offset: true
    }],
    yAxes: [{
      stacked: true
    }]
  }
}

const formatData = data => {
  const datasets = []

  if (data.some(h => h.deces)) {
    datasets.push({
      label: 'Décès',
      data: data.map(h => h.deces || null),
      backgroundColor: colors.red
    })
  }

  if (data.some(h => h.reanimation)) {
    datasets.push({
      label: 'En réanimation',
      data: data.map(h => h.reanimation || null),
      backgroundColor: colors.darkerGrey
    })
  }

  if (data.some(h => h.hospitalises)) {
    datasets.push({
      label: 'Autre hospitalisation',
      data: data.map(h => {
        if (h.hospitalises) {
          return h.hospitalises - (h.reanimation || 0)
        }

        return null
      }),
      backgroundColor: colors.darkGrey
    })
  }

  if (data.some(h => h.gueris)) {
    datasets.push({
      label: 'Retours à domicile',
      data: data.map(h => h.gueris || null),
      backgroundColor: colors.green
    })
  }

  if (data.some(h => h.casConfirmes)) {
    datasets.push({
      label: 'Autre',
      data: data.map(h => {
        return h.casConfirmes - ((h.gueris || 0) + (h.deces || 0) + (h.hospitalises || h.reanimation || 0))
      }),
      backgroundColor: colors.orange
    })
  }

  return {
    labels: data.map(h => new Date(h.date)),
    datasets
  }
}

const MixedChart = ({data, height}) => (
  <div style={{padding: '1em'}}>
    <Bar data={formatData(data)} options={options} height={height} />
  </div>
)

MixedChart.defaultProps = {
  height: null
}

MixedChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number
}

export default MixedChart
