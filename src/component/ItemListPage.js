import axios from "axios";
import React from "react";
import { Avatar, Space, List,Button } from "antd";
import { useEffect, useState, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

function ItemListPage(){
    const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

 
  useEffect(() => {
    setisLoading(true);
 
    axios
      .get("https://api.itematch.com/api/admin/dummy_data/")
      .then((response) => {
        setdata(response.data);
        setisLoading(false);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading data</h1>;
  else if (data && !isError)
    return(
        <>
        <Fragment>
          <div className="app" style={{ marginLeft: "5em" }}>
            {data &&
              data.items?.map((item,index) => (
                <div>
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={item.image}
                        />
                      }
                      title={
                        <a href="https://ant.design">
                          {item.title.toUpperCase()}
                        </a>
                      }
                      description={item.description}
                    />
                    <Link to="/DetailsPage">
                    <Button size="small">More Details</Button>
                    </Link>
                   
                  </List.Item>
                </div>
              ))}
          </div>
        </Fragment>


      </>
    );
  else {
    return <h1>Something Went Wrong</h1>;
  }
    
}

export default ItemListPage;