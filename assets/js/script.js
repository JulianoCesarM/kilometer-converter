function kilometerConverter() {
  const distanceQuilometers = document.querySelector("#valueDistance")
  const valueAnosLuz = 0.0000000000001057
  const calculoDistancia = distanceQuilometers.value * valueAnosLuz

  const resp = document.querySelector("p#resp")
  resp.classList.add("resp")

  msg = `${distanceQuilometers.value} quilometros está a ${calculoDistancia} anos-luz de distancia`
  resp.innerText = msg
}
