//here we are creating our function functionality // we are doing get request

import Book from '../model/book.model.js';

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();     //we are finding data in out model 
        res.status(200).json(book);         //if we get data we are sending it to frontend as response //200 is status code
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: error.message });
    }
};
