# Quiz-FrontendJR

lamentablemente por cuestiones de trabajo no logre terminar 
al 100% el ejercicio pero puedo plantearles la logica que tenia 
pensada para resolverlo.

En el momento que se ingersaran las medidas de la bodega los guardaria en 
el localstorage, de la misma manera con las medidas de la cajas (con n nùmero de cajas
o sola una) en el caso de que el array de cajas contenga una sola se revisa 
si es que la caja cabe y esto lo hago rotando la caja en sus seis posibles 
rotacines en el plano 3D, esto lo hago con un algoritmo de permutación.

Éstas permutaciones entran en una for in el el cual re realiza la comparacion
de que cada lado debe de ser menor a su igual en la bodega ya que si no es asi 
se determina que la caja no cabe, finalizando con la interrogante numero uno.

En el caso de que el array contenga n número de cajas de igual manera se prueban
sus posibles permutacines y generamos el volumen de cada una para asi poder 
ordenarlas de mayor a menor para que de esta forma el algoritmo determine mas rapido 
si caben o no caben, aqui hay de dos, si hay una caja que no cabe por ende ya ninguna otra cabe 
y se determina que no caben las cajas, pero si todas las cajas caben las acomodamos
en sentido de su lado mas grande con el algoritmo de permutación y bamos sumando su lado mas 
grande hasta que esa sumatoria llegue a ser un poco menor que el lado de la bodega y de esta menera 
se van acomodando una sobre otra dentro de la caja para que poudan entrar todas las cajas.

en el caso de que la bodega se llene mandamos un mensaje que hasta la caja n caben sin problema.

