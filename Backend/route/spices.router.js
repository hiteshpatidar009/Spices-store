import exprees from "express"

import {getSpices} from "../controller/spices.controller.js";

const router = exprees.Router();

router.get("/",getSpices);

export default router;
