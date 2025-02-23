import { Suspense,lazy } from "react"
const LazyCom=lazy(()=>import("../function_components/signup.jsx"));
function LazyLoading(){
    return <>
    <Suspense fallback={<h1>please wait..</h1>}>
     <h1>I am in the LazyLoading</h1>
     <LazyCom/>
     </Suspense>
    </>
}
export default LazyLoading