

const Header = () => {
  return (
    <nav className="relative container p-6 mx-auto">
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="pt-2">
                <img src="logo.svg" alt="" />
            </div>
            <div className="hidden md:flex space-x-6">
                <a href="#">Pricing</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Community</a>

            </div>

        </div>
        
    </nav>
  )
}

export default Header