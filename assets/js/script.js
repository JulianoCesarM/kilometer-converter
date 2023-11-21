function converterDistance() {
  const distanceLightYear = document.querySelector("#distanceLightYear").value
  const distanceName = document.querySelector("#distanceName").value
  let calculo // 1 ano-luz 9,46 trilhoes de Km

  const resp = document.querySelector("p#resp")

  if (distanceName == "quilometros") {
    calculo = 9.461e12
    const distanceQuilometers = distanceLightYear * calculo
    msg = `${distanceLightYear} anos-luz está a ${distanceQuilometers} quilometros de distancia`
    resp.classList.add("resp")
    return (resp.innerText = msg)
  }
  if (distanceName == "metros") {
    calculo = 9.461e15
    const distanceMeters = distanceLightYear * calculo
    msg = `${distanceLightYear} anos-luz está a ${distanceMeters} quilometros de distancia`
    resp.classList.add("resp")
    return (resp.innerText = msg)
  }
}
