import NavBar from "../../components/NavBar/NavBar";
import "./Search.css"


function Search() {

	return (
        <div className="Search">
            <NavBar/>
            <div>
            <h1>Search</h1>
            {/* <form onSubmit={handleSearch}>
                <TextField>

                </TextField>

            </form> */}
            </div>
        </div>
    )
}

export default Search;