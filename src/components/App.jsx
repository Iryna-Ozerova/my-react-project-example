import Product from "./Product"; //тоді файл матиме назву Product.jsx

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}

// import BookList from "./BookList"; //файл матиме назву BookList.jsx

// const favBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// const App = () => {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favBooks} />
//     </>
//   );
// };

// export default App;