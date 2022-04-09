import { useEffect, useState } from "react"
import BootstrapTable from "react-bootstrap-table-next";

export const User = ()=>{

    let [data, setData] = useState([])
    
    useEffect(()=>{
        getData()
    }, [])
    
    async function getData(){
        try{
            const datas = await fetch("http://localhost:8000/forminfo").then((d)=>
            d.json()).then((res)=> setData(res))
        } catch(err){
            console.log(err)
        }
    }

    const columns = [
      {
        dataField: "DOB",
        text: "Date Of Birth",
      },
      {
        dataField: "name",
        text: "Name",
      },
      {
        dataField: "age",
        text: "Age",
      },
      {
        dataField: "address",
        text: "Address",
      },
      {
        dataField: "state",
        text: "State",
      },
      {
        dataField: "pincode",
        text: "Pin Code",
      },
    ];
     const selectRow = {
       mode: "checkbox",

       bgColor: (row, rowIndex) => (rowIndex >= 0 ? "blue" : ""),
     };
    return (
      <div>
        <h1>Users</h1>
        
        <BootstrapTable
          style={{ marginTop: "50px" }}
          keyField="id"
          data={data}
          columns={columns}
          selectRow={selectRow}
        />
      </div>
    );
}