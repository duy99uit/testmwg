import { useMemo, useState } from "react";
import "./App.css";
import React from "react";
import { removeVietnameseTones } from "./helper";
import { fakeArr, loopArr } from "./fake";

const listData = [
  {
    name: "Thế giới di động",
    id: 1,
  },
  {
    name: "Bách hoá xanh",
    id: 2,
  },
  {
    name: "Topzone",
    id: 3,
  },
  {
    name: "Điện máy xanh",
    id: 4,
  },
];

function App() {
  const [textInput, setTextInput] = useState("");

  const handleChangeVale = (
    event: React.InputHTMLAttributes<HTMLInputElement>
  ) => {
    console.log("handleChangeVale", event.target.value);
    setTextInput(event.target.value);
  };

  const renderListData = useMemo(() => {
    if (textInput.trim().length === 0) return listData;
    const _removeVietnameseTones =
      removeVietnameseTones(textInput).toLocaleUpperCase();

    return listData.filter((item) => {
      return removeVietnameseTones(item?.name)
        .toLocaleUpperCase()
        .includes(_removeVietnameseTones);
    });
  }, [textInput]);

  const data: any = useMemo(() => {
    return loopArr(fakeArr);
  }, []);

  return (
    <React.Fragment>
      <div>
        {/* <div>{data?.length}</div> */}
        <a href="loyalty://loyalty/LuckyWheelGame">Mở app loyalty</a>
        {/* <input value={textInput} type="text" onChange={handleChangeVale} />
        <div>
          {renderListData?.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })}
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default App;
