import Book from '../model/book.model.js';

export const postBook = async (req, res) => {
    const book = req.body;
    const newBook = new Book(book);
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        console.log("Error:", error);
        res.status(409).json({ message: error.message });
    }
};
