const Book = require("../models/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    res.status(404).json({ message: "No books available." });
  }
  return res.status(200).json({ books });
};

const addBook = async (req, res, next) => {
  const { name, author, publisher, description, price, image, review } =
    req.body;

  try {
    const book = new Book({
      name,
      author,
      publisher,
      description,
      price,
      image,
      review,
    });

    await book.save();

    //Author Credibility-------
    const MAX_SCORE_A = 50;
    let sum_a = 0;
    if (review && review.length > 0 && review[0].author_cred) {
      const { q1, q2, q3, q4 } = review[0].author_cred;
      sum_a = (q1 || 0) + (q2 || 0) + (q3 || 0);
      if (q4 && q4.q4_1 && q4.q4_2) {
        sum_a += q4.q4_1 + q4.q4_2;
      }
    }
    book.final_author_cred = sum_a;
    book.final_author_cred_percentage = (sum_a / MAX_SCORE_A) * 100;
    await book.save();

    //Publisher Credibility-------
    const MAX_SCORE_P = 25;
    let sum_pub = 0;
    sum_pub = review[0].publisher_cred[0].q1 || 0;
    book.final_publisher_cred = sum_pub;
    book.final_publisher_cred_percentage =
      (book.final_publisher_cred / MAX_SCORE_P) * 100;
    await book.save();

    //in general--------------
    const MAX_SCORE_G = 14;
    let sum_g = 0;
    // if (review && review.length > 0 && review[0].general) {
    //     const { q1, q2, q3, q4 } = review[0].general;
    //     sum_g = (q1 || 0) + (q2 || 0) + (q3 || 0) + (q4 || 0);
    // }

    sum_g =
      review[0].general[0].q1 +
      review[0].general[0].q2 +
      review[0].general[0].q3 +
      review[0].general[0].q4;
    book.final_general = sum_g;
    book.final_general_percentage = (sum_g / MAX_SCORE_G) * 100;
    await book.save();

    //physical--------------
    const MAX_SCORE_PH = 130;
    let sum_ph = 0;
    // if (review && review.length > 0 && review[0].physical) {
    //     const { q1, q2, q3, q4, q5, q6, q7, q8,q9, q10, q11, q12, q13, q14, q15, q16, q17, q18 } = review[0].physical;
    //     sum_ph = (q1 || 0) + (q2 || 0) + (q3 || 0) + (q4 || 0)+ (q5 || 0) + (q6 || 0) + (q7 || 0) + (q8 || 0) + (q9 || 0) + (q10 || 0) + (q11 || 0) + (q12 || 0)+ (q13 || 0) + (q14 || 0) + (q15 || 0) + (q16 || 0)+(q17 || 0) + (q18 || 0);

    // }
    sum_ph =
      review[0].physical[0].q1 +
      review[0].physical[0].q2 +
      review[0].physical[0].q3 +
      review[0].physical[0].q4 +
      review[0].physical[0].q5 +
      review[0].physical[0].q6 +
      review[0].physical[0].q7 +
      review[0].physical[0].q8 +
      review[0].physical[0].q9 +
      review[0].physical[0].q10 +
      review[0].physical[0].q11 +
      review[0].physical[0].q12 +
      review[0].physical[0].q13 +
      review[0].physical[0].q14 +
      review[0].physical[0].q15 +
      review[0].physical[0].q16 +
      review[0].physical[0].q17 +
      review[0].physical[0].q18;
    book.final_physical = sum_ph;
    book.final_physical_percentage = (sum_ph / MAX_SCORE_PH) * 100;
    await book.save();

    const MAX_SCORE_SUB = 81;
    let sum_sub = 0;
    sum_sub =
      review[0].subject[0].q1 +
      review[0].subject[0].q2 +
      review[0].subject[0].q3 +
      review[0].subject[0].q4 +
      review[0].subject[0].q5 +
      review[0].subject[0].q6 +
      review[0].subject[0].q7 +
      review[0].subject[0].q8 +
      review[0].subject[0].q9 +
      review[0].subject[0].q10 +
      review[0].subject[0].q11 +
      review[0].subject[0].q12 +
      review[0].subject[0].q13 +
      review[0].subject[0].q14 +
      review[0].subject[0].q15;
    book.final_subject = sum_sub;
    book.final_subject_percentage = (sum_sub / MAX_SCORE_SUB) * 100;
    await book.save();

    const MAX_SCORE_LAN = 24;
    let sum_lan = 0;
    // if (review && review.length > 0 && review[0].language) {
    //     const { q1, q2, q3, q4, q5, q6, q7, q8 } = review[0].language;
    //     sum_lan = (q1 || 0) + (q2 || 0) + (q3 || 0) + (q4 || 0)+ (q5 || 0) + (q6 || 0) + (q7 || 0) + (q8 || 0);

    // }
    sum_lan =
      review[0].language[0].q1 +
      review[0].language[0].q2 +
      review[0].language[0].q3 +
      review[0].language[0].q4 +
      review[0].language[0].q5 +
      review[0].language[0].q6 +
      review[0].language[0].q7 +
      review[0].language[0].q8;

    sum_lan = book.final_language = sum_lan;
    book.final_language_percentage = (sum_lan / MAX_SCORE_LAN) * 100;
    await book.save();

    const MAX_SCORE_ILLUS = 28;
    let sum_illus = 0;
    sum_illus =
      review[0].illus[0].q1 + review[0].illus[0].q2 + review[0].illus[0].q3;

    book.final_illus = sum_illus;
    book.final_illus_percentage = (sum_illus / MAX_SCORE_ILLUS) * 100;
    await book.save();

    book.grand_final =
      sum_a + sum_g + sum_illus + sum_lan + sum_ph + sum_sub + sum_pub;

    book.grand_final_percentage = (book.grand_final / 352) * 100;

    // if (book.grand_final_percentage > 75) {
    //   book.grade = 1;
    //   return res.status(201).json({ message: "This is a grade 1 book" });
    // }
    // if (book.grand_final_percentage < 75 && book.grand_final_percentage > 50) {
    //   book.grade = 2;
    //   return res.status(201).json({ message: "This is a grade 2 book" });
    // }
    // if (book.grand_final_percentage < 50) {
    //   return res.status(201).json({
    //     message:
    //       "This book has been disqualified because of insufficient criteria fulfillment.",
    //   });
    // }

    if (
      book.review[0].ethical[0].q1 === true ||
      book.review[0].ethical[0].q2 === true ||
      book.review[0].ethical[0].q3 === true
    ) {
      try {
        await Book.deleteOne({ _id: book._id });
        return res.status(201).json({
          message:
            "This book has been disqualified on ethical grounds and has been removed.",
        });
      } catch (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: "Error occurred while deleting the book." });
      }
    }else{
      if (book.grand_final_percentage > 75) {
        book.grade = 1;
        return res.status(201).json({ message: "This is a grade 1 book" });
      }
      if (book.grand_final_percentage < 75 && book.grand_final_percentage > 50) {
        book.grade = 2;
        return res.status(201).json({ message: "This is a grade 2 book" });
      }
      if (book.grand_final_percentage < 50) {
        return res.status(201).json({
          message:
            "This book has been disqualified because of insufficient criteria fulfillment.",
        });
      }
    }

    if (!book) {
      return res.status(500).json({ message: "Unable to add book" });
    }
    return res.status(201).json({ book });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error adding book" });
  }
};
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
