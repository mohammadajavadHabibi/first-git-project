import "./App.css";
import "./styles.css";
import Table from "./Table";

function App() {
  const tabList = [
    { title: "content1", content: <div>this is first content</div> },
    { title: "content2", content: <div>this is second content</div> },
    { title: "content3", content: <div>this is third content</div> },
    { title: "content4", content: <div>this is fourth content</div> },
  ];

  return (
    <>
      <Table tabList={tabList} />
    </>
  );
}

export default App;
