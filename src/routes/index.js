//import solo el enrutador dsd express
import {Router} from  'express';
import {home, login, registro, insertuser, showusers} from "../controllers/controllers.js";
import {pool} from "../db.js"

//inicio el enrutador y almaceno en constante
const router = Router();


//crear routes
router.get("/", home);
router.get("/login", login);
router.get("/registro", registro);

router.get('/showusers', showusers);

router.post('/insertuser', insertuser)

export default router;