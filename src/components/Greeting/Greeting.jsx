import withData from "../withData/withData"

function Greeting(props) {
    return (
        <div>
            <h1>
                Greetings {props.name}
            </h1>
        </div>
    )
}
export default withData(Greeting)