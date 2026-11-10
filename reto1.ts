interface UsuarioAPI {
    id: number;
    username : string;
    email: string;
    rol: 'admin'|| 'editor' || 'alumno' ;
    token?:string;
}

