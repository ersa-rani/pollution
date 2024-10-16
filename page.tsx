import Link from "next/link";

export default function project() {
  return (
    <div className="container">
      <div className="childContainer">
        <div className="waterPollution">
          <h1 className="waterH">
            <b>waterPollution:</b>
          </h1>
          <p className="waterP">
            this happens when various harmful substances get into a body of
            water, such as a stream, river, or ocean, and contaminate it
          </p>
          <Link href="/waterpollution\">
            <p className="waterR">
              <i>read more</i>
            </p>
          </Link>
        </div>
      </div>

      <div className="childContainer">
        <div className="landpollution">
          <b className="hL">landPollution:</b>
          <p className="lp">
            Land pollution is, things that hurt our land. When our waste
            products get scattered on the land, this causes pollution.{" "}
          </p>
          <Link href="/landpollution">
            <p className="waterR">
              <i>read more</i>
            </p>
          </Link>
        </div>
      </div>

      <div className="childContainer">
        <div className="airpollution">
          <b className="hL">Airpollution:</b>
          <p className="lp">
            Air pollution is mixture of chemicals or particles in the air that
            can harm the health of humans beings, animals and plants
          </p>

          <Link href="/airpollution">
            <p className="waterR">
              <i>read more</i>
            </p>
          </Link>
        </div>
      </div>

      <div className="childContainer">
        <b className="hL">noisepollution:</b>
        <p className="lp">
          noise pollution is the type of pollution that may occur due to
          developmental activities such as construction, and manufacturing.
        </p>
        <p className="waterR">
          <Link href="/noisepollution">
            <i>read more</i>
          </Link>
        </p>
      </div>

      <div className="childContainer">
        <b className="ph">plasticpollution:</b>
        <p className="lp">
          the negative effects resulting from the production and consumption of
          plastic materials and products across their entire life cycle.
        </p>
        <p className="waterR">
          <Link href="/plasticpollution">
            <i>read more</i>
          </Link>
        </p>
      </div>
      <div className="childContainer">
        <b className="th">thermalpollution:</b>
        <p className="lp">
          the negative effects resulting from the production and consumption of
          plastic materials and products across their entire life cycle.
        </p>
        <p className="waterR">
          <Link href="/thermalpollution">
            <i>read more</i>
          </Link>
        </p>
      </div>
    </div>
  );
}
