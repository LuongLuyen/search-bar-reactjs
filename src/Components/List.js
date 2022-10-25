import { React} from 'react'
import data from "./ListData.json"

function List(props) {
    console.log(props.input)
    console.log(data)

    // tạo một mảng mới bằng cách lọc mảng ban đầu
    const filteredData = data.filter((el) => {
        // nếu không có đầu vào thì trả về giá trị ban đầu
        console.log(el)
        if (props.input === '') {
            return el;
        }
        // trả về mục chứa đầu vào của người dùng
        else {
            console.log(el.text.toLowerCase().includes(props.input))
            return el.text.toLowerCase().includes(props.input)
        }
    })
    console.log(filteredData)
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List