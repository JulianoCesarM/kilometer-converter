function converterDistance() {
  const distanceLightYear = document.querySelector("#distanceLightYear").value
  const distanceName = document.querySelector("#distanceName").value

  if (distanceLightYear == 0) return alert("O input não pode ser vazio ou 0!")

  if (distanceName == "quilometros") {
    const distanciaKM = 9.461e12
    const calculoDistance = calculo(distanceLightYear, distanciaKM)
    return respostaNaTela(distanceLightYear, distanceName, calculoDistance)
  }
  if (distanceName == "metros") {
    const distanciaM = 9.461e15
    const calculoDistance = calculo(distanceLightYear, distanciaM)
    return respostaNaTela(distanceLightYear, distanceName, calculoDistance)
  }
  return alert("O input não pode ser vazio ou o valor está errad0!")
}
function calculo(m, n) {
  return m * n
}
function respostaNaTela(distanceLightYear, distanceName, calculoDistance) {
  const resp = document.querySelector("#resp")
  const msg = `${distanceLightYear} anos-luz está a ${calculoDistance} ${distanceName} de distancia!`
  resp.classList.add("resp")
  return (resp.innerText = msg)
}
