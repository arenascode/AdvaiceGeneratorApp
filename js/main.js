console.log(`hello beautiful world!`);

// HTML elements
const adviceIdDiv = document.getElementById('adviceId')
const adviceContent = document.getElementById('adviceContent')

async function generateAdvice() {
  try {
  const response = await fetch('https://api.adviceslip.com/advice')

  if (!response.ok) {
      throw new Error(`Error request`)
      }
  const data = await response.json()
  const {id: adviceId, advice } = data.slip
  
  adviceIdDiv.innerText = adviceId
  adviceContent.innerText = `"${advice}"`

  } catch (error) {
  console.error(`Error:`, error)
  }
}

//window.onload(generateAdvice())