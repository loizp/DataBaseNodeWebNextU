/**
 * @author Luis Odar Iván Zambrano Paredes
 */
var BDAgenda = require('./datos/bdagenda.js'),
	Operaciones = require('./datos/usuariosCRUD.js');
	
Operaciones.eliminarUsuario((error, result) => {
	if(error) console.log(error);
	console.log(result);
});

Operaciones.insertarUsuario((error, result) => {
	if(error) console.log(error);
	console.log(result);
});