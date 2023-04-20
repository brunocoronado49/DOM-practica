## Critical Rendering Path

- DOM (Document Object Model)
- CSSOM (CSS Object Model)

**El DOM es una representacion de HTML**
**Estructura de arbol de nodos**
**Es un modelo para ser modificado**

DOM + JS = Web API
API = es el puente que conecta el front con el backend
Mas de 70 WebAPI, DOM es una de ellas

**Leer Nodos**
- document.getElementById
- parent.getElementTagName
- parent.getelementByClassName
- queryselector
- querySelectorAll


De esta forma pasamos todos los elementos en el NodeList a un arreglo al cual si podremos usar los métodos filter, map, reduce entre otros.

```
const nodeList = document.querySelectorAll("selector css");
const elementList = [...nodeList];
```