const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destrucuturing
/*
const book = getBook(2);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

const [mainGenre, subGenre, ...otherGenres] = genres;

console.log(mainGenre, subGenre, otherGenres);

const newGenres = [...genres, "science fantasy"];

console.log(newGenres);

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};

updatedBook;

const getYear = (year) => year.split("-")[0];

const summary = `${title}, is a ${pages}-page book and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;

console.log(summary);

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";

console.log(`The book has ${pagesRange} pages`);

// falsy: 0, '', null, undefined
console.log("what" && "Some string");
console.log(0 && "deez");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRASLATED";
console.log(spanishTranslation);

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
console.log(countWrong);

const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count);

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

/*
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

const books = getBooks();

const titles = books.map((book) => book.title);
console.log(titles);

const essentialsData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialsData);

const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("high-fantasy"))
  .map((book) => ({
    title: book.title,
    date: book.publicationDate,
  }));
console.log(adventureBooks);

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

const totalPages = books.map((book) => book.pages);
console.log(totalPages);
const sortedTotalPages = totalPages.sort((a, b) => b - a);
console.log(sortedTotalPages);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

//1) Add book
const newBook = {
  id: 6,
  title: "Sword Art Online",
  author: "Reki Kawahara",
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3) Update book
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 6 ? { ...book, title: "Accel World" } : book
);
console.log(booksAfterUpdate);
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();

// console.log(getTodos());
