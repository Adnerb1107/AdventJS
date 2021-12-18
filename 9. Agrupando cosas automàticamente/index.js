export default function groupBy(collection, it) {
  let response = {}
  let llaves = []
  if (typeof it === "function") {
    llaves = [... (eval(collection.map(val => it(val))))]
    llaves = llaves.filter((v, index) => llaves.indexOf(v) == index)
    while (llaves.length > 0) {
      let found = llaves[0]
      let filtrados = collection.filter(val => it(val) === found)
      let newObject = {
        [found]: filtrados
      }
      Object.assign(response, newObject);
      llaves.shift()
    }
  }
  else {
    llaves = [... (eval(collection.map(val => val[it])))]
    llaves = llaves.filter((v, index) => llaves.indexOf(v) == index)
    while (llaves.length > 0) {
      let found = llaves[0]
      let filtrados = collection.filter(val => val[it] === found)
      let newObject = {
        [found]: filtrados
      }
      Object.assign(response, newObject);
      llaves.shift()
    }
  }
  return response
}