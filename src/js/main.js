import Controller from "./controllers/controller.js";
import Model from "./core/model.js";
import View from "./modules/view.js";
import { validateCertificateData } from "./controllers/validators.js";



const view = new View()
const model =  Model
const controller = new Controller(model, view)
