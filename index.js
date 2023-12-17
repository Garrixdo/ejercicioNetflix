class Cl_suscriptor{
    constructor(tipo){
    this.tipo = tipo
    }

    precio(){
        let precio = 0
        if (this.tipo===1)
        precio = 3
        else
        if (this.tipo===2)
        precio = 5
        else 
        precio = 10
        return precio
    }
    
    totalMasConexion(){
        let total = 0
        if (this.tipo===1)
          total = 3+(3*0.10)
    else
         if (this.tipo===2)
          total = 5+(5*0.10)
    else 
        total = 10 
        return total    
    }
}

class Cl_agencia{
    constructor(){
    this.contPlanA
    = this.contPlanB
    = this.contPlanC 
    = this.contSuscritor = 0
    
    }

    procesarSuscriptor(s){
        if (s.tipo===1)
        this.contPlanA++
    else 
        if (s.tipo===2)
        this.contPlanB++
    else
        this.contPlanC++

        this.contSuscritor++
    }
    
    porcSinConexion(){
        return this.contPlanC/this.contSuscritor*100
    }
    
    planFavorito(){
        if (this.contPlanA > this.contPlanB && this.contPlanA > this.contPlanC)
        return "A"
        else
          if (this.contPlanB > this.contPlanA && this.contPlanB > this.contPlanC)
          return "B"
        else
        return "C"
    }
}

    let suscriptor1 = new Cl_suscriptor(1)
	let suscriptor2 = new Cl_suscriptor(2)
	let suscriptor3 = new Cl_suscriptor(3)
	let suscriptor4 = new Cl_suscriptor(3)
	let suscriptor5 = new Cl_suscriptor(2)
    let suscriptor6 = new Cl_suscriptor(1)
    let suscriptor7 = new Cl_suscriptor(1)
    let suscriptor8 = new Cl_suscriptor(1)

    let agencia = new Cl_agencia()
	agencia.procesarSuscriptor(suscriptor1)
	agencia.procesarSuscriptor(suscriptor2)
	agencia.procesarSuscriptor(suscriptor3)
	agencia.procesarSuscriptor(suscriptor4)
	agencia.procesarSuscriptor(suscriptor5)
    agencia.procesarSuscriptor(suscriptor6)
    agencia.procesarSuscriptor(suscriptor7)
    agencia.procesarSuscriptor(suscriptor8)

    salida = document.getElementById("app")
    salida.innerHTML = "Resultados"

    salida.innerHTML += `<br>Suscriptor 1: Plan: A Tarifa: ${suscriptor1.precio()}$ Total más conexión: ${suscriptor1.totalMasConexion()}$`
	salida.innerHTML += `<br>Suscriptor 2: Plan: B Tarifa: ${suscriptor2.precio()}$ Total más conexión: ${suscriptor2.totalMasConexion()}$`
    salida.innerHTML += `<br>Suscriptor 3: Plan: C Tarifa: ${suscriptor3.precio()}$ Total más conexión: ${suscriptor3.totalMasConexion()}$`
    salida.innerHTML += `<br>Suscriptor 4: Plan: C Tarifa: ${suscriptor4.precio()}$ Total más conexión: ${suscriptor4.totalMasConexion()}$`
    salida.innerHTML += `<br>Suscriptor 5: Plan: B Tarifa: ${suscriptor5.precio()}$ Total más conexión: ${suscriptor5.totalMasConexion()}$`
    salida.innerHTML += `<br>Suscriptor 6: Plan: A Tarifa: ${suscriptor6.precio()}$ Total más conexión: ${suscriptor6.totalMasConexion()}$`
    salida.innerHTML += `<br>Suscriptor 7: Plan: A Tarifa: ${suscriptor7.precio()}$ Total más conexión: ${suscriptor7.totalMasConexion()}$`
    salida.innerHTML += `<br>Suscriptor 8: Plan: A Tarifa: ${suscriptor8.precio()}$ Total más conexión: ${suscriptor8.totalMasConexion()}$`
    salida.innerHTML += '<br>'
    salida.innerHTML += `<br>Porcentaje de suscriptores que no pagan conexión: ${agencia.porcSinConexion()}%`
    salida.innerHTML += `<br>Plan favorito: ${agencia.planFavorito()}`