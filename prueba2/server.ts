import express, {Request, Response} from 'express';

const PORT = 8000;
const HOST = 'localhost'

const app = express();

const users = [
    { id: 1, nombre:'Juan', apellido:'Perez', edad: 25 },
    { id: 2, nombre:'Gonzalo', apellido:'Gomez', edad: 25 },
    { id: 3, nombre:'Emiliano', apellido:'Martinez', edad: 25 },
];

const user = {
    nombre:'Juan',
    apellido:'Perez',
    edad: 25,
};

app.use(express.json());

app.get('/', (req: Request ,res: Response) => {
    res.send('Hola Mundo!');
});

app.get('/contact', (req: Request ,res: Response) => {
    res.send('Hola esta es la pagina de contacto');
});

app.get('/user/:id', (req: Request ,res: Response) => {
    //const id = req.params.id;
    const { id } = req.params;
    const saludo = `Hola usuario con el Id: ${id}`;
    res.send(saludo);
});

app.get("/user", (req: Request ,res: Response) => {
    console.log(req.query);
    //↓↓ desestructurado ↓↓
    const {nombre, apellido, edad} = req.query
    //↓↓ estructurado ↓↓
    //const nombre = req.query.nombre
    //const apellido = req.query.apellido
    //const edad = req.query.edad

    const saludo = `Hola soy ${nombre} ${apellido} y tengo ${edad} anios`;
    res.send(saludo);
});

app.delete("/user/:id", (req: Request ,res: Response) => {
    const { id } = req.params;
    const newUsers = users.filter(user => user.id !== parseInt(id));
    res.send(newUsers);
});

app.post("/new-user", (req: Request ,res: Response) => {
    const { id, nombre, apellido, edad } = req.body
    const newUser =  { id, nombre, apellido, edad };
    users.push(newUser);
    res.send(users);
});

app.put("/update-user/", (req: Request ,res: Response) =>{
    const { apellido } = req.body;
    user.apellido = apellido;
    res.send(user);
});

app.listen(PORT, HOST, ()=>{
    console.log(`Server is runing on http://${HOST}:${PORT}`);    
});