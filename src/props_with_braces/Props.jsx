function App() {
    return (
        <>
            <NoBraces 이름="리액트" 나이="20"/>
            <Braces 이름="브레이스" 나이="25"/>
        </>
    );
}

// props 라는 객체에 데이터 저장 > prop 라는 객체에서 꺼내서 사용 > {props.이름}
const NoBraces = (props) => (
    <>
        <p> {props.이름}</p>
        <p> {props.나이}</p>
        <button className={props.이름 ? "트루" : "폴스"}>button</button>
    </>
)

// 이름, 나이 라는 변수에 값이 저장 > 변수 바로 사용 > {이름} {나이}
const Braces = ({이름, 나이}) => (
    <>
        <p>{이름}</p>
        <p>{나이}</p>
        <button className={이름 ? "true" : "false"}>button</button>
    </>
)

export default App;