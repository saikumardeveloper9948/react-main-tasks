import React from "react";
import SampleProfilecard from "../sampleprofilecard";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default class Mounting extends React.Component {
  //executes 1st
  constructor() {
    super();
    this.state = { products: [], loading: true };
    // console.log("constructing");
  }
  //executes 2nd
  static getDerivedStateFromProps() {
    // console.log("getDerivedStateFromProps");
    return null;
  }

  // executes 4th
  componentDidMount() {
    // console.log("componentDidMount");

    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ products: json, loading:false });
    //   });

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ products: res.data, loading: false });
      })
      .catch((error) => {
        console.error("error fetch products :", error);
        this.setState({ loading: false });
      });
  }

  //executes 3rd
  render() {
    console.log("rendering");
    return (
      <div>
        <div>
          {this.state.loading ? (
            <div style={{ textAlign: "center", marginTop: 350 }}>
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {" "}
              {this.state.products.map((a, b) => {
                return (
                  <SampleProfilecard
                    title={a.title}
                    image={a.image}
                    category={a.category}
                    desc={a.description}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
