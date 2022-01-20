import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useApi from "../hooks/useApi";
import CommonService from "../services/CommonService";
import Chart from "./Chart";
import Barchart from "./Barchart";
import Chartpie from "./Chartpie";
import Vischart from "./Vischart";
import Todo from "./Todo";
import Geo from "./Geo";
import Racingbar from "./Racingbar";
import { TodoProvider } from "../context/todoContext";
import { ChartProvider } from "../context/ChartContext";
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const dataApi = useApi(CommonService.fetchUsers); //
  const countApi = useApi(CommonService.fetchCount);
  const [record, setRecord] = useState([]);
  const [itemCount, setCount] = useState({});

  const getData = async () => {
    const data = await dataApi.request();
    console.log(data);
    setRecord(data.data);

    const count = await countApi.request();
    console.log(count.data.users);
    setCount(count.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="col main pt-5 mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="#">Dashboard</a>
          </li>
        </ol>
      </nav>
      <p className="lead d-none d-sm-block">Records</p>

      <div
        className="alert alert-warning fade collapse"
        role="alert"
        id="myAlert"
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div>
      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card bg-success text-white h-100">
            <div
              className="card-body bg-success"
              style={{ backgroundColor: "#57b960" }}
            >
              <div className="rotate">
                <i className="fa fa-user fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Users</h6>
              <h1 className="display-4">{itemCount.users}</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-danger h-100">
            <div className="card-body bg-danger">
              <div className="rotate">
                <i className="fa fa-list fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Posts</h6>
              <h1 className="display-4">{itemCount.posts}</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-info h-100">
            <div className="card-body bg-info">
              <div className="rotate">
                <i className="fab fa-twitter fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Tweets</h6>
              <h1 className="display-4">{itemCount.tweets}</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <div className="rotate">
                <i className="fa fa-share fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Shares</h6>
              <h1 className="display-4">{itemCount.share}</h1>
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/* <div className="row placeholders mb-3">
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/dddddd/fff?text=1" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Responsive</h4>
                <span className="text-muted">Device agnostic</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e4e4e4/fff?text=2" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Frontend</h4>
                <span className="text-muted">UI / UX oriented</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/d6d6d6/fff?text=3" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>HTML5</h4>
                <span className="text-muted">Standards-based</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e0e0e0/fff?text=4" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Framework</h4>
                <span className="text-muted">CSS and JavaScript</span>
            </div>
        </div> */}

      <div className="row ">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h5 className="mt-3 mb-3 text-secondary">
            Check More Records of Employees
          </h5>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th>No</th>
                  <th>Label</th>
                  <th>Header</th>
                  <th>Column</th>
                  <th>Record Data</th>
                </tr>
              </thead>
              <tbody>
                {record.slice(0, 5).map((output) => (
                  <tr>
                    <td>{output.id}</td>
                    <td>{output.name}</td>
                    <td>{output.email}</td>
                    <td>{output.username}</td>
                    <td>{output.website}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div classNameName="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
          <h4 classNameName="title mt-3 mb-3 text-center text-secondary">
            Data in Chart
          </h4>
          <div classNameName="mb-5" style={{ height: "300px", width: "400px" }}>
            <PieChart />{" "}
          </div>
        </div>
      </div>

      <a id="more"></a>
      <hr />
      <h2 className="sub-header mt-5">Visualization</h2>
      <div className="mb-3">
        <div className="card-deck">
          <ChartProvider>
            <div className="card card-inverse card-success text-center">
              <div className="card-body">
                <Chart />
              </div>
            </div>
            <div className="card card-inverse card-danger text-center">
              <div className="card-body">
                <Barchart />
              </div>
            </div>
            <div className="card card-inverse card-warning text-center">
              <div className="card-body">
                <Chartpie />
              </div>
            </div>
          </ChartProvider>
          <div className="card card-inverse card-info text-center">
            <div className="card-body">
              <Vischart />
            </div>
          </div>
        </div>
      </div>

      <a id="flexbox"></a>
      <hr />
      <h2 className="mt-5">State Management</h2>

      <div className="card-columns mb-3">
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src="//placehold.it/600x200/444/fff?text=..."
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">Mobx Todo</h4>
            <TodoProvider>
              <Todo />
            </TodoProvider>
          </div>
        </div>
        {/* <div className="card card-body">
          <blockquote className="card-blockquote">
            <p>Bootstrap 4 will be lighter and easier to customize.</p>
            <footer>
              <small className="text-muted">
                Someone famous like <cite title="Source Title">Mark Otto</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src="//placehold.it/600x200/bbb/fff?text=..."
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card card-body card-inverse card-primary text-center">
          <blockquote className="card-blockquote">
            <p>
              Create masonry or Pinterest-style card layouts in Bootstrap 4.
            </p>
            <footer>
              <small>
                Someone famous in <cite title="Source Title">Bootstrap</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card card-body text-center">
          <h4 className="card-title">Clever heading</h4>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 5 mins ago</small>
          </p>
        </div>
        <div className="card">
          <img
            className="card-img img-fluid"
            src="//placehold.it/600x200/777/fff?text=..."
            alt="Card image"
          />
        </div>
        <div className="card card-body text-right">
          <blockquote className="card-blockquote">
            <p>
              There are also some interesting new text classNamees to uppercase
              or capitalize.
            </p>
            <footer>
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Bootstrap</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card card-body">
          <h4 className="card-title">Responsive</h4>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled">
              <li className="text-capitalize">
                <code className="text-lowercase">text-capitalize</code>{" "}
                Capitalize each word
              </li>
              <li className="text-uppercase">
                <code className="text-lowercase">text-uppercase</code> Uppercase
                text
              </li>
              <li className="text-success">
                <code>text-success</code> Contextual colors for text
              </li>
              <li>
                <code>text-muted</code>{" "}
                <span className="text-muted">Lighten with muted</span>
              </li>
              <li>
                <code>text-info</code>{" "}
                <span className="text-muted">Info text color</span>
              </li>
              <li>
                <code>text-danger</code>{" "}
                <span className="text-muted">Danger text color</span>
              </li>
              <li>
                <code>text-warning</code>{" "}
                <span className="text-muted">Warning text color</span>
              </li>
              <li>
                <code>text-primary</code>{" "}
                <span className="text-primary">Primary text color</span>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="card card-body">
          <h4 className="card-title">WorldMap</h4>
          <p className="card-text">
            <Geo />
          </p>
        </div>
        <div className="card card-body">
          <p className="card-text">
            <Racingbar />
          </p>
        </div>
        <div class="card card-body">
          <h4 class="card-title">Heading</h4>
          <p class="card-text">
            So now that you've seen some of what Bootstrap 4 has to offer, are
            you going to give it a try?
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 12 mins ago</small>
          </p>
        </div>
      </div>

      <a id="layouts"></a>
      <hr />
    </div>
  );
};

export default Dashboard;
