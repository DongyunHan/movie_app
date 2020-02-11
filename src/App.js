import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

class App extends React.Component {
  // - state is an object
  // - component data -> state
  state = {
    count: 0,
    isLoading: true,
    movies: []
  };

  getMoives = async () => {
    await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(data => {
        const {
          data: { movies }
        } = data;

        // console.log(movies);
        console.log(data);
        console.log(movies);
        this.setState({ movies: movies });
      });
  };

  componentDidMount() {
    this.getMoives();
    this.setState(current => ({ isLoading: false }));
  }

  add = () => {
    // console.log("add");
    // this.setState({ count: this.state.count + 1 });
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    // console.log("minus");
    // this.setState({ count: this.state.count - 1 });
    this.setStatus(current => ({ count: current.count - 1 }));
  };

  render() {
    const { isLoading, movies } = this.state;
    console.log(this.state);
    console.log(movies);

    return (
      <div>
        {isLoading
          ? "Loading ..."
          : movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
        {/* <h1>This is Class Component {this.state.count} </h1> */}
        {/* <button onClick={this.add} />
        <button onClick={this.minus} /> */}
      </div>
    );
  }
}

export default App;

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 4
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 4
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 4
//   }
// ];

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// // function Food({ fav }) {
// function Food(prop) {
//   return (
//     <div>
//       <h3> I like {prop.name} Very Much</h3>
//       <h4> rating: {prop.rating} / 5.0</h4>
//       <img src={prop.image} style={{ width: 50, height: 50 }} />
//     </div>
//   );
//   // return <h3> I like {fav} Very Much</h3>;
// }

// // function renderFood(dish) {
// //   return <Food name={dish.name} image={dish.image} />;
// // }

// function App() {
//   return (
//     <div>
//       <div className="App">Hello world</div>
//       {/* <Food name="k" fav="hello " />
//       <Food name="k" fav="Ramen " />
//       <Food name="k" fav="cupmen " />
//       <Food name="k" fav="yukie " /> */}
//       {foodILike.map(food => {
//         return (
//           <Food
//             key={food.id}
//             rating={food.rating}
//             name={food.name}
//             image={food.image}
//           />
//         );
//       })}

//       {/* {foodILike.map(renderFood)} */}
//     </div>
//   );
// }

// export default App;
