import React,{useState} from "react";
import Sidebar from "react-sidebar";
import { Button } from "react-bootstrap";

const App = props => {

  const [open,setOpen]= useState(false)

  const onSetSidebarOpen = (open) => {
    setOpen(open)
    
  }


    return (
      <Sidebar
        sidebar={
          <div>
            <Button variant="primary">Primary</Button>{" "}
            <Button variant="secondary">Secondary</Button>{" "}
            <Button variant="success">Success</Button>{" "}
            <Button variant="warning">Warning</Button>{" "}
            <Button variant="danger">Danger</Button>{" "}
            <Button variant="info">Info</Button>{" "}
            <Button variant="light">Light</Button>{" "}
            <Button variant="dark">Dark</Button>{" "}
            <Button variant="link">Link</Button>
          </div>
        }
        open={open}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  
}

export default App;
