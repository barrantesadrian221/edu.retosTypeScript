interface UsuarioAPI {
    id: number;
    username : string;
    email: string;
    rol: 'admin'| 'editor' | 'alumno' ;
    token?:string
};

const usuarioValido: UsuarioAPI = {
    id:1,
    username:'Juan',
    email:'juanito67@gmail.com',
    rol:'alumno'
};

const usuarioNoValido: UsuarioAPI = {
    id:2,
    username:'Pedrito',
    email:'pedritoElCoquito12@hotmail.com',
    //Error ya que no deberia de permitir un rol que no este definido en la interfaz
    rol:'maquinote'
};
console.log(usuarioValido);
console.log(usuarioNoValido);