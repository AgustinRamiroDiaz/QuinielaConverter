let significado = [
    "Huevos"
    , "Agua"
    , "Niño"
    , "San Cono"
    , "La Cama"
    , "Gato"
    , "Perro"
    , "Revolver"
    , "Incendio"
    , "Arroyo"
    , "La leche"
    , "Palito"
    , "Soldado"
    , "La yeta"
    , "Borracho"
    , "Niña bonita"
    , "Anillo"
    , "Desgracia"
    , "Sangre"
    , "Pescado"
    , "La fiesta"
    , "La mujer"
    , "El loco"
    , "Mariposa"
    , "Caballo"
    , "Gallina"
    , "La misa"
    , "El peine"
    , "El cerro"
    , "San Pedro"
    , "Santa Rosa"
    , "La luz"
    , "Dinero"
    , "Cristo"
    , "Cabeza"
    , "Pajarito"
    , "Manteca"
    , "Dentista"
    , "Aceite"
    , "Lluvia"
    , "Cura"
    , "Cucho"
    , "Zapatilla"
    , "Balcón"
    , "La cárcel"
    , "El vino"
    , "Tomates"
    , "Muerto"
    , "Muerto habla"
    , "La carne"
    , "El pan"
    , "Serrucho"
    , "Madre"
    , "El barco"
    , "La vaca"
    , "Los gallegos"
    , "La caída"
    , "Jorabajo"
    , "Ahogado"
    , "Planta"
    , "Virgen"
    , "Escopeta"
    , "Inundacion"
    , "Casamiento"
    , "Llanto"
    , "Cazador"
    , "Lombrices"
    , "Víbora"
    , "Sobrinos"
    , "Vicios"
    , "Muerto sueño"
    , "Excrementos"
    , "Sorpresa"
    , "Hospital"
    , "Negros"
    , "Payaso"
    , "Llamas"
    , "Las piernas"
    , "Ramera"
    , "Ladrón"
    , "La bocha"
    , "Flores"
    , "Pelea"
    , "Mal tiempo"
    , "Iglesia"
    , "Linterna"
    , "Humo"
    , "Piojos"
    , "El Papa"
    , "La rata"
    , "El miedo"
    , "Excusado"
    , "Médico"
    , "Enamorado"
    , "Cementerio"
    , "Anteojos"
    , "Marido"
    , "La mesa"
    , "Lavandera"
    , "Hermanos"
]


function numero2digitosASignificado(numero) {
    return significado[numero]
}

function digitosASignificado(numeroString) {
    let listaDeA2DigitosStr = numeroString.match(/.{1,2}/g)
    let listaDeA2Digitos = listaDeA2DigitosStr.map(x => parseInt(x))
    console.log(listaDeA2DigitosStr)
    let significadoArr = listaDeA2Digitos.map(numero2digitosASignificado)
    
    return significadoArr.join(", ")
}

