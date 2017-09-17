import clone from 'clone'

function getTop(list, desc = true, number = 20) {
  return clone(list).sort((a, b) => (
    desc
      ? (b.price * b.volume) - (a.price * a.volume)
      : (a.price * a.volume) - (b.price * b.volume)),
  ).slice(0, number)
}

export default getTop
