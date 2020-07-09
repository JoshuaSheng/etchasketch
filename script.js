const container = document.querySelector("#container")

function createGrid(dimension) {
  console.log(dimension**2)
  for (let i = 0; i < dimension**2; i++) {
    container.appendChild(document.createElement("div"))
  }
  container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
  container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`

  const squares = document.querySelectorAll("#container > div")
  console.log(squares)

  squares.forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
      e.target.classList.add("hover")
    })
  })
}

createGrid(16)

function resetGrid() {
  const squares = document.querySelectorAll("#container > div")
  squares.forEach((square) => {
    console.log(square)
    square.classList.remove("hover")
  })
}

const reset = document.querySelector("#reset")

reset.addEventListener("click", resetGrid)

function resize() {
  var dimensions = prompt("What dimensions do you want the grid to have?")
  while (container.firstChild) {
    container.removeChild(container.lastChild)
  }
  createGrid(dimensions)
}

const changeSize = document.querySelector("#change-size")
changeSize.addEventListener("click", resize)
