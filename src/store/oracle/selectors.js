const itAvailableResponses = [
  'I segnali indicano sì.',
  'Sì.',
  'Senza dubbio.',
  'Le mie fonti dicono no.',
  'Per come la vedo io, sì.',
  'Puoi contarci.',
  'Concentrati e richiedilo.',
  'Le prospettive non sono così buone.',
  'È decisamente così.',
  'Ora è meglio non dirtelo...',
  'Sono molto dubbioso.',
  'Sì, decisamente.',
  'È certo.',
  'Non posso predirlo ora.',
  'Molto probabilmente.',
  'Richiedilo più tardi.',
  'La mia risposta è no.',
  'Le prospettive sono buone.',
  'Non contarci',
  'Sì, a tempo debito.',
  'Le mie fonti dicono no.',
  'Decisamente no.',
  'Sì.',
  'Devi aspettare.',
  'Ho i miei dubbi.',
  'Le prospettive sono così così.',
  'Mi sembra buono!',
  'Chi lo sa?',
  'Mi piace!',
  'Probabilmente.',
  'Stai scherzando?',
  'Fallo!',
  'Non scommetterci.',
  'Dimenticalo.',
]

export const initialState = {
  current: {
    response: 'Think a question... Then ask the Oracle.',
  },
  availableResponses: [
    'Signs point to yes.',
    'Yes.',
    'Without a doubt.',
    'My sources say no.',
    'As I see it, yes.',
    'You may rely on it.',
    'Concentrate and ask again.',
    'Outlook not so good.',
    'It is decidedly so.',
    'Better not tell you now.',
    'Very doubtful.',
    'Yes, definitely.',
    'It is certain.',
    'Cannot predict now.',
    'Most likely.',
    'Ask again later.',
    'My reply is no.',
    'Outlook good.',
    "Don't count on it.",
    'Yes, in due time.',
    'My sources say no.',
    'Definitely not.',
    'Yes.',
    'You will have to wait.',
    'I have my doubts.',
    'Outlook so so.',
    'Looks good to me!',
    'Who knows?',
    'Looking good!',
    'Probably.',
    'Are you kidding?',
    'Go for it!',
    "Don't bet on it.",
    'Forget about it.',
  ],
}

export const getResourceState = (state = initialState) =>
  state || initialState

export const getAvailableResponses = (state = initialState) =>
  getResourceState(state).availableResponses

export const getCurrent = (state = initialState) =>
  getResourceState(state).current

