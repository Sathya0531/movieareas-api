import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movies.controllers.js";

const router = express.Router();

// username - sathya0531
// password - ADnkZZfMVP66oVX2

// mongodb+srv://sathya0531:ADnkZZfMVP66oVX2@cluster0.hihev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// crud functionality of movies

// r- reading
router.get("/", MovieIndex);

// c- create
router.post("/", MovieCreate);

// u- update
router.put("/:id", MovieUpdate);

// d- delete
router.delete("/:id", MovieDelete);

export default router;
