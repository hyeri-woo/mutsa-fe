import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice
// - **User Page :** /users
function App() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/products">Product</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/users">User</Link>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products/*" element={<Outlet />}>
                    <Route path=":id/*" element={<ProductDetail />}>
                        <Route path="notice/" element={<ProductNotice/>}/>
                    </Route>
                </Route>
                <Route path="/cart" element={<Cart />}/>
                <Route path="users/*" element={<Outlet />}>
                    <Route path="" element={<UserIndex/>}/>
                    <Route path="coupon/" element={<UserCoupon/>}/>
                    <Route path="question/" element={<UserQuestion/>}/>
                    <Route path="notice/" element={<UserNotice/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Home() {
    return <h1>Home Page</h1>
}

// product
function ProductDetail() {
    const products = [1, 2, 3, 4, 5];
    const {id} = useParams();
    return (
        <>
            <h3>Product {id} Detail</h3>
            <ul>
                {products.map(item => {
                    return (
                        <li key={item}>
                            <Link to={`/products/${item}`}>product{item}</Link>
                            
                        </li>
                    )
                })}
            </ul>
        </>
    )
    return
}
function ProductNotice() {
    // const {id} = useParams();
    console.log(useParams());
    console.log(useLocation());
    return <h3>Product Notice</h3>
}

// cart
function Cart() {
    return <h2>Cart</h2>
}

// user
function UserIndex() {
    return <h2>User Index</h2>
}
function UserCoupon() {
    return <h2>User Coupon</h2>
}
function UserQuestion() {
    return <h2>User Question</h2>
}
function UserNotice() {
    return <h2>User Notice</h2>
}


export default App;