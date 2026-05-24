const resumeUrl =
  'https://drive.google.com/drive/folders/1wASEwnXQj0fajpwqZwXZD4SZyaASKDP0?usp=drive_link'

document.addEventListener('DOMContentLoaded', () => {
  const resumeButton = Array.from(document.querySelectorAll('a, button')).find(
    (element) => element.textContent.trim().toLowerCase() === 'download resume',
  )

  if (!resumeButton) return

  if (resumeButton.tagName.toLowerCase() === 'a') {
    resumeButton.href = resumeUrl
    resumeButton.target = '_blank'
    resumeButton.rel = 'noreferrer'
    return
  }

  resumeButton.addEventListener('click', () => {
    window.open(resumeUrl, '_blank', 'noreferrer')
  })
})
