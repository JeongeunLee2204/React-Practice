import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {changeName, addPoint} from "./../data/store.ts"

function CartPage() {
  const state = useSelector((state) => state);
  const dispatch=useDispatch();
  console.log(state);

  return (

    

    <div>
        {/* <Button onClick={()=>{dispatch(changeName());}}>변경하기</Button> */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <PrintTable />
      </Table>
    </div>
  );
}

export default CartPage;

function PrintTable() {
    const dispatch=useDispatch();
  const item = useSelector((state) => state.cartItem); // 상태 가져오기

  return (
    <>
      {item.map((i) => (
        <tbody key={i.id}>
          <tr>
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.count}</td>
            <td><Button onClick={()=>{dispatch(addPoint(i.id)); console.log(i.count)}}>추가하기</Button></td>
          </tr>
        </tbody>
      ))}
    </>
  );
}
