export class CustomError extends Error {
    constructor(code:number, message:string){
        super(message)
    }
}

export class InvalidInput extends CustomError{
    constructor(){
        super(400, "All the fields must be filled")
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}
