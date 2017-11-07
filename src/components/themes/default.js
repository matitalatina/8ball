// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  foreground: ['#eab6fd'],
  background: ['#1d0922'],
  grayscale: [
    '#212121',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
}

theme.availableAccents = [
  { foreground: ['#eab6fd'], background: ['#1d0922'] },
  { foreground: ['#01e5ac'], background: ['#1d01da'] },
  { foreground: ['#738c74'], background: ['#111059'] },
  { foreground: ['#41393c'], background: ['#f8e82b'] },
  { foreground: ['#57bc56'], background: ['#004231'] },
  { foreground: ['#52a772'], background: ['#3b1765'] },
  { foreground: ['#7108e9'], background: ['#48f7d0'] },
  { foreground: ['#03a0b8'], background: ['#05112e'] },
  { foreground: ['#2cf22c'], background: ['#1d2edb'] },
  { foreground: ['#aa0305'], background: ['#2ff9cb'] },
  { foreground: ['#9ea356'], background: ['#072658'] },
  { foreground: ['#8ba270'], background: ['#0c0d26'] },
  { foreground: ['#4292f4'], background: ['#2b243f'] },
  { foreground: ['#396dc6'], background: ['#d7fecd'] },
  { foreground: ['#b17375'], background: ['#070456'] },
  { foreground: ['#28d3ae'], background: ['#2f0e03'] },
  { foreground: ['#1190c8'], background: ['#1b0606'] },
  { foreground: ['#b5dbc8'], background: ['#6c01a3'] },
  { foreground: ['#f9733f'], background: ['#112739'] },
  { foreground: ['#e82f0f'], background: ['#0f0508'] },
]

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
  sizes: {
    big: '2rem',
  },
}

theme.sizes = {
  maxWidth: '1100px',
  spacer: 8,
}

export default theme
