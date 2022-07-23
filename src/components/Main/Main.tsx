import MainStyle from "./MainStyle";

const Main = () => {
  return (
    <MainStyle>
      <div className="container-left">
        <div className="container-bookings">
          <div className="box-image">
            <img
              src="https://exp.cdn-hotels.com/hotels/3000000/2580000/2578700/2578680/c6be1f23_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
              alt=""
            />
          </div>
          <div className="box-data">
            <h1>Hotel W</h1>
            <span>Servicio de comida disponibile</span>
            <p>
              En W Barcelona Barcelona podrás vivir a tu ritmo, llegar
              fácilmente a la uni y estar mas cerca de la playa.
            </p>

            <div className="information">
              <p>
                8.7 <span>(10 reseñas)</span>
              </p>
              <button>Ver precios</button>
            </div>
          </div>
        </div>
        <div className="container-bookings">
          <div className="box-image">
            <img
              src="https://exp.cdn-hotels.com/hotels/3000000/2580000/2578700/2578680/c6be1f23_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
              alt=""
            />
          </div>
          <div className="box-data">
            <h1>Hotel W</h1>
            <span>Servicio de comida disponibile</span>
            <p>
              En W Barcelona Barcelona podrás vivir a tu ritmo, llegar
              fácilmente a la uni y estar mas cerca de la playa.
            </p>

            <div className="information">
              <p>
                8.7 <span>(10 reseñas)</span>
              </p>
              <button>Ver precios</button>
            </div>
          </div>
        </div>
        <div className="container-bookings">
          <div className="box-image">
            <img
              src="https://exp.cdn-hotels.com/hotels/3000000/2580000/2578700/2578680/c6be1f23_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
              alt=""
            />
          </div>
          <div className="box-data">
            <h1>Hotel W</h1>
            <span>Servicio de comida disponibile</span>
            <p>
              En W Barcelona Barcelona podrás vivir a tu ritmo, llegar
              fácilmente a la uni y estar mas cerca de la playa.
            </p>

            <div className="information">
              <p>
                8.7 <span>(10 reseñas)</span>
              </p>
              <button>Ver precios</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-right">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87832.76864031045!2d2.085855222580607!3d41.39152157091272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3b185625025%3A0x59e80c780f7e2f0b!2sW%20Barcelona!5e0!3m2!1ses!2ses!4v1658485798045!5m2!1ses!2ses"
            title="Hotel W"
          ></iframe>
        </div>
      </div>
    </MainStyle>
  );
};

export default Main;
