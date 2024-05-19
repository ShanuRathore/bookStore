import express from 'express'
import { getBook } from '../controller/bool.controller.js'

const router= express.Router()

router.get("/",getBook)         //means when we make get request at this url then this getBook function will be called


export default router