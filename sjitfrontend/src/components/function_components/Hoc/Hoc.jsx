import Button from "./button"
import tracKingMyButtonComp from "./trackingMyButtonComp"
const Hoc=()=>{
    const ButtonTrack=tracKingMyButtonComp(Button)
    return(
        <div>
            <h1>Welcome to Higher Order Components((hoc))</h1>
             <ButtonTrack prop={"login"} trackingInfo={{"CustId":"Hello"}}/>
        </div>
    )
}
export default Hoc