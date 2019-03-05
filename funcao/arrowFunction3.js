let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

comparaComThisComArrow = param => console.log (this === param)
comparaComThisComArrow(global)
comparaComThisComArrow(module.exports)
comparaComThisComArrow(this)

comparaComThisComArrow = comparaComThisComArrow.bind(obj) 
comparaComThisComArrow(obj) 
comparaComThisComArrow(module.exports)