import express from 'express'
import { postBook } from '../controller/postbookcontroller.js'

const router= express.Router()

router.post("/add",postBook)

export default router