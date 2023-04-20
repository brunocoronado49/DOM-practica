const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const action = (entry) => {
    const nodo = entry.target
    console.log("imagen mostrada");
    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(action)
})

const registerImage = (image) => {
    observer(image)
}


min = 1
max = 122

const random = () => Math.floor(Math.random() * (max - min)) + min

const createImageNode = () => {
    const continer = document.createElement("div")
    continer.className = "p-4"

    const imagen = document.createElement("img")
    imagen.className = "imagen"
    imagen.width = "320"
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`

    continer.appendChild(imagen)

    return continer
}

const nuevaImagen = createImageNode()
const app = document.getElementById("app")
const addBoton = document.querySelector("#addImage")

const addNewImage = () => {
    const newImage = createImageNode()
    app.append(newImage)
}

addBoton.addEventListener("click", addNewImage)

app.append(
    nuevaImagen
)
