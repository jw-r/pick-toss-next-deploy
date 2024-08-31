export const msToElapsedTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000)
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

export const msToMin = (ms: number) => {
  const millisecondsPerMinute = 60 * 1000
  const minutes = ms / millisecondsPerMinute

  return minutes
}
