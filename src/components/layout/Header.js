export const Header = () => {
    return (
        <header>
            <a className="logo" href="/">
            <img src="/static/media/logo.729fe42e7d23a7906fd5.png"  alt="" />
            <span>Shopping Cart</span></a>
            <nav className="navigation"><a aria-current="page" className="link active" href="/">Home</a><a
                className="link"
                href="/cart">Cart</a>
            </nav>
            <a className="items" href="/cart"><span>Cart: 2</span></a>
        </header>

)
}

